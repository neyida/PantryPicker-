//importing all required modules
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const cors = require('cors');
const express = require('express');
// grabbing gpt function and firebase config
const config = require('./config.js').firebaseConfig;
const request = require("./gpt-agent.js");
// initializing app and formatting it using cors and bodyparser
const app = express();
app.use(cors());
app.use(bodyParser.json());
//initializing firebase db
const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp)



// grabbing ingredients from user input and passing them as prompts to gpt
  app.post('/ingredients', async (req, res) => {
     /* check to see if the request is already in the database



    */
    const ingredients = req.body.ingredients;
  // ==================== GPT-3 ====================
    const response = await request.agent(
      `Please suggest five recipes containing ${ingredients.join(" and ")} based on my location and the weather including ingredients and quantities.`
    );
    console.log("response:", response);
      // Endpoint to store user input in Firebase
    /* send the info back to the client


    */
    try {
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

  app.post('/createUser', async (req, res) => {
    const userInfo = req.userInfo
    try{
      const documentReference = await addDoc(collection(db, 'user', userInfo.name),{
          userInfo: userInfo
      })
      console.log('Document written with ID: ', documentReference.id);
      res.status(200).json(`User input stored successfully with ID: ${documentReference.id}`);
      }
      catch(error){
        res.status(500).json({error: 'Error storing user input: ' + error})
      }
    });




  const PORT = process.env.PORT || 3001;
  app.get('/config', (req, res) => {
    res.json({ port: process.env.PORT || 3001 });
});
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });



