# 🌍 Travel Agency Platform

<div align="center">
  <img alt="React" src="https://img.shields.io/badge/React-4c84f3?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Appwrite" src="https://img.shields.io/badge/Appwrite-f05695?style=for-the-badge&logo=appwrite&logoColor=white" />
  <img alt="Syncfusion" src="https://img.shields.io/badge/Syncfusion-181758?style=for-the-badge&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-C13515?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>


## 📢 🤖 Introduction
Welcome to the Travel Agency Platform, a cutting-edge web application designed to revolutionize how travelers plan and book their trips! ✈️✨

AI-powered trip itinerary generator crafts personalized travel plans tailored to your unique preferences including:

Country 🌏

Travel style 🧳

Interests 🎨

Group type 👨👩👧👦

Budget 💰

Dual interface:

Public site for effortless trip exploration and booking 🛫

Admin dashboard for robust user management, trip oversight, and real-time analytics 📊

Join a vibrant community 🌟 enjoying a smooth, responsive, and secure travel planning experience!

## 🛠️ ⚙️ Tech Stack
This project is built with a modern power combo to ensure performance, scalability, and stunning UI:

React 19 — Dynamic, component-based UI for a smooth user experience ⚛️

Vite — Lightning-fast build tool and dev server ⚡

Tailwind CSS — Utility-first CSS framework for clean, responsive design 🎨

Syncfusion Components — Rich React UI components for interactive charts, grids, buttons, maps, and more 📈🗺️

React Router v7 — Seamless navigation and routing 🔀

Appwrite Backend-as-a-Service — Secure user auth, real-time DB, storage, and serverless functions 🔐

AI Integration — Powers the personalized itinerary generation 🤖

This tech stack ensures a scalable, maintainable, and easy-to-upgrade platform ready for future enhancements.

## 🚀 🔋 Features
Explore the wide range of features designed to make travel planning effortless and enjoyable:

 ✨ AI-Powered Itinerary Generation
Personalize your trip itineraries dynamically, based on your budget, interests, travel style, and group.

 🛒 Public Trip Booking Site
Browse recommended trips, review detailed itineraries, and book with ease.

 🛠️ Admin Dashboard
Efficiently manage trips and users with comprehensive overviews and controls.

 📊 User Growth and Trip Analytics
Real-time charts and metrics provide insight into platform usage and trends.

📱 Responsive & Modern UI
Mobile-first design ensuring smooth access across all devices.

🔐 Secure Authentication & Role Management
Supports roles such as users and admins to control access and permissions.

♻️ Modular & Reusable Components
Structured React codebase for easy maintenance and scalability.

🗺️ Rich Travel Info in Itineraries
Includes best times to visit, weather info, local activities, and geo-location details.

🔗 Integration with External APIs
Includes support for image sourcing, payment gateways, and more for extensibility.


## 🤸 Quick Start
Follow these steps to set up and run the Travel Agency Platform on your local machine:

Prerequisites
Make sure you have these installed:

Git

Node.js

npm

Clone the Repository
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```
Install Dependencies
```bash
npm install
```
Setup Environment Variables
Create a .env file in the root directory and add your credentials:

text
```bash
VITE_SYNCFUSION_LICENSE_KEY=your_license_key
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_API_ENDPOINT=your_api_endpoint
VITE_APPWRITE_API_KEY=your_api_key
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_USERS_COLLECTION_ID=your_users_collection_id
VITE_APPWRITE_ITINERARY_COLLECTION_ID=your_itinerary_collection_id
STRIPE_SECRET_KEY=your_stripe_secret_key
GEMINI_API_KEY=your_gemini_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
VITE_BASE_URL=http://localhost:5173
```
Replace placeholder values with your actual keys.

Run the Project
```bash
npm run dev
```
Open http://localhost:5173 in your browser to explore!

🕸️ Code Snippets
Here are some useful snippets from the project to help you get started quickly:

TailwindCSS & Syncfusion Styles Import
css
@import url("https://fonts.googleapis.com/css2?family=Figtree&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";
/* Add other Syncfusion component styles as needed */
@import "tailwindcss";
React Example: Fetching User Growth Data (Simplified)
tsx
import { useEffect, useState } from "react";

function UserGrowthChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUserGrowth() {
      const response = await fetch("/api/user-growth");
      const result = await response.json();
      setData(result);
    }
    fetchUserGrowth();
  }, []);

  return (
    <div>{/* Render chart component here using data */}</div>
  );
}
Utility Function Example: Format Date
ts
import dayjs from "dayjs";

export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("MMMM DD, YYYY");
};
Feel free to explore more snippets in the project files for components and utilities.

## 🤝 Contribution Guidelines
We welcome contributions to improve the Travel Agency Platform! Here's how you can help:

Fork the Repository
Create a personal copy of the repo on your GitHub account.

Create a Feature Branch
Use descriptive branch names for your feature/fix:
```bash
git checkout -b feature/your-feature-name
```

Commit Your Changes
Use clear, concise commit messages:
```bash
git commit -m "Add feature description"
```

Push to Your Branch
```bash
git push origin feature/your-feature-name
```

Open a Pull Request
Describe your changes and link related issues.

Code Style
Follow existing code style and best practices, including formatting and naming conventions.

Testing
Please test your changes thoroughly.

Issues
If you find bugs or have feature requests, raise issues with detailed descriptions.

Thank you for helping make this project better! 🙌


