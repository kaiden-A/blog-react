# Blog React 📝

A full-stack blog application built with **React** for the frontend and **Node.js / Express** for the backend.  
Users can create, edit, delete, and read blog posts in a simple, responsive interface.  
The project demonstrates modern full-stack development practices using RESTful APIs.

🌐 **Live demo:** [https://blog-react-black.vercel.app](https://blog-react-black.vercel.app)

---

## 🚀 Features

- 🧑‍💻 User authentication (JWT-based)
- ✍️ Create, read, update, and delete blog posts
- 👥 Follow other authors
- ❤️ Like and comment on posts
- 🖼️ User profile and profile picture system
- 📱 Responsive design for all devices
- ☁️ Frontend hosted on **Vercel**, backend on **Render**

---

## 🧩 Tech Stack

**Frontend**
- React
- React Router
- Context API
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Cookie-based sessions

**Deployment**
- Frontend → Vercel  
- Backend → Render  
- Database → MongoDB Atlas

---

## 📁 Folder Structure

blog-react/
│
├── backend/ # Backend (Node.js + Express)
│ ├── controllers/ # Request logic
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API endpoints
│ ├── middleware/ # Auth middleware
│ ├── server.js # Entry point
│ ├── .env.example # Example env file
│ └── package.json
│
├── frontend/ # React Frontend
│ ├── src/
│ │ ├── components/ # UI Components
│ │ ├── pages/ # Page-level components
│ │ ├── context/ # React Context (Auth, etc.)
│ │ ├── utils/ # Helper functions
│ │ └── App.js
│ ├── public/
│ └── package.json
│
├── .gitignore
├── README.md
└── LICENSE


---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kaiden-A/blog-react.git
cd blog-react
cd backend
npm install

Create a .env file in the backend/ directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173

then run the server:
npm run dev


