const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://pnsidou:ped270390@cluster0-m11jf.mongodb.net/week10?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 3000}).catch(function(err){
    console.log(err);
});

app.use(express.json());
app.use(routes);

app.listen(3333);
