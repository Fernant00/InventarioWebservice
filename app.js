const express = require('express');
const app = express();

app.get('/productos', function(req,res){
    res.json([
        {
            id:1,
            nombre:'Martillo',
            precio:30.0,
            minStock:5,
            currentStock:10,
            maxStock:20
        }
    ])
});

app.listen(3000, () =>{
    console.log('Servidor escuchando en htt://192.168.1.19:3000');
})