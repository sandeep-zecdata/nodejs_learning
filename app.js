const express = require("express");
const app = express();
const EventEmitter = require("events");
const myevent = new EventEmitter();
const routes = require("./routes/allroutes")
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// myevent.on("test",(data)=>{
//     console.log("test event ",data);
// })

app.get("/",(req,res)=>{
    // myevent.emit("test","name");
    // res.send("hello world");
    // console.log(__dirname)
    res.sendFile(path.join(__dirname,"./index.html"));
})
app.use(routes);

app.all('/*',(req,res)=>{
    res.send("Page Not Found");
})

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
})