const express = require('express');
const app = express();

const PORT = 8800;

app.get("/", (req,res)=>{
    
        res.send("Hello");
})


app.listen(PORT,function() {
    console.log(`Server is Running Successfully.! at  http://localhost:${PORT}`)
})


