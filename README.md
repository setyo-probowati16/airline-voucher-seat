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
│   ├── .env.example
│   ├── Dockerfile
│   └── ...
├── frontend/
│   ├── .env.example
│   ├── Dockerfile
│   └── ...
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
git clone https://github.com/setyo-probowati16/airline-voucher-seat.git
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

Create environment files from the provided examples.

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Update the environment variables if necessary.

---

# Running the Application

## Option 1 — Local Development

### Backend

Run the backend server.

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

Open another terminal and run the frontend.

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

To stop the application.

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

Run the backend.

```bash
cd backend
npm run dev
```

Run the frontend.

```bash
cd frontend
npm run dev
```

---

# Build

Build the backend.

```bash
cd backend
npm run build
```

Build the frontend.

```bash
cd frontend
npm run build
```

Or build both applications from the project root.

```bash
npm run build
```
