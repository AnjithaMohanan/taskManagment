const express= require('express');
const bodyParser =require('body-parser');
const cors =require ('cors');
const mongoose =require('mongoose');
const path=require('path')
require('dotenv').config();



const Routes =require ('./routes/route.js');
const mongoString = process.env.MONGODB_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});


const app = express();


app.use(cors());
const __dirname1=path.resolve();
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname1, "/client/build")))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirnname1,"client","build","index.html"))
  })
}else{
  app.get('/', (req, res) => {
    res.send('API RUNNING');
  });
}

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

app.get('/', (req, res) => {
    res.send('API RUNNING');
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })