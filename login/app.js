
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'users'
});

db.connect((error)=>{
    if(error){
        console.log('erro ao conectar com banco de dados');
    } else{
        console.log('conectado ao mysql');
    }
});



app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, ()=> {
    console.log(`Servidor rodando no endereço: http://localhost:${port}`);
})


app.get("/", (req, res)=> {
    res.sendFile(__dirname + '/views/login.html')
})


app.post ('/login', (req,res)=> {
    const username = req.body.usuario
    const password = req.body.senha

    db.query('select password from user where username = ?', [username] , (error, results)=>{ 
        if(error){
            console.log('Erro ao realizar consulta', error);
        }else{
            if(results.length > 0 ){
                const passwordBD = results[0].password;
                if (passwordBD === password){
                    console.log('login bem sucedido!!')
    
                }else{
                    console.log('credenciais inválidas')
                }
           }else{
            console.log('usuario não cadastrado')
           } 
        }
     })
    

});