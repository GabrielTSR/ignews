<h1 align="center">
  <img alt="Logo" src="./public/images/logo.svg" alt="ig.News">
</h1>

<h1 align="center">
    ig.News - Next.js
</h1>
<p align="center">Newsletter subscription application with payment via stripe</p>

<p align="center">
 <a href="#sobre-o-projeto">About the project</a> •
 <a href="#tecnologias">Technologies</a> •
 <a href="#configurações-necessárias">Required settings</a> •
 <a href="#licença">Liscence</a> •
 <a href="#autor">Author</a>
</p>

## About the project

The project aims to study and develop an application in ReactJS with NextJS for post listing and subscription system.

The application was developed using the NextJS framework applying concepts such as external API consumption, Root API, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE for subscription payments, NextAuth for authentication with Github, FaunaDB to store information database and Prismic CMS for adding and managing post content.

The project was developed as a practice of module 03 classes of the [Ignite da Rocketseat](https://rocketseat.com.br/)

---

## Technologies

Below are the technologies used to build the application

-   [ReactJS](https://reactjs.org/)
-   [NextJS](https://nextjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [SASS](https://sass-lang.com/)
-   [Next-Auth](https://next-auth.js.org/)
-   [Stripe](https://stripe.com/)
-   [FaunaDB](https://fauna.com/)
-   [Prismic CMS](https://prismic.io/)

---

## Required settings

### **Requirements**

Necessary to carry out the installations:

-   [Git](https://git-scm.com/)
-   [Yarn](https://classic.yarnpkg.com)
-   [Stripe CLI](https://stripe.com/docs/stripe-cli)

Create account and configure external services:

-   [Stripe](https://stripe.com/)
-   [FaunaDB](https://fauna.com/)
-   [Prismic CMS](https://prismic.io/)

_Services settings are located in the servicesConfig.md file at the root of the project._

### **Project clone**

```bash
# Run the git clone command to clone the repository
$ git clone https://github.com/GabrielTSR/ignews.git
# Enter the cloned repository folder
$ cd ignews
```

### **Starting the project**

```bash
# Run yarn to install dependencies
$ yarn

# At the root of the project create a copy of the .env.local.example file
# Change the copy name to .env.local
# Fill in the environment variables according to the instructions
$ cp .env.local.example .env.local

# Run stripe listen to listen for webhook events
$ stripe listen --forward-to localhost:3000/api/webhooks

# To start the application
$ yarn dev

```

---

## License

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.

---

## Author

Made by Gabriel Tavares 👋🏽 Get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/gabrieltsr/)
[![Gmail Badge](https://img.shields.io/badge/-gabrielalvesrocha22@gmail.com-red?style=flat-square&link=mailto:gabrielalvesrocha22@gmail)](mailto:gabrielalvesrocha22@gmail)
