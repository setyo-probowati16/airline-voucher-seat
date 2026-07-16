#!/bin/bash

set -e

echo "🚀 Starting Airline Voucher Seat Application..."

docker compose up --build -d

echo ""
echo "Frontend: http://localhost:5173"
echo "Backend : http://localhost:3000"