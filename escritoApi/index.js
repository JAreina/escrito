"use strict";

let express = require('express');
let consign = require('consign');

const app = express();



consign()
         .include("libs/config.js")
         .then("db.js")
         .then("libs/middlewares.js")
         .then("routes")
         .then("libs/boot.js")
         .into(app)



