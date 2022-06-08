import express from "express";
import bodyParcer from "body-parser";

const app=express();
const PORT=5000;

app.use(bodyParcer.json());

app.get('/',(req,res)=>{
    console.log('[Test]');
    res.send('Hello form Homepage')
})

app.listen(process.env.PORT||PORT,()=>{console.log(`Server Running on PORT : http://localhost:${PORT}`)});