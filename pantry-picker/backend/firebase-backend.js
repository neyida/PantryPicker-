const express = require('express');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
//const { getAnalytics } = require("firebase/analytics");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuB0lz-MtIlVc603ZJhsRFQWwq4E0BBTo",
    authDomain: "recipe-picker-69d3d.firebaseapp.com",
    databaseURL: "https://recipe-picker-69d3d-default-rtdb.firebaseio.com",
    projectId: "recipe-picker-69d3d",
    storageBucket: "recipe-picker-69d3d.appspot.com",
    messagingSenderId: "681205927494",
    appId: "1:681205927494:web:6ab6483e3e7046089d0447",
    measurementId: "G-3QSV6LZNC1"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

// Endpoint to store user input in Firebase
app.post('/storeUserInputs', async (req, res) => {
  try {
    const response = req.body.response;
    // Store userInput in Firestore
    const docRef = await addDoc(collection(db, 'query'), {
      response: response
    });
    console.log('Document written with ID: ', docRef.id);
    res.status(200).json(`User input stored successfully with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).json({ error: 'Error storing user input: ' + error });
  }
});

const PORT = process.env.PORT || 3000;

app.get('/config', (req, res) => {
    res.json({ port: process.env.PORT || 3000 });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});