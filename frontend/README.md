Here's a beautifully structured and detailed `README.md` for your job portal project:

---

# 💼 HireWire - Landing your Dream job with ease using HireWire

Welcome to **HireWire**, a seamless platform that connects job seekers with employers through an intuitive and modern interface. Whether you're an individual seeking opportunities or a company wanting to post jobs, JobSphere is built to support both experiences with ease.

---
## 🚀 Overview
hireWire is a full-featured job portal designed to simplify job discovery and hiring. Whether you're a job seeker or a hiring partner, hireWire provides a smooth, intuitive interface that bridges the gap between talent and opportunity.

## 🚀 Features

### 👤 For Job Seekers

* Create and manage a personal profile
* Build and update resumes
* Browse job listings
* Apply for jobs with real-time status tracking
* Cancel applications anytime

### 🧑‍💼 For Partners (Employers)

* Register as a partner
* Post new job openings
* Manage applicants
* Update application statuses
* Auto-remove applicants when cancelled

### 🛠️ Core Technologies

* **Frontend**: React.js, TailwindCSS, Axios, React Router
* **Backend**: Node.js, Express.js, MongoDB, JWT, Bcrypt
* **Authentication**: Secure login/signup using JWT tokens
* **State Management**: React Context API

---

## 🧭 Project Structure

```
├── frontend
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── assets
│       └── context
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── config
```

---

## 🧪 Getting Started

### ⚙️ Backend Setup

```bash
git clone https://github.com/WebNerd69/HireWire
cd hireWire

cd backend
npm install
# Create a .env file with:
# MONGO_URI=<your-mongo-uri>
# JWT_SECRET=<your-secret-key>
npm run dev
```

### 🎨 Frontend Setup

```bash
cd frontend
npm install
# Create a .env file with:
#VITE_BACKEND_URL ="http://localhost:5000"
npm run dev
```

---

## 📂 Important Endpoints

### Auth

* `POST /api/user/register`
* `POST /api/user/login`
* `POST /api/partner/register`
* `POST /api/partner/login`

### Jobs

* `POST /api/job/` (Partner-only)
* `GET /api/job/`
* `PATCH /api/jobApplication/:id`

---

## ✨ Special Instructions

### 👉 Becoming a Partner

To register as a partner and start creating job listings:

> Scroll to the **footer** on the landing page and click on the **“Create Jobs”** link to access the partner registration form.

Once registered, you'll gain access to the job posting panel.

---

## 🧠 Smart UX Details

* Button disabling during async requests
* Context-aware job filters and dynamic category updates
* Toast-based success/error feedbacks
* Resume builder for applicants
* Delete operations auto-update UI without reloading

---



## 📬 Contact Developer

* 💼 [LinkedIn](https://www.linkedin.com/in/rudra-pratap-roy-718393248/)
* 📧 Email: [rroy64330@example.com](mailto:rroy64330@example.com)

---

## ⭐ Support the Project
If you find this project helpful:

👉 **Star this repository**
👉 **Share with friends and peers**
👉 **Contribute if you’d like!**

---

## 💬 Credits

Made with 💖 by **Rudra Pratap Roy**, student of IIT Madras & IIT Guwahati (Masai Credit-linked program), passionate about crafting impactful web applications.

---
