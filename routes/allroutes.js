const express = require("express");
const BookRouter = express.Router();
const connect = require('../database/db');
const { ObjectId } = require('mongodb');
const BookController = require('../Controllers/Bookscontroller')

//post book
BookRouter.post("/book", BookController.postBook)


//get all books api
BookRouter
.route()
    .get("/books", BookController.getallBooks)

    .get("/book/:id", BookController.getsingleBook)  //get book by id

    .patch("/book/:id", BookController.updateBook)  //update book by id

    .delete("/book/:id", BookController.deleteBook)  //delete book

module.exports = router;