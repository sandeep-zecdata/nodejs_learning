const express = require("express");
const path = require("path");
var bodyParser = require('body-parser')
const bookController = require("./Controllers/Bookscontroller");
const authController = require("./Controllers/Authcontroller");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const connectDB = require("./database/db")
const test = require('./middleware/test')
const axios = require('axios');




app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "./index.html"));
    // res.json({data:"TO-dos-app"});
})

app.get("/axios", (req,res) => {
     axios.get("http://localhost:3000/books").then(function(res){
        res.send(res);
        }).catch(function(error){
            res.send(error);
    })
})

app.post("/signup", authController.signup);
app.post("/login", authController.login);
app.get("/books", bookController.getallBooks)

// app.use(test);
app.post("/book", bookController.postBook);


app.get("/book/:id", bookController.getsingleBook)

app.patch("/book/:id", bookController.updateBook)

app.delete("/book/:id", bookController.deleteBook)


app.all('/*', (req, res) => {
    res.send("Page Not Found");
})

connectDB().then(() => {

    module.exports =  app.listen(3000, () => {
        console.log("server running on http://localhost:3000");
    })
})



