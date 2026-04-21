🧠 MERN ThinkBoard
A full-stack note-taking and idea management web application built using the MERN stack. ThinkBoard allows users to create, organize, and manage their thoughts efficiently with a smooth and responsive user experience.
🚀 Features
🔐 User Authentication
Secure login & signup using JWT authentication with protected routes
📝 Notes Management
Create, update, and delete notes with real-time UI updates
📂 Smart Organization
View and manage all notes in a structured and efficient way
⚡ Performance Optimized
Optimized backend APIs and efficient React state handling
🎨 Modern UI
Clean, minimal, and responsive design
🛠️ Tech Stack
Frontend:
React.js
Axios
CSS / Tailwind
Backend:
Node.js
Express.js
Database:
MongoDB (Atlas)
Other Tools:
JWT Authentication
Git & GitHub
📁 Project Structure
MernThinkBoard/
backend/
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── server.js
└── package.json
frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.js
└── package.json
README.md
⚙️ Installation & Setup
Clone the repository
git clone https://github.com/your-username/MernThinkBoard.git
cd MernThinkBoard
Setup Backend
cd backend
npm install
Create a .env file in backend and add:
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run backend:
npm start
Setup Frontend
cd frontend
npm install
npm start
🌐 API Endpoints
POST /api/auth/signup → Register user
POST /api/auth/login → Login user
GET /api/notes → Get all notes
POST /api/notes → Create note
PUT /api/notes/:id → Update note
DELETE /api/notes/:id → Delete note
🚀 Deployment
Frontend: Vercel / Netlify
Backend: Render / Railway
Database: MongoDB Atlas
🧠 Learnings
Built a complete full-stack application
Implemented authentication & authorization
Designed REST APIs
Improved performance and state management
📌 Future Improvements
Add tags & categories
Search functionality
Dark mode
Real-time collaboration
👨‍💻 Author
Nikhil Anand
B.Tech Mathematics & Computing, DTU
⭐ Contribute
Feel free to fork this repository and improve the project
