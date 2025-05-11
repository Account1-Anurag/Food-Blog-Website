# 🍲 Food Blog Website

A dynamic and responsive full-stack **Food Recipe Blog** built with **React**, **Node.js**, **Express**, and **MongoDB**. Users can view, add, edit, and delete recipes, as well as mark their favorite dishes. This app offers an engaging way to manage your culinary creations!

![Food Blog Banner](./client/src/assets/foodRecipe.png)

## 🔗 Live Demo

👉 Coming soon...  
📁 GitHub: [Food-Blog-Website](https://github.com/Account1-Anurag/Food-Blog-Website/)

---

## 🚀 Features

- 📝 Add, edit, and delete your own recipes  
- ❤️ Mark recipes as favorites (stored in localStorage)  
- 📸 Upload recipe images  
- ⏱️ View recipe preparation time  
- 🔍 View detailed recipe on double click  
- 💻 Responsive design for all screen sizes

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Axios
- React Router
- Tailwind CSS / Custom CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (for image upload)
- CORS

---

## 📁 Folder Structure

Food-Blog-Website/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # UI Components
│ │ ├── pages/ # Pages like Home, AddRecipe, EditRecipe
│ │ ├── assets/ # Images and static assets
│ │ └── App.jsx # Root Component
│ └── public/
│
├── server/ # Backend with Express
│ ├── config/ # MongoDB connection
│ ├── routes/ # User and Recipe routes
│ ├── controllers/ # Logic handlers
│ ├── models/ # Mongoose schemas
│ └── server.js # Entry point
│
└── README.md # This file


---

## 🧪 Setup Instructions

### 1. Clone the repository

git clone https://github.com/Account1-Anurag/Food-Blog-Website.git
cd Food-Blog-Website

### 2. Setup Backend
cd server
npm install
touch .env
# Add your MongoDB URI
PORT=5000
MONGO_URI=your_mongodb_connection_string

npm start

### 3. Setup Frontend
cd client
npm install
npm run dev

### 📌 Visit the app:
Frontend: http://localhost:5173
Backend API: http://localhost:5000

### 📸 Screenshots
![image](https://github.com/user-attachments/assets/fdc335c8-c688-4029-8865-38c5ac34969f)
![image](https://github.com/user-attachments/assets/3cf9c607-15e7-4668-9a5e-d53279eb4d18)
![image](https://github.com/user-attachments/assets/ad79e3a7-ee95-433d-9bac-4c716fbcc04e)


### 📚 Future Improvements
- User authentication (Login/Signup)
- Comments and ratings
- Pagination and search
- Cloud image storage (e.g., Cloudinary)


### 🙋‍♂️ Author
Anurag LinkedIn - https://www.linkedin.com/in/anurag-vasu/

If you like this project, consider giving it a ⭐ and sharing it!



