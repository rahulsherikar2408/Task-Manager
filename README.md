
# Task Manager App

A simple task manager application built with React, Next.js, MongoDB, and Clerk for authentication.

## Project Description

This project is a task manager application where users can create, edit, and delete tasks. Tasks are stored in a MongoDB database. Clerk is used for user authentication.

# Dependecies

- Next.js
- React
- MongoDB
- Clerk
- Axios
- React Hot Toast
- Prisma
  ```bash
  npm install next react mongodb @clerk/nextjs axios react-hot-toast
  ```
  ```bash
  npm i @prisma/client prisma@latest
  ```
# Clerk Authentication Integration

This project integrates [Clerk](https://clerk.dev/) for user authentication.

## Description

[Clerk](https://clerk.dev/) is a user authentication and identity management platform that provides secure authentication, user management, and more.

## Clerk Setup

1. Sign up for a Clerk account at [https://clerk.dev/](https://clerk.dev/).
2. Create a new Clerk application.
3. Configure your authentication settings, such as allowed sign-in methods and required user attributes.
4. Obtain your Clerk API keys: Publishable Key and Secret Key.
5. Replace the Clerk API keys in `.env.local` in the commented part.
   
# MongoDB Database Integration

This project integrates MongoDB for data storage and retrieval.

## Description

[MongoDB](https://www.mongodb.com/) is a popular NoSQL database that provides flexible document-based data storage.

## MongoDB Setup

1. Sign up for a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster and database.
3. Obtain your MongoDB connection string.
4. Replace the connection string in `.env` file.

## How to Run

1. Clone this repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser to view the app. 

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

