  // Dependencies
  const express = require("express");
  const path = require("path");
  const bodyParser = require("body-parser");
  const connection = require("./db/db.js")
  
  // =============================================================
  // Sets up the Express App
  // =============================================================
  const app = express();
  const PORT = process.env.PORT || 5500;

  
  // Sets up the Express app to handle data parsing
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'))
  // app.use(express.static('public'))- use when there is public folder
  
  // Routes
  // Basic route that sends the user first to the AJAX Page
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));    
  });
  
  app.post("/notes", function(req, res){
    console.log("hellooo post request")      
  });

  // start of api requests ====================================================================================================

  app.get("/api/notes", function(req, res) {
    connection.query("SELECT * FROM `notes`", function(err,results){
      res.json(results);
    });     
  });

  /**
    DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. 
    I did not send data to a JSON file, I used mySQL/MAMP instead
  */
  // https://www.guru99.com/delete-and-update.html
  app.delete("/api/notes/:id", function(req, res) {
    connection.query("DELETE FROM `notes` WHERE `id` = "+req.params.id);   
  });

  // POST /api/notes - Should recieve a new note to save on the request body, used mySQL/MAMP instead
  app.post("/api/notes", function(req, res) {
    console.log("req.body:", req.body);
    const query = "INSERT INTO `notes` (note_title, note_text) VALUES ('" + req.body.title + "', '"+ req.body.text +"')"
    connection.query(query, function(err,results){
      // res.json(results);
      console.log(err,results)
    });     
  });

// had to move the * to the bottom- that was a hard lesson
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));    
  });
    
  
  // ====================================================================================================================================
  // Starts the server to begin listening
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
