# Blog System

This is a **Blog System** built using **React.js** for the frontend and **Django (Django REST Framework)** for the backend. It allows users to create, view, delete blog posts, and integrates an external API (https://restcountries.com/) to display country-related data.

## 🚀 Features
- Add a new blog post
- View a list of all blogs
- View blog details
- Delete blog posts
- Fetch country details from an external API

---

## 🛠 Technology Stack
### **Frontend:**
- React.js
- Axios (for API requests)
- React Router (for navigation)

### **Backend:**
- Django
- Django REST Framework
- SQLite (default) 

---

##  Setup Instructions

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/akshayahuja15/blog-system.git
 cd blog-system
```

---

## 🖥 Backend Setup (Django)

### 2️⃣ Create and Activate a Virtual Environment
```sh
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install Dependencies
```sh
pip install -r requirements.txt
```

### 4️⃣ Apply Migrations
```sh
python manage.py migrate
```

### 5️⃣ Start the Django Server
```sh
python manage.py runserver
```
Backend will run at **http://127.0.0.1:8000/**

---

## 🌐 Frontend Setup (React.js)

### 6️⃣ Move to the `frontend` Directory
```sh
cd frontend
```

### 7️⃣ Install Dependencies
```sh
npm install
```

### 8️⃣ Start the React Development Server
```sh
npm start
```
Frontend will run at **http://localhost:3000/**

---

## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/blogs/` | Fetch all blogs |
| POST | `/api/blogs/` | Create a new blog |
| GET | `/api/blogs/{id}/` | Get blog details |
| DELETE | `/api/blogs/{id}/` | Delete a blog |
| GET | `https://restcountries.com/v3.1/all` | Fetch country data |


## 🛠 Troubleshooting
- If you face migration issues, run:
  ```sh
  python manage.py makemigrations
  python manage.py migrate
  ```
- If `npm start` doesn't work, try:
  ```sh
  npm cache clean --force
  rm -rf node_modules package-lock.json
  npm install
  npm start
  ```

---

## 📌 Author
Developed by **Akshay Ahuja**
- **GitHub**: [@akshayahuja15](https://github.com/akshayahuja15)
- **LinkedIn**: [Akshay Ahuja](https://www.linkedin.com/in/akshayahuja15/)

---

###  Now you're ready to use the Blog System! 
