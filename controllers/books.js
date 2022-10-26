const express = require("express");
const router = express.Router();
const fs = require("fs");

// full endpoint /api/books
// get all books
router.get("/", (req, res)=>{
    fs.readFile("./db/books.json", "utf-8", (err,data)=>{
        if (err){
            throw err;
        } else {
            res.json(JSON.parse(data));
        }
    });
});
// full endpoint /api/books/:id
//get book by id
router.get("/:id", (req, res)=>{
    fs.readFile("./db/books.json", "utf-8", (err,data)=>{
        if (err){
            throw err;
        } else {
            res.json(JSON.parse(data));
        }
    });
});


router.post("/", (req,res)=>{
    fs.readFile("./db/books.json","utf-8", (err, data)=>{
        if (err){
            throw err;
        }else {
            const booksArr = JSON.parse(data);
            booksArr.push(req.body);
            console.log(booksArr);
            fs.writeFile("./db/books.json", JSON.stringify(booksArr,null,4),(err,data)=>{
                if (err){
                    throw err;
                }
                res.send("book added!")
            });
        }
    });
});


module.exports = router;