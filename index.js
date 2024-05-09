import  express  from "express";
import  cors  from "cors";
import  db  from "./database/db.js";
import blogRoutes from './routes/routes.js'
import { config } from "dotenv";
config();


const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/blogs',blogRoutes)
const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Server UP running on http://localhost:${port}/`);
  });
  
