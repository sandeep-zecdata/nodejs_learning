// const connect = require('../database/db');
const { ObjectId } = require('mongodb');
const Book = require("../models/book");
const axios = require('axios');

exports.postBook = async (req, res) => {

    const { title, author } = req.body

    const book = new Book({
        title,
        author
    })
    try {
        await book.save();
        res.send({ message: "book stored successfully " });
    } catch (error) {
        console.log(error, "444444444444444", error._message)
        res.send(error._message);
    }
}

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
    res.send("book is updated");
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
    await Book.deleteOne({ _id })
    res.send("book is deleted");

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