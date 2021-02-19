const express=require('express');
const fetch =require("node-fetch");
const app=express();

async function fetchApi(){
   const response = await fetch("https://newsapi.org/v2/top-headlines?country=eg&apiKey=e4e664afac414cda8aca36b4d97046aa");
   const json =await response.json();
   
    return json;
}

console.log(fetchApi())
const apiData=fetchApi();
app.get('/',(req,res)=>{
    const response = fetch("https://newsapi.org/v2/top-headlines?country=eg&apiKey=e4e664afac414cda8aca36b4d97046aa")
   .then(response=>response.json())
   .then(data=>res.send(data))
    
})

const port= process.env.PORT || 3000;
app.listen(port,()=>console.log("Hi i'm working"))