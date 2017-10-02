var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//connect to MySql DB
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dipshit12!!",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { burgers: data });
  });
});


// add a burger
// app.post("/api/quotes", function(req, res) {
//   connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [
//     req.body.author, req.body.quote
//   ], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server faliure
//       return res.status(500).end();
//     }

//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// Update a burgers devoured boolean value
// app.put("/api/quotes/:id", function(req, res) {
//   connection.query("UPDATE quotes SET author = ?, quote = ? WHERE id = ?", [
//     req.body.author, req.body.quote, req.params.id
//   ], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server faliure
//       return res.status(500).end();
//     } else if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
  