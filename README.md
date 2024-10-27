# ECO-SMART
**ECO-SMART** is a responsive web application for efficient waste management that allows users to schedule waste pickups via drop-off or doorstep services. The project is built using React for the frontend and Firebase for the backend, featuring user authentication and various services.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Checkout Link](#checkout-link)

## Features
+ User Authentication (Sign Up, Login, Logout)
- Scheduling for Drop-off and Doorstep Pickup Services
* Firebase Realtime Database for data storage
+ Responsive UI
  
## Installation
To run this project locally, follow these steps:

### Prerequisites
Make sure you have the following installed:

+ [Node.js](https://nodejs.org/en/download/prebuilt-installer/current) (version 14 or above)

### Clone the Repository
```bash
git clone https://github.com/yourusername/ECO-SMART.git
cd ECO-SMART
```

### 1. Install Dependencies
Navigate to the project directory and install all required dependencies.

```bash
npm install
```
### 2. Set Up Firebase
#### Firebase Configuration:

+ Go to Firebase Console, create a new project, and set up Realtime Database.
- In your Firebase project, go to Project Settings > General > Your apps, and register a web app.
* Copy the Firebase configuration and replace it in your firebase.js file in the src folder.
  
```javascript
Copy code
// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
```
## Usage
### Running the Project Locally
After setting up, you can start the project locally using:

```bash
npm start
```
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

## Technologies Used
+ Frontend: React, CSS
- Backend: Firebase (Realtime Database)
* Tools: Node.js

## Checkout Link
You can check out the live version of ECO-SMART at the following link: https://logineco-195f7.web.app/

#### Note: Replace placeholders like "YOUR_API_KEY" in firebase.js with your actual Firebase credentials. Also, add any additional sections or customization as needed for your project.
