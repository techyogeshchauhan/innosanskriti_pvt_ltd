<<<<<<< HEAD
# innosanskriti_pvt_ltd
this is new startup for services base company
=======
# Innosanskriti Labs

Innosanskriti Labs Pvt. Ltd. is a modern services-based startup blending cutting-edge technology with Indian values. This repository contains both the frontend (React + Tailwind CSS) and backend (Flask + MongoDB) code for the company website and service platform.

## Project Structure

```
innosanskriti-site/
│
├── backend/
│   ├── .env
│   ├── app.py
│   ├── requirements.txt
│   └── models/
│       └── services.py
│
├── frontend/
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.css
│       ├── i.png
│       ├── assets/
│       ├── components/
│       │   ├── Footer.tsx
│       │   └── Navbar.tsx
│       └── pages/
│           ├── About.tsx
│           ├── Contact.tsx
│           ├── Home.tsx
│           ├── Portfolio.tsx
│           └── Services.tsx
│
├── LICENSE
└── README.md
```

## Features

- **Frontend:**  
  - Built with React, TypeScript, Vite, and Tailwind CSS
  - Responsive pages: Home, About, Services, Portfolio, Contact
  - Animated UI with Framer Motion
  - FontAwesome icons

- **Backend:**  
  - Flask REST API
  - MongoDB for data storage
  - Endpoints for services and contact form
  - CORS enabled

## Getting Started

### Prerequisites

- Node.js & npm (for frontend)
- Python 3.10+ (for backend)
- MongoDB (local or remote)

### Backend Setup

1. Install dependencies:
    ```sh
    cd backend
    pip install -r requirements.txt
    ```
2. Set up `.env` (see sample in `backend/.env`):
    ```
    MONGO_URI=mongodb://localhost:27017/
    PORT=5000
    ```
3. Start MongoDB server if not running.
4. Run the backend:
    ```sh
    python app.py
    ```

### Frontend Setup

1. Install dependencies:
    ```sh
    cd frontend
    npm install
    ```
2. Set up `.env` (see sample in `frontend/.env`):
    ```
    VITE_API_URL=http://localhost:5000/api
    ```
3. Run the frontend:
    ```sh
    npm run dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

*Innosanskriti Labs Pvt. Ltd. — Empowering
>>>>>>> 2e1d093e3686f49be68fa37a5ea47adb194a0488
