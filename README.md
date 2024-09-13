Travel Package Booking System
This is a complete travel package booking system with a Next.js frontend and a Strapi backend. The system allows users to view available travel packages, check detailed package information, and book packages if slots are available. The booking feature is secured using token-based authentication.

Repository Structure
This repository contains two main applications:

Frontend (travel-website-app): Built with Next.js to display travel packages and handle the booking process.
Backend (travel-strapi-app): Built with Strapi CMS to manage travel packages, bookings, and authentication.

├── travel-webapp/      # Next.js frontend
├── travel-strapi-app/       # Strapi backend
└── README.md                # Project documentation
Technologies Used
Node.js: v20.15.1 (LTS)
Next.js: v14.2.8 (Frontend)
Strapi: v4.25.10 (Backend CMS)
Database: PostgreSQL
Prerequisites
Node.js: v20.15.1 (LTS)
Git: Required to clone the project
PostgreSQL: Make sure PostgreSQL is installed and running
Installation and Setup
1. Clone the Repository
git clone https://github.com/Nirakarr/TravelSite.git
cd TravelSite
2. Backend Setup (travel-strapi-app)
cd travel-strapi-app
npm install
Create a .env file in the travel-strapi-app directory with the following content:

HOST=0.0.0.0
PORT=1337
APP_KEYS=5yTNl5jnPk76xb9z/wmsfw==,dTH3f5phj32cxYN12b7Zaw==,4BpTtOYJrPgCUh6jrPQbUA==,kKUJ1tAELGWI2IFmTZEPDQ==
API_TOKEN_SALT=DaNKr/BfM0xO3SQMDm9Bvg==
ADMIN_JWT_SECRET=Rd0q3Rig7CEGqb+NbOug5A==
TRANSFER_TOKEN_SALT=sJKzCV8I3nIlP5pvVWLmMg==
JWT_SECRET=hfXA0b5yBycldYSC/TX4OQ==

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=travel_practise_webapp
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_SSL=false

Start the Strapi backend:
npm run develop
The backend will be running at http://localhost:1337/admin.

3. Frontend Setup (travel-webapp)
cd ../travel-webapp
npm install
Create a .env file in the travel-website-app directory with the following content:

NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_IMAGE_URL=http://localhost:1337
NEXT_PUBLIC_API_TOKEN="19785333d9abc353db8ff845a8d3aeaaef29b8201725a69348
3bfd9a8998aba1ebb7bfb3794e7115064e0cb9aa597352187f7b35d96b4a1cc56d9448536f9ba85f28677b66d54e5253be2e78529e84294bc61243a1d24fce43293ef219995370589c1f9e884e8390ea0a57906d7b35ff7ba198da781b238bd779844cb7494b6d"
Start the Next.js frontend:
npm run build
npm run dev (development mode)
npm start (production mode)
The frontend will be running at http://localhost:3000.

Usage
1. Listing Travel Packages
Navigate to http://localhost:3000 to view all available travel packages.
Each package displays the destination, price, available slots, and a "Book Now" button.
2. Viewing Travel Package Details
Click on any travel package to view its detailed information such as description, duration, price, and available slots.
3. Booking a Travel Package
On the detailed package page, if slots are available, fill in your details and book the package.
Bookings are authenticated using a token-based system. Ensure you have the correct API token in the .env file.
Environment Variables
You need to configure the following environment variables in your .env files:

Backend (travel-strapi-app/.env)
HOST=0.0.0.0
PORT=1337
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...

DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=travel_practise_webapp
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_SSL=false
Frontend (travel-webapp/.env)
NEXT_PUBLIC_API_URL=http://localhost:1337
NEXT_PUBLIC_IMAGE_URL=http://localhost:1337
NEXT_PUBLIC_API_TOKEN=your_api_token_here
Database
The project uses PostgreSQL as the database for storing travel package and booking data.
Ensure that your PostgreSQL server is running, and that the database configuration in .env is correct.

