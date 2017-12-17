"use strict";

let express = require('express');
let consign = require('consign');

const PORT = 2222;
const app = express();

//formatear la salida json en navegador
app.set("json spaces",6)

consign()
         .include("routes")
         .into(app)



app.listen(PORT,()=>{
    console.log("EXPRESS FUNCIONA")
})