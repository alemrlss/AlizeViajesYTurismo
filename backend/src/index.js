import app from "./app.js";
import { PORT } from './config.js'
import { connectDB } from "./database/db.js";

app.listen(PORT, () => console.log('server on port ' + PORT))
connectDB()