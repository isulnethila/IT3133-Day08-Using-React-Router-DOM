# Using React Router DOM 🚀
This repository demonstrates how to build a simple React application with **React Router DOM** for navigation and routing. The application includes multiple pages such as `Home`, `About`, `Contact Us`, `Login`, and a protected `Dashboard` accessible only to authenticated users.
---
## 🔥 Features
- **React Router DOM**: Navigate seamlessly between multiple pages without reloading.
- **Login Authentication**: Basic form validation for username and password.
- **Error Handling**: Informative error messages for invalid login attempts or empty fields.
- **Responsive Design**: Adaptable layout for various screen sizes.
- **Modular Structure**: Each component is well-organized for reusability and scalability.
---
## 📂 Folder Structure
```
.
├── src
│   ├── Components
│   │   ├── About.js       # About Page Component
│   │   ├── ContactUs.js   # Contact Us Page Component
│   │   ├── Dashboard.js   # Dashboard Component (protected)
│   │   ├── Home.js        # Home Page Component
│   │   ├── Login.js       # Login Page Component
│   ├── App.js             # Main App Component with Routes
│   ├── index.js           # Application Entry Point
├── public
│   ├── index.html         # HTML template
├── package.json           # Project Metadata
└── README.md              # Documentation (You are here!)
```
---
## 🛠️ Technologies Used
- **React.js**: Frontend library for building user interfaces.
- **React Router DOM**: Library for handling client-side routing.
---
## 🚀 Getting Started
### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```
### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed. Then run:
```bash
npm install
```
### 3. Run the Application
Start the development server:
```bash
npm start
```
Open your browser and visit: [http://localhost:3000](http://localhost:3000)
---
## 🧭 Application Workflow
### Navigation
The application includes the following pages:
1. **Home**: General information about the app.
2. **About**: Details about the app and its features.
3. **Contact Us**: A contact form for users to reach out.
4. **Login**: A login form to authenticate users.
5. **Dashboard**: A protected page accessible only after successful login.
### Login Credentials
- **Username**: Admin
- **Password**: abc@123
### Error Handling
- Displays a red error message if required fields are empty or credentials are invalid.
---
---
## 📜 Code Highlights
### App.js
Defines the routes for the application using `React Router DOM`:
```jsx
<Routes>
  <Route path='/home' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<ContactUs />} />
  <Route path='/login' element={<Login />} />
  <Route path='/dash' element={<Dashbord />} />
</Routes>
```
### Login.js
Handles user authentication with form validation and error messages:
```jsx
const aunthenticate = () => {
    if (user.username === "Admin" && user.pwd === "abc@123") {
        setUser({ username: "", pwd: "", error: "" });
        navigate('/dash');
    } else {
        setUser({ 'error': "Please check your username and password!" });
    }
};
```
---
## 📖 Learn More
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [React Router DOM Documentation](https://reactrouter.com/web/guides/quick-start)
---


