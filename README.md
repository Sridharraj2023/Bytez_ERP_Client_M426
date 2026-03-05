# React Frontend - Digital Agency ERP

## 🚀 Quick Start

```bash
cd client
npm install
npm start
```

App runs on http://localhost:3000

## 🔑 Login Credentials

- **Admin:** admin@bytez.com / admin123
- **Manager:** manager@bytez.com / manager123
- **Employee:** employee@bytez.com / employee123

## ✨ Features

- React 18 with Hooks
- React Router v6
- React Bootstrap UI
- Axios API integration
- JWT Authentication
- Protected Routes
- Role-Based Access Control (RBAC)
- Collapsible Sidebar
- Conditional UI Rendering

## 📊 Pages

- **Login** - Authentication page
- **Dashboard** - Analytics and statistics (All roles)
- **Clients** - Client management (Admin only)
- **Projects** - Project management (Admin & Manager)
- **Tasks** - Task management (All roles)
- **AI Tools** - AI content generation (All roles)

## 🏛️ Project Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Layout.js          # Main layout with sidebar
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   ├── Clients.js
│   │   ├── Projects.js
│   │   ├── Tasks.js
│   │   └── AITools.js
│   ├── services/
│   │   └── api.js             # API service layer
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## 🔐 Role-Based Features

### Admin
- Full access to all features
- Manage clients (CRUD)
- Manage projects (CRUD)
- Manage tasks (CRUD)
- View dashboard
- Use AI tools

### Manager
- Manage projects (CRUD)
- Manage tasks (CRUD)
- View dashboard
- Use AI tools
- Cannot access clients

### Employee
- View assigned tasks
- Update task status
- View dashboard
- Use AI tools
- Cannot create/delete tasks

## 🛠️ Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder.

## 📝 Environment Variables

Create `.env` file:

```env
REACT_APP_API_URL=http://localhost:5000
```

## 📦 Dependencies

- react: ^18.x
- react-router-dom: ^6.x
- react-bootstrap: ^2.x
- bootstrap: ^5.x
- axios: ^1.x

## 🌐 API Integration

All API calls are centralized in `src/services/api.js`:

```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Auto-attach JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

## ✅ Features Implemented

- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Role-Based Navigation
- ✅ Collapsible Sidebar
- ✅ Responsive Design
- ✅ Modal Forms
- ✅ Form Validation
- ✅ Error Handling
- ✅ Loading States
- ✅ Conditional Rendering

