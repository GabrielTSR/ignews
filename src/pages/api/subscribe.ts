import { fauna } from './../../services/fauna';
import { NextApiRequest, NextApiResponse } from 'next';
import { query as Query } from 'faunadb';
import { getSession } from 'next-auth/react';
import { stripe } from '../../services/stripe';

type User = {
    ref: {
        id: string;
    };
    data: {
        stripe_customer_id: string;
    };
};

export default async function myFunc(req: NextApiRequest, resp: NextApiResponse) {
    if (req.method === 'POST') {
        const session = await getSession({ req });

        const user = await fauna.query<User>(
            Query.Get(Query.Match(Query.Index('user_by_email'), Query.Casefold(session.user.email)))
        );

        let customerId = user.data.stripe_customer_id;

        // Handling of user duplication in stripe
        if (!customerId) {
            const stripeCustumer = await stripe.customers.create({
                email: session.user.email,
                //metadata
            });

            await fauna.query(
                Query.Update(Query.Ref(Query.Collection('users'), user.ref.id), {
                    data: { stripe_customer_id: stripeCustumer.id },
                })
            );

            customerId = user.data.stripe_customer_id;
        }

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [{ price: 'price_1KEy4MBb89UG7lgzPHaFxZqp', quantity: 1 }],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        });

        return resp.status(200).json({ sessionId: stripeCheckoutSession.id });
    } else {
        resp.setHeader('Allow', 'POST');
        resp.status(405).end('Method not allowed');
    }
}
