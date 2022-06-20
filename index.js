import express from "express";
import bodyParcer from "body-parser";
import feedbackRoutes from "./routes/feedbacks.js";
// import cors from "cors";

const app=express();
const PORT=5000;

// app.use(cors({
// 	origin: "https://loquacious-daffodil-b157e7.netlify.app/"
// }));
const cors=require("cors")
app.use(cors({
	origin: "https://loquacious-daffodil-b157e7.netlify.app"
}))
app.use(bodyParcer.json());
app.use('/api/feedbacks/', feedbackRoutes);
app.get('/',(req,res)=>{
    console.log('[Test]');
    res.send('Hello form Homepage')
})

app.listen(process.env.PORT||PORT,()=>{console.log(`Server Running on PORT : http://localhost:${PORT}`)});