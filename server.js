  // Dependencies
  const express = require("express");
  const path = require("path");
  const bodyParser = require("body-parser");
  
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
    app.get("/notes.html", function(req, res) {
     res.sendFile(path.join(__dirname, "notes.html"));  
    
    
  });
  
  
    app.get("*", function(req, res) {
       res.sendFile(path.join(__dirname, "index.html")); 
     
    });
    
     app.post("/notes.html", function(req, res){
           console.log("hellooo post request") // postman will throw error and not show text, but console log will show in terminal
           
          
    
    });
    
    
    
      
    
  
  // Starts the server to begin listening
  // =============================================================
   app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
   });
  
