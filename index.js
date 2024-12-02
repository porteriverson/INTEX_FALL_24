let express = require("express");

let app = express();

let path = require("path");

// let security = false;

const port = process.env.PORT || 3000 ;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/views'));

app.use(express.urlencoded({extended: true}));

// connect to pg 

const knex = require("knex") ({
  client : "pg",
  connection : {
      host : process.env.RDS_HOSTNAME || "localhost",
      user : process.env.RDS_USERNAME || "postgres",
      password : process.env.RDS_PASSWORD || "admin",
      database : process.env.RDS_DB_NAME || "turtleshelter",
      port : process.env.RDS_PORT || 5432,
      ssl : process.env.DB_SSL ? {rejectUnauthorized: false} : false
  }
});
