const express =require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}))

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'loginLogout'
});



app.post('/register', (req, res) =>{

    const username = req.body.username
    const password = req.body.password
    db.query("INSERT INTO employees (username, password) VALUES (?,?)", [username, password], (err,result)=>{
           console.log(err,result)
        })
})

app.post('/login', (req, res) =>{

    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM employees WHERE username = ? AND password = ?", [username, password], (err,result)=>{
        if (err){
            res.send({err: err});
        }
        if(result.length>0){
            res.send(result)
        } else {
            res.send({message:"Invalid"});
        }
        })
})


app.listen(3001,()=>{
    console.log("running on 3001 server")
})