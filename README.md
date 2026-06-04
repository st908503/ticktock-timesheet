# TickTock Timesheet Management App

A modern SaaS-style Timesheet Management application built with **Next.js 16**, **TypeScript**, **TailwindCSS**, and **NextAuth**.

This project was created as part of a Frontend Developer Technical Assessment to demonstrate:

* Clean architecture
* API integration
* Authentication flow
* Responsive UI implementation
* Component-driven development
* Scalable folder structure
* Modern frontend best practices

---

# Live Demo

https://ticktock-timesheet-one.vercel.app

---

# Tech Stack

## Core

* Next.js 16 (App Router)
* React 19
* TypeScript

## Styling

* TailwindCSS v4
* Lucide Icons

## Forms & Validation

* React Hook Form
* Zod
* @hookform/resolvers

## Authentication

* NextAuth.js (Credentials Provider)

## UI Utilities

* class-variance-authority
* clsx
* tailwind-merge

## Testing

* Vitest
* React Testing Library
* Jest DOM

---

# Features

## Authentication

* Login page
* Credential-based authentication
* Session handling using NextAuth
* Protected dashboard routes
* Persistent login session

### Demo Credentials

Email: [demo@xyz.com](mailto:demo@xyz.com)
Password: password123

---

# Dashboard

## Timesheets List

* Weekly timesheet overview
* Status badges
* Action buttons
* Responsive table layout
* Empty states
* Error states
* Loading states

## Timesheet Details

* Weekly grouped task layout
* Daily task sections
* Add new task row
* Edit task
* Delete task
* Weekly progress tracker
* Task grouping by date

## Entry Management

* Create task entry
* Edit task entry
* Delete task entry
* Form validation
* Modal-based workflow

---

# Authentication Flow

The application uses **NextAuth Credentials Provider** with mock authentication.

Flow:

/login
→ authenticate user
→ create session
→ redirect to /timesheets

---

# Project Structure

```bash
src/
│
├── app/
│   ├── (auth)/
│   │   └── login/
│   │
│   ├── (dashboard)/
│   │   └── timesheets/
│   │
│   ├── api/
│   │   ├── auth/
│   │   ├── timesheets/
│   │   └── entries/
│   │
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── shared/
│   └── ui/
│
├── features/
│   ├── auth/
│   └── timesheets/
│
├── lib/
│   ├── auth.ts
│   ├── fetcher.ts
│   ├── mock-db.ts
│   └── utils.ts
│
├── mock/
│   ├── users.json
│   ├── timesheets.json
│   └── entries.json
│
└── middleware.ts
```

---

# Architecture Decisions

## Feature-Based Structure

The project uses a feature-based architecture:

```bash
features/
   auth/
   timesheets/
```

Benefits:

* Better scalability
* Easier maintenance
* Clear separation of concerns
* Easier onboarding for teams

---

# API Layer

All frontend components communicate ONLY through internal API routes.

Example:

```bash
Component
   →
Service
   →
/api/*
   →
Mock DB
```

This follows real production architecture patterns.

---

# Mock Data

Mock data is stored locally inside:

```bash
mock/
```

Includes:

* users.json
* timesheets.json
* entries.json

The UI NEVER accesses mock data directly.

Only API routes interact with:

```bash
lib/mock-db.ts
```

---

# UI/UX Approach

The UI was implemented based on supplied Figma screens.

Focus areas:

* Clean SaaS dashboard design
* Proper spacing system
* Responsive layouts
* Accessible form controls
* Consistent typography
* Reusable UI patterns

---

# Responsive Design

Supported breakpoints:

* Mobile
* Tablet
* Desktop

Key responsive behavior:

* Collapsing layouts
* Scrollable tables
* Adaptive spacing
* Mobile-friendly forms

---

# Validation

Form validation is implemented using:

* Zod
* React Hook Form

Validation includes:

* Required fields
* Number validation
* Minimum/maximum limits
* Error messaging

---

# State Management

The project uses:

* React Hooks
* Local component state
* Custom hooks

Examples:

```bash
useTimesheets()
useTimesheetEntries()
useLogin()
```

No unnecessary external state libraries were added.

---

# Testing

Testing setup includes:

* Vitest
* React Testing Library
* Jest DOM

Example test targets:

* Form validation
* Component rendering
* User interactions

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create:

```bash
.env.local
```

Add:

```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

For production:

```env
NEXTAUTH_URL=https://your-production-domain.com
```

---

# Running the Project

## Development

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

## Start Production Server

```bash
npm run start
```

---

# Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

# Deployment

The project is deployed using:

* Vercel

Production-ready configuration includes:

* Environment variables
* NextAuth session handling
* App Router support

---

# Assumptions

* Authentication is mock-based only
* No real database is connected
* No backend persistence layer exists
* Mock data resets on redeploy/server restart
* Pagination UI is static for design accuracy

---

# Future Improvements

Possible enhancements:

* Real database integration
* Prisma ORM
* Server Actions
* Role-based access control
* Real pagination
* Search API
* Filtering API
* Dark mode
* Drag-and-drop task management
* Optimistic UI updates
* E2E testing with Playwright

---

# Design Goals

This project focuses on:

* Production-style architecture
* Readable code
* Reusable components
* Developer experience
* Maintainability
* Clean UI implementation

---

# Key Highlights

## Implemented

* Next.js App Router
* Feature-based architecture
* NextAuth authentication
* Internal API routes
* Mock backend
* Form validation
* Responsive SaaS UI
* Grouped task timeline
* Reusable components
* Type-safe codebase

---

# Time Spent

Approximate development time:

12–16 hours

Including:

* Architecture
* Authentication
* API setup
* UI implementation
* Responsive design
* Validation
* Testing setup
* Deployment

---

# Author

Developed as part of a Frontend Developer Technical Assessment for XYZ.
