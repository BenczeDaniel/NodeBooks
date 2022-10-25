

import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import {configDB} from './configDB.js';

const db = mysql.createConnection(configDB)
const app = express()
app.use(express.json())

app.use(cors())

app.get('/categ', (request,response) => {
    console.log("Szia.")
    db.query('select category from books group by category order by category',(error,results)=>{
        if (error) 
        console.log(error)
        else
        response.send(results)
    })
    
})


app.get('/books/:categ', (request,response) => {
    const {categ}=request.params
    db.query('SELECT id,author,title,category FROM books WHERE category=?;',[categ],(error,results)=>{
        if (error) 
        console.log(error)
        else
        response.send(results)
    })
    
})
app.get('/books', (request,response) => {
    const {categ}=request.params
    db.query('SELECT id,author,title,category FROM books order by title limit 20',([categ]),(error,results)=>{
        if (error) 
        console.log(error)
        else
        response.send(results)
    })
    
})

app.get('/books/title/:title', (request,response) => {
    const {title}=request.params
    db.query('SELECT id,author,title,category FROM books WHERE title Like ? ',[`%${title}%`],(error,results)=>{
        if (error) 
        console.log(error)
        else
        response.send(results)
    })
    
})




app.listen(8000,()=> console.log("szerver listening on port "))



