import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import cors from "cors"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/CategoryRoute.js'
import ProductRoute from './routes/ProductRoutes.js'
import path from "path"; 
import {fileURLToPath} from "url";
dotenv.config();
connectDB(); 
const __filename = fileURLToPath{import.meta.url);
const __dirname = path.dirname(__filename);
                                 
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client.build')))
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product",ProductRoute)
app.use('*', function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`.bgCyan.white)


})
