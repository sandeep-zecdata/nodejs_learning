const express = require("express");
const router = express.Router();
const connect = require('../database/db');

router.get("/books", async (req,res)=>{
    const db = await connect();
    const books = await db.collection("book").find().toArray();
    // res.send("All books");
    res.json(books);
})

router.get("/books/:id",(req,res)=>{
    res.send(`book with id ${req.params.id}`);
})

router.post("/book",async (req,res)=>{
    const db = await connect();
//   const data = {
//     bookname: "Expressjs",
//     author: "unknown",
//   }
   await db.collection('book').insertOne(req.body);
res.json({data:"book is stored"});

// console.log(req.body);
//     res.json(req.body);
})

router.patch("/books/:id",(req,res)=>{
    res.send(`patch book id ${req.params.id}`);
})

router.delete("/books/:id",(req,res)=>{
    res.send(`delete book id ${req.params.id}`);
})

module.exports = router;