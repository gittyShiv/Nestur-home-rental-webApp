# 🏡 Nestur | Home Rental and Listing Web App

Nestur is a **full-stack rental and property listing web application** where users can create, manage, and explore rental listings with interactive maps and reviews.  

It integrates **authentication, authorization, image uploads, geolocation, and deployment**, making it a production-ready project that demonstrates end-to-end web development.

---

## 🚀 Features

- 🔑 **Authentication & Authorization**  
  - User signup/login/logout with **Passport.js**  
  - Role-based permissions (only listing/review authors can edit/delete)  

- 📦 **CRUD Functionality**  
  - Create, Read, Update, Delete property listings  
  - Add and delete the reviews with ratings  

- 🖼️ **Image Uploads**  
  - Upload images with **Multer**  
  - Store & serve images via **Cloudinary CDN**  
  - Automatic image transformations for scalability  

- 🗺️ **Geolocation & Maps**  
  - Forward geocoding with **Mapbox SDK**  
  - Interactive maps with property markers  
  - Stored geospatial data with MongoDB `2dsphere` index  

- 🛡️ **Security**  
  - Password hashing with **bcrypt**  
  - **Helmet** for secure HTTP headers  
  - **CSRF protection**, rate limiting, and input sanitization  

- 🌐 **Deployment**  
  - Backend deployed on **Render**  
  - Database on **MongoDB Atlas**  
  - Images on **Cloudinary**

---

## 🏗️ Tech Stack

**Frontend**  
- EJS (server-side rendering)  
- Bootstrap (responsive UI)  

**Backend**  
- Node.js, Express.js  
- Passport.js (authentication)  
- Multer (file handling)  
- Cloudinary SDK (image storage)  
- Mapbox SDK (geocoding & maps)  

**Database**  
- MongoDB Atlas + Mongoose ODM  

**Deployment**  
- Render (backend)  
- Cloudinary (images)  

---

## 📂 Project Structure

```
nestur/
├─ index.js              # App entry point
├─ /models               # Mongoose schemas (User, Listing, Review)
├─ /routes               # Express routes
├─ /controllers          # Controller logic
├─ /views                # EJS templates
├─ /public               # Static files (CSS, JS)
├─ /utils                # Helpers & middleware
└─ .env                  # Environment variables
```

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gittyShiv/Nestur-home-rental-webApp
   cd nestur
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file and add:
   ```bash
   MONGODB_URI=<your-mongodb-atlas-uri>
   SESSION_SECRET=<your-session-secret>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   MAPBOX_TOKEN=<your-mapbox-access-token>
   NODE_ENV=development
   ```

4. **Run the app**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) 🚀

---

## 🔍 Future Improvements

- 🗂️ Advanced search & filtering (price range, location, keywords)  
- 📧 Email verification & password reset (Nodemailer)  
- 📊 Analytics (popular listings, user activity)  
- 🛠️ Switch to **JWT auth** for stateless scalability  
- 📱 React frontend for modern SPA experience  

---

## 📸 Screenshots

*(Add screenshots of your homepage, listing page, map, and upload form here for a strong GitHub profile.)*

---

## 👤 Author

**Shivam Maurya**  
- 📧 [shivamvision07@gmail.com](mailto:shivamvision07@gmail.com)  
- 💼 [LinkedIn](https://www.linkedin.com)  
- 💻 [GitHub](https://github.com/github_username)

---
