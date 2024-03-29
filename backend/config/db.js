import mongoose from 'mongoose'


const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://Elle23:Rosa2359@cluster0.kznw6.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
  
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
  }
  
  export default connectDB
