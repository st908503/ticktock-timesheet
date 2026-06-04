# TickTock Timesheet Management App

A modern SaaS-style Timesheet Management application built with **Next.js 15**, **TypeScript**, **TailwindCSS v4**, and modern frontend architecture principles.

This project was created as part of a Frontend Developer Technical Assessment to demonstrate:

* Clean architecture
* Authentication flow
* API integration
* Responsive UI implementation
* Component-driven development
* Scalable frontend structure
* Modern React patterns
* Type-safe development

---

# Live Demo

https://ticktock-timesheet-one.vercel.app

---

# Tech Stack

## Core

* Next.js 15 (App Router)
* React 19
* TypeScript

---

## Styling & UI

* TailwindCSS v4
* Lucide React
* clsx
* class-variance-authority
* tailwind-merge
* tw-animate-css

---

## Forms & Validation

* React Hook Form
* Zod
* @hookform/resolvers

---

## Authentication

* Mock credential-based authentication
* Local session persistence using localStorage
* Route redirection handling
* Protected dashboard access

---

## Notifications

* Sonner Toasts

Used for:

* Login success/error
* Task creation
* Task updates
* Task deletion

---

## Theme Support

* next-themes

---

## Testing

* Vitest
* React Testing Library
* Jest DOM

---

# Features

# Authentication

* Login page
* Credential validation
* Persistent login session
* Protected dashboard flow
* Prevent authenticated users from revisiting login page
* Redirect handling after login

### Demo Credentials

Email: [demo@xyz.com](mailto:demo@xyz.com)

Password: password123

---

# Dashboard

## Timesheets List

* Weekly timesheet overview
* Status badges
* Search functionality
* Status filtering
* Date range filtering
* Responsive table layout
* Empty states
* Error states
* Loading states

---

## Timesheet Details

* Weekly grouped task layout
* Daily grouped entries
* Add new task
* Edit existing task
* Delete task
* Weekly progress tracker
* Modal-based task management

---

## Entry Management

* Create entry
* Update entry
* Delete entry
* Toast notifications
* Form validation
* Optimistic UI-style updates

---

# Authentication Flow

Flow:

/login
→ validate credentials
→ persist session in localStorage
→ redirect to /timesheets

Additional handling:

* authenticated users cannot revisit login page
* browser back navigation protection implemented

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
├── hooks/
│
├── lib/
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

## Feature-Based Architecture

The project follows a feature-driven structure:

```bash
features/
   auth/
   timesheets/
```

Benefits:

* scalable architecture
* isolated business domains
* easier maintenance
* cleaner ownership boundaries
* production-style organization

---

# API Layer

Frontend components never access mock data directly.

Flow:

```bash
Component
   →
Custom Hook
   →
Service Layer
   →
/api/*
   →
Mock DB
```

Benefits:

* separation of concerns
* reusable API layer
* backend-like architecture simulation
* easier future backend migration

---

# Mock Data

Mock data stored inside:

```bash
mock/
```

Includes:

* users.json
* timesheets.json
* entries.json

Access handled through:

* internal API routes
* lib/mock-db.ts

---

# UI/UX Approach

Implemented based on supplied Figma designs.

Focus areas:

* SaaS dashboard styling
* responsive layouts
* consistent spacing system
* reusable components
* clean typography
* accessibility-friendly controls
* smooth user interactions

---

# Responsive Design

Supported breakpoints:

* Mobile
* Tablet
* Desktop

Responsive behaviors:

* adaptive spacing
* flexible layouts
* responsive tables
* mobile-friendly forms
* scalable dashboard UI

---

# Validation

Validation implemented using:

* React Hook Form
* Zod

Validation includes:

* required fields
* email validation
* password validation
* numeric validation
* error messaging

---

# State Management

The application primarily uses:

* React Hooks
* local component state
* custom hooks

Examples:

* useLogin()
* useTimesheets()
* useTimesheetEntries()

No unnecessary external state libraries were added.

---

# Toast Notifications

Sonner used for:

* login success
* login failure
* task added
* task updated
* task deleted

Provides:

* lightweight UX feedback
* modern notification system
* clean async interaction handling

---

# Loading & Error Handling

Implemented states:

* loading spinners
* empty states
* API error states
* validation states

Provides production-style UX handling.

---

# Testing

Testing stack:

* Vitest
* React Testing Library
* Jest DOM

Example test coverage:

* component rendering
* form validation
* user interactions
* authentication flow

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

Production-ready setup includes:

* App Router support
* responsive frontend
* authentication redirects
* environment-based deployment support

---

# Assumptions

* Authentication is mock-based
* No real backend persistence exists
* No database integration yet
* Mock data resets on redeploy/restart
* Pagination currently UI-focused

---

# Future Improvements

Potential enhancements:

* Prisma ORM integration
* PostgreSQL integration
* NextAuth full session integration
* Role-based access control
* Real backend APIs
* Pagination APIs
* Search APIs
* Filtering APIs
* Dark mode
* Server Actions
* Optimistic updates
* Drag-and-drop task management
* E2E testing with Playwright

---

# Design Goals

This project focuses on:

* scalable architecture
* clean frontend engineering
* reusable UI patterns
* maintainability
* developer experience
* responsive SaaS UI
* production-style structure

---

# Key Highlights

Implemented:

* Next.js App Router
* TypeScript
* Feature-based architecture
* Mock authentication
* Protected routes
* Internal API architecture
* Reusable components
* Form validation
* Toast notifications
* Responsive dashboard UI
* Grouped task timelines
* Type-safe codebase

---

# Time Spent

Approximate development time:

12–16 hours

Including:

* architecture setup
* authentication
* API structure
* UI implementation
* responsive design
* validation
* testing setup
* deployment

---

# Author

Developed as part of a Frontend Developer Technical Assessment for XYZ.
