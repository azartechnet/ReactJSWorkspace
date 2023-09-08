const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const mdb=require('mongodb')
const app=express();
app.use(express.json());
app.use(cors());

const FoodModel=require("./models/Food");


//mongoose.connect("mongodb://127.0.0.1:27017/food");

//mdb.connect("mongodb+srv://admin:admin@cluster0.jjcj38o.mongodb.net/?retryWrites=true&w=majority");

app.post("/insert",async(req,res)=>{

    const foodName=req.body.foodName
    const description=req.body.description

    const food=new FoodModel({
        foodName:foodName,
        description:description
    });
    try{
        await(food.save());
    }catch(err){
        console.log(err);
    }
});

app.get("/read",async(req,res)=>{
 FoodModel.find({},(err,result)=>{
    if(err){
        res.send(err)
    }
    res.send(result);
 });
   
});
app.listen(3000, () =>{
    console.log("server is running");
});