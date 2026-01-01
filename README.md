API Blogspot (CRUD REST API)

REST API sederhana untuk fitur Blog Post (CRUD) menggunakan Express.js, Prisma, dan MySQL.
Project ini dibuat sebagai latihan backend dengan pendekatan standar industri (RESTful API).

Tech Stack

Node.js

Express.js — Web framework

Prisma ORM — Database ORM

MySQL — Database

Zod — Request validation

dotenv — Environment variables

Project Structure
src/
├── controllers/
│ ├── createPost.js
│ ├── updatePost.js
│ ├── deletePost.js
│ └── getPost.js
├── routes/
│ └── postRoutes.js
├── config/
│ └── prisma.js
├── schema/
│ └── Schema.js
└── index.js

prisma/
└── schema.prisma

Setup & Installation
Clone Repository
git clone https://github.com/username/api-blogspot.git
cd api-blogspot

Install Dependencies
npm install

Environment Variables

Buat file .env:

DATABASE_URL="mysql://root@localhost:3306/db-blogspot"

Prisma Setup
npx prisma migrate dev
npx prisma generate

Run Server
npm run dev

Server akan berjalan di:

http://localhost:3000

API Endpoints

Base URL:

/api/posts

Create Post
POST /api/posts

Get All Posts
GET /api/posts

Update Post
PUT /api/posts/:id

Delete Post
DELETE /api/posts/:id

HTTP Status Codes
Code Description
200 Request berhasil
201 Data berhasil dibuat
400 Request tidak valid
404 Data tidak ditemukan
422 Validasi gagal
500 Server error
Learning Goals

Memahami alur Client → Router → Controller → Prisma → Database

Implementasi REST API CRUD

Validasi request menggunakan Zod

Struktur folder backend yang rapi

Error handling dasar

Notes

Project ini menggunakan Prisma Client

ID menggunakan auto increment

Validasi request dilakukan sebelum query database

Endpoint DELETE tidak menggunakan request body

Author

Fajar Ashari
Backend Developer (Learning Phase)

Future Improvements

Authentication (JWT)

Pagination & filtering

Soft delete

Centralized error handler

Logging system
