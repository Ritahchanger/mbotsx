const express = require('express'); 
const connectDb = require('../database/Connections'); 
const cors = require("cors");
const EmailRoute = require("../routes/EmailRoute");
const app = express(); 

const PORT = process.env.PORT || 8000; 

app.use(express.json());

app.use(cors())

app.use('/api/email',EmailRoute);







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
