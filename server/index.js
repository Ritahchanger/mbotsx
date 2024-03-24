const express = require('express'); 
const connectDb = require('../database/Connections'); 

const app = express(); 

const PORT = process.env.PORT || 8000; 

const connectServer = async () => {
  try {
    await connectDb(); 

    app.listen(PORT, () => { 
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the server ', error);
  }
};

connectServer(); 
