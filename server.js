const express = require('express')
const app =express()
const bcrypt = require('bcrypt')
const fs = require('fs');
const { name } = require('ejs');


const port = 4000;

app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'));

const users = []



app.get('/' , (req,res) =>{
    const web1 = fs.readFileSync("./pages/wp.html")
    res.send(web1.toString())
})


app.get('/login',(req,res) => {
    const web2 = fs.readFileSync("./pages/tdls.html")
    res.send(web2.toString())
})
app.get('/img_form',(req,res)=>{    
    const web4 = fs.readFileSync("./pages/img_form.html")
    res.send(web4.toString())
})

app.post('/login' ,(req,res)=>{

})

app.get('/reg' , (req,res)=>{
    const web3 = fs.readFileSync("./pages/form_code2.html")
    res.send(web3.toString())
})
 app.post('/reg' , async (req,res)=>{
    try{
        const hashedpass = await bcrypt.hash(req.body.pass)
        users.push({
            id:Date.now().toString(),
            First_name : req.body.name,
            last_name : req.body.last_name,
            Email : req.body.email,
            Pass : hashedpass

        })
        res.redirect('login')
    }
    catch{
        res.redirect('/reg')
    }
 })

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})
        
