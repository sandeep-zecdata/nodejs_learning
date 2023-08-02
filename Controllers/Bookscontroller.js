// const connect = require('../database/db');
const { ObjectId } = require('mongodb');
const Book = require("../models/book");
const axios = require('axios');
const Joi = require('joi');

exports.postBook = async (req, res) => {
    const bookSchema = Joi.object({
        title: Joi.string().min(10).required(),
        author: Joi.string().required()
    });

    const { error, value } = bookSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        // Check if a book with the same title already exists in the database
        const existingBook = await Book.findOne({ title: value.title });

        if (existingBook) {
            return res.status(409).json({ message: "A book with the same title already exists." });
        }

        // If no matching title is found, save the new book
        const book = new Book({
            title: value.title,
            author: value.author
        });

        await book.save();
        res.status(201).json({ message: "Book stored successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while saving the book." });
    }
};


exports.getallBooks = async (req, res) => {
    // axios.get("http://localhost:3000/books").then(function(res){
    //     res.send(res.data)
    //     .catch(function(error){
    //         res.send(error);
    //     })
    // })
    const books = await Book.find();
    res.status(200).json(books);
}

exports.getsingleBook = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const book = await Book.find({ _id })
    res.send(book);
    // const db = await connect();
    // await db.collection("book").findOne({ _id }).then((book) => {
    //     // console.log("data:", book);
    //     if (!book) {
    //         return res.status(404).send({ message: "book not Exist." });
    //     }
    //     res.send(book);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })
    // console.log(books);
}

exports.updateBook = async (req, res) => {

    const _id = new ObjectId(req.params.id);
    await Book.updateOne({ _id }, { $set: req.body })
    res.status(201).json({message:"book is updated"});
    // try {
    //     const _id = new ObjectId(req.params.id);
    //     const db = await connect();
    //     console.log(_id);

    //     await db.collection("book").updateOne({ _id }, { $set: req.body });

    //     res.json({ data: "book is updated" });
    // } catch (error) {
    //     console.error("Error updating book:", error);
    //     res.status(500).json({ error: "Error updating book" });
    // }
}

exports.deleteBook = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const deletedBook = await Book.deleteOne({ _id })
    
    if (deletedBook.deletedCount === 0) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.json({message:"book is deleted"})
    // try {
    //     const _id = new ObjectId(req.params.id);
    //     const db = await connect();
    //     console.log(_id);

    //     await db.collection("book").deleteOne({ _id });
    //     res.json({ data: "book is deleted" });
    // } catch (error) {
    //     console.error("Error deleting book:", error);
    //     res.status(500).json({ error: "Error deleting book" });
    // }
}