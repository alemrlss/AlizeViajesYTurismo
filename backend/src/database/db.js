import mongoose from 'mongoose'
import { MONGODB_URI } from '../config.js'

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Database is connected 🚀')
  } catch (error) {
    console.log(error)
    console.log('no se pudo, revisa tu codigo muerto')
  }
}