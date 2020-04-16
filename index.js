let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    console.log('hello world')
   
    res.send('hello world')
    
})

app.listen(process.env.PORT,
    ()=>console.log('Server is running at ',process.env.PORT))