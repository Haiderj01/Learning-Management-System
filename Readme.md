# 📚 Learning Management System (LMS)

A modern **Learning Management System (LMS)** built with the **MERN Stack** that allows students to browse and purchase courses while providing educators with a dashboard to manage courses, bookings, and revenue.

## Features

- 🔐 User Authentication with Clerk
- 📖 Browse and enroll in courses
- 💳 Secure Stripe payment integration
- 📚 Course management (Create, Update, Delete)
- 📊 Admin dashboard with analytics
- 👥 Student enrollment tracking
- 📱 Responsive user interface

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Clerk
- **Payments:** Stripe

## Project Structure

```
LMS/
├── frontend/
├── admin/
├── backend/
└── README.md
```

## Installation

```bash
git clone https://github.com/your-username/LMS.git
cd LMS

npm install
```

## Environment Variables

Create a `.env` file and add:

```env
PORT=4000
MONGODB_URI=your_mongodb_uri

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

STRIPE_SECRET_KEY=your_stripe_secret_key

FRONTEND_URL=http://localhost:5173
VITE_API_URL=http://localhost:4000
```

## Run the Project

### Backend

```bash
cd backend
npm run server
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin

```bash
cd admin
npm run dev
```

##  Deployment

- **Frontend:** Vercel
- **Admin:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

## Author

**Haider Jhalodwala**

#  License

This project is developed for educational purposes and personal learning.