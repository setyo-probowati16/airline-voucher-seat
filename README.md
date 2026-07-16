# Aero Airline Voucher Seat Application

A full-stack web application for generating random seat vouchers for airline crews. The application prevents duplicate voucher generation for the same flight number and flight date while assigning three unique random seats based on the selected aircraft type.

---

# Tech Stack

## Frontend

* React 19
* TypeScript
* Vite
* React Hook Form
* Zod
* Axios
* Tailwind CSS v4
* shadcn/ui

## Backend

* Node.js
* Express
* TypeScript
* SQLite (better-sqlite3)

---

# Project Structure

```text
project/
├── backend/
├── frontend/
├── scripts/
│   ├── start.sh
│   └── stop.sh
├── docker-compose.yml
├── package.json
└── README.md
```

---

# Prerequisites

Before running this project, make sure the following software is installed:

* Node.js 22+
* npm 10+
* Git

Optional (recommended)

* Docker Desktop

---

# Installation

Clone the repository.

```bash
git clone <repository-url>
cd airline-voucher-seat
```

Install all dependencies.

```bash
npm install
```

or manually

```bash
cd backend
npm install

cd ../frontend
npm install
```

---

# Running the Application

## Option 1 — Local Development

### Backend

Create `.env` inside the `backend` folder.

```env
PORT=3000
DB_NAME=vouchers.db
```

Run the backend.

```bash
cd backend
npm run dev
```

Backend URL

```
http://localhost:3000
```

---

### Frontend

Create `.env` inside the `frontend` folder.

```env
VITE_API_URL=http://localhost:3000/api
```

Run the frontend.

```bash
cd frontend
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## Option 2 — Docker (Optional)

Start all services.

```bash
./scripts/start.sh
```

Stop all services.

```bash
./scripts/stop.sh
```

Or use Docker Compose directly.

```bash
docker compose up --build
```

```bash
docker compose down
```

Once all containers are running:

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:3000
```

---

# API Endpoints

## Check Voucher

```
POST /api/vouchers/check
```

Request

```json
{
  "flightNumber": "GA123",
  "date": "2026-07-16"
}
```

Response

```json
{
  "exists": false
}
```

---

## Generate Voucher

```
POST /api/vouchers/generate
```

Request

```json
{
  "name": "John Doe",
  "id": "EMP001",
  "flightNumber": "GA123",
  "date": "2026-07-16",
  "aircraft": "ATR"
}
```

Response

```json
{
  "success": true,
  "seats": [
    "12A",
    "14C",
    "18F"
  ]
}
```

---

# Business Rules

* A voucher can only be generated once for the same flight number and flight date.
* Three unique random seats are generated for each voucher.
* Supported aircraft types:

  * ATR
  * Airbus 320
  * Boeing 737 Max

---

# Development

Run backend

```bash
cd backend
npm run dev
```

Run frontend

```bash
cd frontend
npm run dev
```

---

# Build

Build backend

```bash
cd backend
npm run build
```

Build frontend

```bash
cd frontend
npm run build
```

Or build both projects from the root directory.

```bash
npm run build
```
