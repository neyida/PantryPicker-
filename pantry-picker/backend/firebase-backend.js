const express = require('express');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
//const { getAnalytics } = require("firebase/analytics");
const cors = require('cors');
const config = require('./config.js').firebaseConfig;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Firebase configuration


// Initialize Firebase


const PORT = process.env.PORT || 3000;

app.get('/config', (req, res) => {
    res.json({ port: process.env.PORT || 3000 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});