import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'    

/*const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const Jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')  */


const app = express();
app.use(cors());
app.use(cookieParser())
app.use(express.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "JY@class4579",
    database: "members"
});



con.connect(function(err){
    if(err){
        console.log("could not connect");
    } else{
        console.log("Connected");
    }
});

app.post('/signIn', (req, res) =>{

    const sql = "SELECT * FROM members WHERE email = ? AND password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) =>{
        if(err) return res.json({Status: "Error"});
        if(result.length > 0){
            return res.json({Status: "Success"})
        } else {
            return res.json({Status: "Error"});
        }
    })
})

app.listen(7000, () => {
    console.log("Running");
})