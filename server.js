  // Dependencies
  const express = require("express");
  const path = require("path");
  const bodyParser = require("body-parser");
  
  // =============================================================
  // Sets up the Express App
  // =============================================================
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  // Sets up the Express app to handle data parsing
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
  
  // Routes
  // Basic route that sends the user first to the AJAX Page
    app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "index.html"));  
    
    
  });
  
  
    app.get("/notes", function(req, res) {
       res.sendFile(path.join(__dirname, "notes.html")); 
     
    });
    
     app.post("/notes", function(req, res){
           console.log("hellooo post request")
           
          
    
    });
    
    
    
      
    
  
  // Starts the server to begin listening
  // =============================================================
   app.listen(PORT, function() {
     console.log("App listening on PORT " + PORT);
   });
  
