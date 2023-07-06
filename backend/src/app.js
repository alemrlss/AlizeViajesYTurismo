import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import stopsRoutes from './routes/stops.routes.js'

const app = express()

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/stops', stopsRoutes)


// app.use('/*', (req, res) => {
//   res.status(200).json({ ok: true })
// })

export default app;