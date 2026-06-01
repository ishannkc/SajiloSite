# SajiloSite

SajiloSite is an AI website builder that generates modern, responsive sites using OpenRouter's Deepseek model. It includes Google authentication, user sessions, and a basic generation UI. The generation flow is still under development.

## Tech stack

Frontend
- React (Vite)
- Tailwind CSS
- Motion (`motion`)
- Redux Toolkit
- Firebase Auth

Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT cookies
- OpenRouter (Deepseek model: `deepseek/deepseek-chat`)

## Features

- Google sign-in (Firebase Auth) with backend session cookie
- Protected routes for dashboard and generation pages
- User session lookup via `GET /api/user/me`
- Modern UI with Motion animations and Tailwind styling

## Repository structure

```
client/   # React app (Vite)
server/   # Express API
```

## Requirements

- Node.js 18+ recommended
- MongoDB connection string (Atlas or local)
- Firebase project (Web app) for Google auth
- OpenRouter API key

## Environment variables

Create `.env` files in both `client` and `server`.

### server/.env

```
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
```

### client/.env

```
VITE_SERVER_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

Note: Firebase project details are currently hardcoded in [client/src/firebase.js](client/src/firebase.js).

## Setup

### 1) Install dependencies

```
# API
cd server
npm install

# Web
cd ../client
npm install
```

### 2) Run locally (two terminals)

```
# API
cd server
npm run dev
```

```
# Web
cd client
npm run dev
```

The client defaults to `http://localhost:5173`. The API defaults to `http://localhost:5000`.



The backend uses OpenRouter with the Deepseek model:

```
const model = "deepseek/deepseek-chat";
```

See [server/config/openRouter.js](server/config/openRouter.js) for request configuration.

## Project status

This project is in progress. The website generation flow and schema are not finished yet.
