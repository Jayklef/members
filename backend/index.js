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
    password: ""
});

con.connect(function(err){
    if(err){
        console.log("could not connect");
    } else{
        console.log("Connected");
    }
});

app.listen(7000, () => {
    console.log("Running");
})