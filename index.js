let express = require("express");

let app = express();

let path = require("path");

const port = 3000 ;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/views'));

app.use(express.urlencoded({extended: true}));



// connect to database
const knex = require("knex") ({
    client : "pg",
    connection : {
        host :  "localhost",
        user : "postgres",
        password :  "admin",
        database : "turtleshelter", 
        port : 5432,
}
});


