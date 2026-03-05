# BYTEZ CORP - Senior Full Stack Developer Technical Assessment

## Mini Digital Agency ERP System

A comprehensive ERP-style application designed to manage business operations for a digital marketing company, featuring client management, project tracking, task assignment, and AI-powered automation.

---

## 📋 Project Overview

This assessment evaluates expertise in:
- Node.js/Express.js Frameworks
- HTML5 + CSS3 + jQuery
- Frontend frameworks (React/Vue - optional)
- Backend architecture
- Database design
- ERP system development
- AI integration
- Secure API development
- Scalable system design

---

## 🎯 Project Scope

The system manages:
- **Clients** - Digital marketing company clients
- **Projects** - Client projects and campaigns
- **Employees** - Team members and staff
- **Tasks** - Project-specific assignments
- **Content Production** - Marketing content workflow
- **Performance Tracking** - Marketing metrics and analytics
- **AI Automation** - Intelligent content generation and insights

---

## 🛠️ Technical Stack

### Implemented Technologies

**Backend:**
- Node.js with Express.js
- PostgreSQL (Cloud - Neon)
- JWT Authentication
- bcrypt Password Hashing
- Rate Limiting & Security Middleware

**Frontend:**
- React 18
- React Router v6
- React Bootstrap
- Axios for API calls
- Role-based UI rendering

**AI Integration:**
- Google Gemini API (Free tier)
- Fallback mock content for testing
- Support for OpenAI & Hugging Face

**Database:**
- PostgreSQL (Neon Cloud)
- Proper foreign key relationships
- Normalized schema (3NF)

---

## 📦 System Modules

### Module 1: Authentication System ✅
Secure role-based authentication system.

**Implemented Features:**
- ✅ Role-based login (Admin / Manager / Employee)
- ✅ Password hashing (bcrypt)
- ✅ JWT authentication with 7-day expiry
- ✅ Protected routes with auth middleware
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ RBAC (Role-Based Access Control)

**Default Users:**
- Admin: admin@bytez.com / admin123
- Manager: manager@bytez.com / manager123
- Employee: employee@bytez.com / employee123

---

### Module 2: Client Management ✅
Comprehensive client information management.

**Implemented Features:**
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Contact details management
- ✅ Industry categorization
- ✅ Project count tracking
- ✅ Status tracking (Active/Inactive)
- ✅ Admin-only access control
- ✅ Responsive table view
- ✅ Modal forms for add/edit

---

### Module 3: Project Management System ✅
Multi-project management per client.

**Implemented Features:**
- ✅ Create and manage projects
- ✅ Assign to clients
- ✅ Team member assignment
- ✅ Deadline tracking
- ✅ Budget management
- ✅ Status management (Pending, In Progress, Completed)
- ✅ Admin & Manager access
- ✅ Project filtering and search

---

### Module 4: Task Management System ✅
Granular task tracking within projects.

**Implemented Features:**
- ✅ Create and assign tasks
- ✅ Employee assignment
- ✅ Deadline management
- ✅ Priority levels (Low, Medium, High)
- ✅ Status tracking (To Do, In Progress, Completed)
- ✅ Task filtering by status
- ✅ All users can view assigned tasks
- ✅ Admin/Manager can create/assign tasks

---

### Module 5: AI Integration ✅
AI-powered content generation and insights.

**Implemented Features:**

**AI Content Generator:**
- ✅ Topic-based content generation
- ✅ Three content types:
  - Social Media Captions
  - Blog Ideas (5 suggestions)
  - Ad Copy
- ✅ Google Gemini API integration (Free)
- ✅ Fallback mock content for testing
- ✅ Support for multiple AI providers

**AI Project Insights:**
- ✅ Project performance analytics
- ✅ Best performing projects
- ✅ Task completion statistics
- ✅ Automated suggestions

**Supported AI APIs:**
- Google Gemini (Primary - Free)
- OpenAI (Optional)
- Hugging Face (Optional)
- Mock fallback (Always available)

---

### Module 6: Dashboard Analytics ✅
Comprehensive analytics dashboard.

**Implemented Metrics:**
- ✅ Total Clients count
- ✅ Active Projects count
- ✅ Completed Tasks count
- ✅ Total Users count
- ✅ Recent activities
- ✅ Project status distribution
- ✅ Task completion rates
- ✅ Real-time data updates

---

### Module 7: Frontend UI Requirements ✅
Modern, responsive user interface.

**Implemented Features:**
- ✅ Responsive design (mobile-first)
- ✅ Modern UI with React Bootstrap
- ✅ Form validation
- ✅ Role-based navigation
- ✅ Collapsible sidebar
- ✅ Clean user experience
- ✅ Modal dialogs for forms
- ✅ Status badges and indicators

**Pages:**
- ✅ Login
- ✅ Dashboard
- ✅ Clients (Admin only)
- ✅ Projects (Admin & Manager)
- ✅ Tasks (All users)
- ✅ AI Tools (All users)

---

### Module 8: Database Architecture ✅
Properly designed relational database structure.

**Implemented:**
- ✅ PostgreSQL database (Neon Cloud)
- ✅ ER diagram documented
- ✅ Foreign key relationships
- ✅ Data normalization (3NF)
- ✅ Indexes for performance

**Tables:**
- ✅ users (id, name, email, password, role)
- ✅ clients (id, company_name, industry, contact_name, email, phone, address, status)
- ✅ projects (id, name, description, client_id, start_date, end_date, budget, status)
- ✅ tasks (id, title, description, project_id, assigned_to, priority, status, due_date)

---

### Module 9: API Layer ✅
RESTful API endpoints.

**Implemented Endpoints:**
- ✅ `POST /api/auth/login` - User authentication
- ✅ `POST /api/auth/register` - User registration
- ✅ `GET /api/clients` - Get all clients
- ✅ `POST /api/clients` - Create client (Admin)
- ✅ `PUT /api/clients/:id` - Update client (Admin)
- ✅ `DELETE /api/clients/:id` - Delete client (Admin)
- ✅ `GET /api/projects` - Get all projects
- ✅ `POST /api/projects` - Create project (Admin/Manager)
- ✅ `PUT /api/projects/:id` - Update project (Admin/Manager)
- ✅ `DELETE /api/projects/:id` - Delete project (Admin/Manager)
- ✅ `GET /api/tasks` - Get all tasks
- ✅ `POST /api/tasks` - Create task (Admin/Manager)
- ✅ `PUT /api/tasks/:id` - Update task
- ✅ `DELETE /api/tasks/:id` - Delete task (Admin/Manager)
- ✅ `POST /api/ai/generate-content` - AI content generation
- ✅ `GET /api/ai/project-insights` - AI project insights
- ✅ `GET /api/dashboard/stats` - Dashboard statistics

**Standards:**
- ✅ Proper HTTP response codes (200, 201, 400, 401, 403, 404, 500)
- ✅ JSON responses
- ✅ Comprehensive error handling
- ✅ Input validation
- ✅ JWT authentication
- ✅ Role-based authorization

---

### Module 10: Code Structure
Clean, maintainable architecture.

**Backend Structure:**
```
/controllers    - Request handlers
/models         - Database models
/views          - Template files
/middleware     - Custom middleware
/routes         - API routes
/services       - Business logic
/helpers        - Utility functions
/config         - Configuration files
```

**Code Quality:**
- Clean code principles
- Proper commenting
- Error handling
- Security best practices

---

### Module 11: Advanced Features ✅
Innovative features demonstrating system thinking.

**Implemented Features:**
- ✅ Role-Based Access Control (RBAC)
- ✅ Collapsible sidebar navigation
- ✅ Rate limiting (100 req/15min)
- ✅ Security headers (Helmet.js)
- ✅ CORS configuration
- ✅ Environment-based configuration
- ✅ Error handling middleware
- ✅ Input validation
- ✅ Password strength requirements
- ✅ JWT token expiration
- ✅ Protected routes
- ✅ Conditional UI rendering based on roles

---

## 📤 Deliverables

### Required Submissions:

1. **GitHub Repository**
   - Complete source code
   - Proper commit history
   - Branch management

2. **ER Diagram**
   - Database entity relationships
   - Visual representation

3. **Database Schema**
   - SQL scripts
   - Migration files

4. **API Documentation**
   - Endpoint descriptions
   - Request/response examples
   - Authentication details

5. **Setup Instructions**
   - Installation guide
   - Environment configuration
   - Deployment steps

6. **Demo Video**
   - 5-minute walkthrough
   - Feature demonstration
   - System overview

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 14.x
npm >= 6.x
PostgreSQL (Cloud - Neon)
```

### Environment Setup

**Backend (.env):**
```env
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
DB_TYPE=postgres
PORT=5000
NODE_ENV=development
GEMINI_API_KEY=your_gemini_api_key (optional)
```

### Installation

**1. Clone Repository:**
```bash
git clone <repository-url>
cd ByteTask_Sridhar_M4
```

**2. Backend Setup:**
```bash
cd server
npm install

# Create .env file with your credentials
cp .env.example .env

# Run database migrations
node helpers/migrate-postgres.js

# Seed admin user
node helpers/seed-admin.js

# Start server
npm run dev
```

**3. Frontend Setup (new terminal):**
```bash
cd client
npm install
npm start
```

**4. Access Application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

**5. Login Credentials:**
- Admin: admin@bytez.com / admin123
- Manager: manager@bytez.com / manager123
- Employee: employee@bytez.com / employee123

---

## 📁 Project Structure

```
digital-agency-erp/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── helpers/
│   └── config/
├── frontend/
│   ├── public/
│   ├── views/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
├── database/
│   ├── migrations/
│   └── seeds/
├── docs/
│   ├── api/
│   └── diagrams/
├── tests/
├── .env.example
├── package.json
└── README.md
```

---

## 🔐 Security Considerations

**Implemented Security Features:**
- ✅ Password hashing (bcrypt with salt rounds)
- ✅ JWT token authentication (7-day expiry)
- ✅ SQL injection prevention (parameterized queries)
- ✅ XSS protection (Helmet.js)
- ✅ CORS configuration
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ Input validation
- ✅ Secure headers
- ✅ Role-Based Access Control (RBAC)
- ✅ Protected API routes
- ✅ Environment variable protection

---

## ✅ Implementation Status

### Completed Modules:
1. ✅ **Authentication System** - JWT, RBAC, Rate Limiting
2. ✅ **Client Management** - Full CRUD with Admin access control
3. ✅ **Project Management** - Admin & Manager access
4. ✅ **Task Management** - Role-based task assignment
5. ✅ **AI Integration** - Google Gemini API with fallback
6. ✅ **Dashboard Analytics** - Real-time statistics
7. ✅ **Frontend UI** - React with role-based rendering
8. ✅ **Database Architecture** - PostgreSQL with proper relationships
9. ✅ **API Layer** - RESTful endpoints with authentication
10. ✅ **Code Structure** - Clean, maintainable architecture
11. ✅ **Advanced Features** - RBAC, collapsible sidebar, security

### Key Features:
- ✅ Role-based navigation (Admin/Manager/Employee)
- ✅ Collapsible sidebar with toggle button
- ✅ Conditional UI rendering based on user role
- ✅ AI content generation (3 types)
- ✅ Project insights with AI analysis
- ✅ Secure authentication with JWT
- ✅ PostgreSQL cloud database (Neon)
- ✅ Responsive design
- ✅ Error handling and validation

---

## 📊 Evaluation Criteria

1. **Code Quality** (20%)
2. **Functionality** (25%)
3. **Database Design** (15%)
4. **API Design** (15%)
5. **UI/UX** (10%)
6. **Security** (10%)
7. **Innovation** (5%)

---

## ⏱️ Submission Timeline

Complete and submit the project within the given time period.

---

## 📞 Support

For questions or clarifications, contact the assessment coordinator.

---

## 📄 License

This project is part of a technical assessment for BYTEZ CORP.

---

## 📦 Additional Documentation

- **RBAC_GUIDE.md** - Complete Role-Based Access Control implementation guide
- **docs/API_DOCUMENTATION.md** - Detailed API endpoint documentation
- **docs/ER_DIAGRAM.md** - Database entity relationship diagram
- **docs/SETUP_INSTRUCTIONS.md** - Step-by-step setup guide
- **docs/DEPLOYMENT_GUIDE.md** - Production deployment instructions

---

**Good luck with your assessment!** 🚀
