const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db=require('./connectdb')
const cors=require('cors')

const infoController = require('./controller/infocontroller');
const userController = require('./controller/usercontroller');


const app = express();

app.use(cors());
app.use(express.json());

// Set up database connection
db.connectdb()
.then(()=>{console.log("db connected")})

// Set up routes
app.post('/info', infoController.createInfo);
app.get('/info', infoController.getInfos);
app.get('/info/:id', infoController.getInfoById);
app.put('/info/:email', infoController.updateInfo);
app.delete('/info/:id', infoController.deleteInfo);

app.delete('/user/:id', userController.deleteUser);
app.post('/user', userController.createUser);
app.put('/user/:email', userController.updateUser);
app.get('/user/:email',userController.getUserById)




// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
