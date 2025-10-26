# Workforce Scheduler — Backend

Simple Node/Express scaffold for the Workforce Scheduler backend.

## Features

- Express.js API
- MongoDB (Mongoose) models for users, resources and schedules
- JWT authentication with role-based access control (admin / manager / user)
- Seed script to create sample data

## Prerequisites

- Node.js 18+ and npm
- MongoDB (local or remote). For local testing we assume a local MongoDB instance and MongoDB Compass.

## Quick start (local)

1. From repository root, install dependencies (if not already):

```powershell
cd backend
npm install
```

2. Add environment variables (see below) in `backend/.env`.

3. Start the server in development mode:

```powershell
npm run dev
```

The server will start on the port defined in `.env` (default: `5000`) and expose the API routes under `/api`.

## Environment variables

Create a file named `.env` at `backend/.env` with the following keys:

```
MONGODB_URI=mongodb://localhost:27017/workforce-scheduler
JWT_SECRET=your-super-secret-key-change-in-production
PORT=5000
```

- `MONGODB_URI`: MongoDB connection string. For MongoDB Compass or local testing use `mongodb://localhost:27017/workforce-scheduler` (or your Atlas connection string).
- `JWT_SECRET`: Secret key used to sign JWT tokens. Use a secure, long random string in production.
- `PORT`: Port the backend listens on (default 5000).

## Seed the database (sample data)

A seed script is included at `backend/scripts/seed.js`. It will insert sample users, resources and schedules.

Run the seed script:

```powershell
cd backend
node scripts/seed.js
```

This will clear the `users`, `resources`, and `schedules` collections and insert sample documents. Sample credentials created by the seed:

- Admin: `admin@example.com` / `admin123`
- Manager: `manager@example.com` / `manager123`
- User: `user@example.com` / `user123`

## Connecting with MongoDB Compass

1. Open MongoDB Compass.
2. Use the connection string from `MONGODB_URI` (for local: `mongodb://localhost:27017`).
3. Connect and open the `workforce-scheduler` database to view collections: `users`, `resources`, `schedules`.

## API overview (short)

Base URL: `http://localhost:<PORT>/api` (default PORT `5000`)

Auth
- `POST /api/auth/register` — register a new user (returns JWT)
- `POST /api/auth/login` — login (returns JWT)

Users
- `GET /api/users/profile` — get current user profile (auth required)
- `PUT /api/users/profile` — update profile (auth required)
- `GET /api/users` — list users (admin only)
- `PATCH /api/users/:id/role` — change user role (admin only)

Resources
- `GET /api/resources` — list resources (auth required)
- `POST /api/resources` — create resource (admin/manager)
- `PUT /api/resources/:id` — update resource (admin/manager)
- `DELETE /api/resources/:id` — delete resource (admin)

Schedules
- `GET /api/schedules` — list schedules (auth required)
- `POST /api/schedules` — create schedule (admin/manager)
- `PUT /api/schedules/:id` — update schedule (admin/manager)
- `DELETE /api/schedules/:id` — delete schedule (admin)
- `GET /api/schedules/range?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` — schedules in a date range

Notes:
- Protected routes expect an `Authorization: Bearer <token>` header. Obtain token from login/register responses.
- Passwords are hashed with bcrypt before storage.

## Example: create admin via curl

```bash
curl -X POST http://localhost:5000/api/auth/register \
	-H "Content-Type: application/json" \
	-d '{"username":"admin","email":"admin@example.com","password":"admin123","role":"admin"}'
```

## Development notes

- Run `npm run dev` to start with `nodemon` (auto-restarts on file changes).
- The server uses `backend/index.js` as the main entry point and the routes are mounted under `/api`.

## Tests

There are no automated tests included yet. Add unit/integration tests and CI as next steps.

## License

MIT

```
1. cd backend
2. npm install
3. npm start

The server listens on port 3001 and exposes GET / returning a JSON message.
=======
Simple Node/Express scaffold for the Workforce Scheduler backend.

Quick start:

1. cd into this folder
2. npm install
3. npm start

The server listens on port 3001 by default and exposes a GET `/` route that returns a JSON message.
>>>>>>> 28e48f2 (chore: initial scaffold for frontend and backend)
