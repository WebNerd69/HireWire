import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoute.js"
import partnerRouter from "./routes/partnerRoute.js"
import jobRouter from "./routes/jobRoute.js"
import jobApplicationRouter from "./routes/jobApplicationRoute.js"
// app config
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(express.json())

const allowedOrigins = [
  "https://hirewire-jqof.onrender.com",
];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// database and cloudinary connection
connectDB()


// api endpoints
app.use('/api/user', userRouter)
app.use('/api/partner', partnerRouter)
app.use('/api/job', jobRouter)
app.use('/api/jobApplication', jobApplicationRouter)
app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => console.log(`Server started on port : ${port}`))
