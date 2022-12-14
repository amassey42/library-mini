//Add server code here!
const express = require("express");
// instantianting a new express server
const app = express();
// selecting network port
const PORT = process.env.PORT || 3000;
// importing path package from standard library
const path = require("path");
const fs = require("fs");

//middle ware to serve static assets
app.use(express.static("public"));

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const booksRoutes = require("./controllers/books")
app.use("/api/books",booksRoutes)


// GET reuquest to /, serves html page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
  });
  
  
  // catch all for all unhandled routes
  app.get("*", (req, res) => {
    res.status(404).send("not a valid route! try /api/books or /api/books/:id");
  });

//tells my server where to looks for requests
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
  });