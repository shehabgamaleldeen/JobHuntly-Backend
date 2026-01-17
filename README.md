# 🚀 JobHuntly - Backend API

> RESTful API built with Express.js, MongoDB, and Socket.io for a modern job search platform

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.0.0-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8.3-010101?logo=socket.io&logoColor=white)](https://socket.io/)

## 📖 Overview

JobHuntly Backend is a robust, scalable REST API that powers the JobHuntly job search platform. Built with Express.js and MongoDB, it provides comprehensive endpoints for job management, user authentication, application tracking, real-time notifications, and payment processing.

**🔗 Related Repositories:**
- [Frontend Application](https://github.com/MoazRyhan/JobHuntly-frontend) - React + TypeScript
- [Admin Dashboard](https://github.com/MoazRyhan/JobHuntly-Admin) - Next.js Admin Panel

## ✨ Key Features

### Core Functionality
- **🔐 Authentication & Authorization** - JWT-based auth with role-based access control
- **👤 User Management** - Job seekers, recruiters, and admin roles
- **💼 Job CRUD Operations** - Complete job posting and management system
- **📝 Application System** - Job application submission and tracking
- **🏢 Company Profiles** - Company information and branding management
- **🔔 Real-time Notifications** - Socket.io powered instant updates
- **💳 Payment Integration** - Stripe for premium subscriptions
- **📧 Email Service** - Nodemailer for verification and notifications
- **📁 File Upload** - Multer for resume and document handling
- **🛡️ Security** - bcrypt password hashing, JWT tokens, input validation

### API Modules
- **Auth** - Registration, login, password reset, email verification
- **Jobs** - CRUD operations, filtering, search, recommendations
- **Applications** - Submit, track, update application status
- **Companies** - Profile management, job listings
- **Applicants** - Profile, resume, application history
- **Admin** - User management, platform analytics
- **Notifications** - Real-time updates via WebSocket
- **Stripe** - Payment processing and subscription management
- **Settings** - User preferences and account settings
- **Skills** - Skill management and matching

## 🛠️ Tech Stack

### Core Technologies
- **Express.js 5.2.1** - Fast, minimalist web framework
- **MongoDB 9.0.0** (Mongoose) - NoSQL database with ODM
- **Socket.io 4.8.3** - Real-time bidirectional communication
- **Node.js 18+** - JavaScript runtime

### Security & Authentication
- **bcrypt 6.0.0** - Password hashing
- **jsonwebtoken 9.0.3** - JWT token generation/verification
- **crypto-js 4.2.0** - Encryption utilities
- **cors 2.8.5** - Cross-origin resource sharing

### Validation & Email
- **Joi 18.0.2** - Schema validation
- **Nodemailer 7.0.11** - Email sending service

### File Handling & Payments
- **Multer 2.0.2** - Multipart/form-data file uploads
- **Stripe 20.1.0** - Payment processing

### Development Tools
- **Nodemon 3.1.11** - Auto-restart during development
- **dotenv 17.2.3** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MoazRyhan/JobHuntly-Backend.git
cd JobHuntly-Backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/jobhuntly
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jobhuntly

# JWT Secrets
JWT_SECRET=your_super_secret_jwt_key_here
JWT_REFRESH_SECRET=your_refresh_token_secret_here
JWT_EXPIRES_IN=7d

# Email Configuration (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:3001

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

4. **Run the server**

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:3000`

### Available Scripts

```bash
npm start        # Run server in production
npm run dev      # Run with nodemon (auto-restart)
npm run watch    # Run with Node.js --watch flag
```

## 📁 Project Structure

```
src/
├── Config/              # Configuration files
│   └── database.js      # MongoDB connection
├── DB/
│   └── Models/          # Mongoose schemas
│       ├── UserModel.js
│       ├── JobModel.js
│       ├── ApplicationModel.js
│       └── CompanyModel.js
├── Middlewares/         # Express middlewares
│   ├── auth.middleware.js
│   ├── validation.middleware.js
│   └── upload.middleware.js
├── Modules/             # Feature modules
│   ├── auth/            # Authentication
│   ├── job/             # Job operations
│   ├── applicant/       # Applicant features
│   ├── company/         # Company management
│   ├── jobApplications/ # Application handling
│   ├── admin/           # Admin operations
│   ├── notification/    # Real-time notifications
│   ├── Stripe/          # Payment processing
│   ├── settings/        # User settings
│   ├── Skills/          # Skill management
│   └── upload/          # File uploads
├── Utils/               # Utility functions
│   ├── routerHandler.utils.js
│   └── validation.utils.js
└── Main.js              # Application entry point
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register          # Register new user
POST   /api/auth/login             # User login
POST   /api/auth/verify-email      # Email verification
POST   /api/auth/forgot-password   # Request password reset
POST   /api/auth/reset-password    # Reset password
POST   /api/auth/refresh-token     # Refresh JWT token
```

### Jobs
```
GET    /api/jobs                   # Get all jobs (with filters)
GET    /api/jobs/:id               # Get single job
POST   /api/jobs                   # Create job (recruiter only)
PUT    /api/jobs/:id               # Update job (recruiter only)
DELETE /api/jobs/:id               # Delete job (recruiter only)
GET    /api/jobs/search            # Search jobs
GET    /api/jobs/recommended       # Get recommended jobs
```

### Applications
```
GET    /api/applications           # Get user applications
POST   /api/applications           # Submit application
GET    /api/applications/:id       # Get application details
PUT    /api/applications/:id       # Update application status
DELETE /api/applications/:id       # Withdraw application
```

### Companies
```
GET    /api/companies              # Get all companies
GET    /api/companies/:id          # Get company profile
PUT    /api/companies/:id          # Update company (recruiter only)
GET    /api/companies/:id/jobs     # Get company jobs
```

### Admin
```
GET    /api/admin/users            # Get all users
PUT    /api/admin/users/:id        # Update user status
GET    /api/admin/analytics        # Platform analytics
DELETE /api/admin/users/:id        # Delete user
```

### Stripe Payments
```
POST   /api/stripe/create-checkout # Create payment session
POST   /api/stripe/webhook         # Stripe webhook handler
GET    /api/stripe/subscription    # Get subscription status
```

### Notifications (Socket.io)
```
Socket Events:
- connection              # Client connects
- notification:new        # New notification
- application:status      # Application status update
- disconnect              # Client disconnects
```

## 🔐 Authentication Flow

1. User registers → Email verification sent
2. User verifies email → Account activated
3. User logs in → JWT access token + refresh token returned
4. Client includes token in `Authorization: Bearer <token>` header
5. Protected routes validate JWT via middleware
6. Token expires → Use refresh token to get new access token

## 🗄️ Database Schema

### User Model
```javascript
{
  email: String (unique),
  password: String (hashed),
  role: Enum ['applicant', 'recruiter', 'admin'],
  profile: Object,
  isVerified: Boolean,
  isPremium: Boolean,
  createdAt: Date
}
```

### Job Model
```javascript
{
  title: String,
  company: ObjectId (ref: Company),
  description: String,
  requirements: [String],
  salary: { min: Number, max: Number },
  location: String,
  type: Enum ['full-time', 'part-time', 'contract'],
  status: Enum ['active', 'closed'],
  createdAt: Date
}
```

### Application Model
```javascript
{
  job: ObjectId (ref: Job),
  applicant: ObjectId (ref: User),
  resume: String (file path),
  status: Enum ['pending', 'reviewed', 'accepted', 'rejected'],
  answers: [Object],
  appliedAt: Date
}
```

## 🛡️ Security Features

- **Password Hashing** - bcrypt with salt rounds
- **JWT Authentication** - Secure token-based auth
- **Input Validation** - Joi schema validation
- **CORS Protection** - Configured allowed origins
- **Rate Limiting** - Prevent brute force attacks
- **SQL Injection Prevention** - Mongoose parameterized queries
- **XSS Protection** - Input sanitization
- **File Upload Validation** - Type and size restrictions

## 🔔 Real-time Features (Socket.io)

The backend implements WebSocket connections for:
- New job application notifications
- Application status updates
- New job postings matching user preferences
- System announcements

## 📧 Email Templates

Automated emails sent via Nodemailer:
- Welcome email
- Email verification
- Password reset
- Application confirmation
- Application status updates
- Premium subscription confirmation

## 🧪 Testing

```bash
# Run tests (if configured)
npm test
```

## 🚀 Deployment

### Environment Setup
Ensure all environment variables are configured in your hosting platform.

### Recommended Platforms
- **Heroku** - Easy deployment with MongoDB Atlas
- **Railway** - Modern deployment platform
- **DigitalOcean** - VPS with full control
- **AWS EC2** - Scalable cloud hosting

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Use MongoDB Atlas or managed database
- [ ] Configure CORS for production domains
- [ ] Set up SSL/TLS certificates
- [ ] Enable rate limiting
- [ ] Configure logging and monitoring
- [ ] Set up automated backups

## 🤝 Contributing

This is a capstone project for the NTI Full-Stack Development Program. Contributions are welcome!

## 👨‍💻 Authors

**Shehab Gamal El-Deen**
- GitHub: [@000Shehab000](https://github.com/000Shehab000)
- LinkedIn: [Shehab Gamal El-Deen](https://www.linkedin.com/in/shehab-gamal-el-deen/)

**Team Members:**
- Moaz Ryhan - [@MoazRyhan](https://github.com/MoazRyhan)

## 📄 License

This project is part of the NTI Open-Source Applications Developer Program.

## 🙏 Acknowledgments

- National Telecommunication Institute (NTI)
- Open-Source Applications Developer Program
- All team members and instructors

---

**⭐ If you find this project helpful, please give it a star!**
