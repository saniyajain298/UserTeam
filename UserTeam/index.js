import app from "./app.js"
import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config('.env')
const port = process.env.PORT || 3000
console.log("mongo url", process.env.MONGODB_URL)


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on port http://127.0.0.1:${port}`,)
    })
}).catch((error)=>{
     console.log("Server is not conneted with MONGO DB", error)
})

