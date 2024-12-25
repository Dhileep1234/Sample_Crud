const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
// const mysql2 = require("mysql2");

require('dotenv').config();  // we can kept the one data commonly somewhere  //Middleware-data's are get by json format

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false})); //This is for crud operation
app.use(bodyParser.json());

// //Static files
app.use(express.static("public"));

//Template Engine
const handlebars = exphbs.create({extname:".hbs"}); //our templates are stored in this extension like .hbs
app.engine('hbs',handlebars.engine);
app.set("view engine", "hbs");
/*
//MySql
const con = mysql2.createPool({
    connectionLimit:10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//Check Database Connection
con.getConnection((err,connection)=> {
    if(err) throw err
    console.log("Connection Success");
});
*/

//Router
/*app.get('/',(req,res)=>{
    res.render("home");
});
*/

const routes = require("./server/routes/student");
app.use('/',routes);

// //Listen port
app.listen(port,()=>{
    console.log("Server is listening on this port: "+port);
});


