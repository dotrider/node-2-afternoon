const express = require('express'); //require express
const app = express(); //Creating an express app
app.use(express.json()); //configures app to parse JSON from the body
//Sets the API to serve our front-end files.
app.use(express.static(__dirname + '/../public/build'));

//importing controller 
const {create, read, update, deleteMessage} = require('./controller/messagesCtrl')

const port = 3001; //setting port
app.listen(port,() => console.log(`Live on port ${port}`)); //configuring app to listen on port and displaying a message when listening.

//create
app.post('/api/messages', create);
//read
app.get('/api/messages',read);
//update
app.put('/api/messages/:id', update);
//delete
app.delete('/api/messages/:id',deleteMessage);