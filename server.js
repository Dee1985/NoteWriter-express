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
    console.log("hellooo post request") // postman will throw error and not show text, but console log will show in terminal      
  });

  // start of api requests ====================================================================================================

  // GET /api/notes - Should read the db.json file and return all saved notes as JSON.
  app.get("/api/notes", function(req, res) {
    connection.query("SELECT * FROM `notes`", function(err,results){
      res.json(results);
    });     
  });

  /**
    DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. 
    This means you'll need to find a way to give each note a unique id when it's saved. 
    In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then 
    rewrite the notes to the db.json file.
  */
  app.delete("/api/notes/:id", function(req, res) {
    connection.query("DELETE FROM `notes` WHERE `id` = "+req.params.id);   
  });

  // POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client
  app.post("/api/notes", function(req, res) {
    console.log("req.body:", req.body);
    const query = "INSERT INTO `notes` (note_title, note_text) VALUES ('" + req.body.title + "', '"+ req.body.text +"')"  
    connection.query(query, function(err,results){
      // res.json(results);
      console.log(err,results)
    });     
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));    
  });
    
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
