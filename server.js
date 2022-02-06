const express= require("express");
const app= express();

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    console.log("hello world");
    // res.status(200).send("Hey")
    // res.status(500).json({message:"error"})   //passing status and msg
    // res.render("server.js")  //download the file.
    res.render("index", {text:"Dolly"})  //to render in perticular page.
})

app.listen("3000")






//we dont use HTML page because you can't read that and understand.