const mongoose = require('mongoose')

require('dotenv').config()

const mongoUrl = process.env.MONGO_URL











const connectDb = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.error('Error connecting to MONGODB: ', error);
    process.exit(1);
  }
}

module.exports=connectDb;