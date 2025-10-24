# 🏡 Nestur - Travel & Stay Discovery Platform

Nestur is a full-stack web application inspired by Wanderlust, designed to help travelers discover, list, and review stays from around the world. It’s built using Node.js, Express, MongoDB, and Cloudinary for image storage, providing a smooth and scalable travel listing experience.

---

### 📊 Contributors ⭐ Forks 🌟 Stargazers 📜 License

---

## 📖 About The Project

Nestur is a web platform that allows users to explore and share beautiful travel destinations. Users can list new stays, upload images via Cloudinary, manage profiles, and browse listings created by others — all while data is safely stored in MongoDB.

The project runs on an Express.js server and follows MVC architecture for maintainability and clarity.

---

## 🎯 Features

- 🏠 Add, edit, and delete travel listings  
- 🖼️ Upload and manage images using Cloudinary  
- 👤 User authentication and session management  
- 🗺️ View location details and dynamic maps  
- 🧱 Modular MVC architecture with EJS templates  
- 🧩 Environment-based configuration using `.env`  

---

## 🧰 Built With

- **Node.js (v18 recommended)**  
- **Express.js**  
- **MongoDB (local or Atlas)**  
- **Cloudinary**  
- **EJS**  
- **Nodemon**  
- **dotenv**

---

## 🛠️ Getting Started

### ✅ Prerequisites

Ensure you have the following installed on your system:

- Node.js (v18 or higher)  
- MongoDB  
- Nodemon (globally)

---

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kkumarprajapati/Nestur-major-project.git
   cd Nestur-major-project
   ```

2. **Set up the database**
   - Create a `.env` file in the root directory.  
   - Add the following line:
     ```bash
     ATLASDB_URL=mongodb://127.0.0.1:27017/nestur
     ```

3. **Configure Cloudinary**
   - Create a free account on [Cloudinary](https://cloudinary.com/).  
   - Obtain your credentials and add them to `.env`:
     ```bash
     CLOUD_NAME=your_cloud_name
     CLOUD_API_KEY=your_api_key
     CLOUD_API_SECRET=your_api_secret
     ```

4. **Set a secret key for sessions**
   ```bash
   SECRET=your_secure_secret
   ```

5. **Install project dependencies**
   ```bash
   npm install
   ```

6. **Run the application**
   ```bash
   nodemon app.js
   ```

7. **Access the project**
   - Open your browser and visit:  
     👉 [http://localhost:8080](http://localhost:8080)

---

## 🧪 Development Notes

- Ensure MongoDB is running locally or connected via Atlas before starting the server.  
- Images are stored on Cloudinary; local uploads are not retained.  
- `.env` should never be committed to Git for security reasons.

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repository  
2. Create a new branch  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to your fork and open a Pull Request  

---

## 📄 License

Distributed under the **MIT License**.  
See `LICENSE` for more details.

---

## 📬 Contact

**Shivam Maurya**  
📧 [shivamvision07@gmail.com](mailto:shivamvision07@gmail.com)  
🔗 [Nestur GitHub Repository](https://github.com/Kkumarprajapati/Nestur-major-project)

