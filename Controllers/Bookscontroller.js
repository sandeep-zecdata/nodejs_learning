const connect = require('../database/db');
const { ObjectId } = require('mongodb');

exports.postBook = async (req, res) => {
    const db = await connect();
    //   const data = {
    //     bookname: "Expressjs",
    //     author: "unknown",
    //   }
    await db.collection('book').insertOne(req.body);
    res.status(201).json({ data: "book is stored" });
}

exports.getallBooks = async (req, res) => {
    const db = await connect();
    const books = await db.collection("book").find().toArray();
    // res.send("All books");
    res.status(200).json(books);
}

exports.getsingleBook = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const db = await connect();
    await db.collection("book").findOne({ _id }).then((book) => {
        // console.log("data:", book);
        if (!book) {
            return res.status(404).send({ message: "book not Exist." });
        }
        res.send(book); 
    }).catch((error) => {
        res.status(500).send(error);
    })
    // console.log(books);
}

exports.updateBook  = async (req, res) => {
    try {
        const _id = new ObjectId(req.params.id);
        const db = await connect();
        console.log(_id);

        await db.collection("book").updateOne({ _id }, { $set: req.body });

        res.json({ data: "book is updated" });
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ error: "Error updating book" });
    }
}

exports.deleteBook =  async (req, res) => {
    try {
        const _id = new ObjectId(req.params.id);
        const db = await connect();
        console.log(_id);

        await db.collection("book").deleteOne({ _id });
        res.json({ data: "book is deleted" });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Error deleting book" });
    }
}