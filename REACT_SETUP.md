# React Frontend Setup Guide

## Installation

```bash
cd client
npm install
```

## Start Development Server

```bash
npm start
```

The app will open at http://localhost:3000

## Build for Production

```bash
npm run build
```

## Project Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Layout.js
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   ├── Clients.js
│   │   ├── Projects.js
│   │   ├── Tasks.js
│   │   └── AITools.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Features

- React 18
- React Router v6
- React Bootstrap
- Axios for API calls
- JWT Authentication
- Protected Routes

## Default Login

- Email: admin@bytez.com
- Password: password123
