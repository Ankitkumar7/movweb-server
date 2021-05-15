const express = require('express')
const app = express()
var mongo = require('mongodb');
const cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
url = `mongodb+srv://admin:ankit@cluster0.hdxyw.mongodb.net/covidresource?retryWrites=true&w=majority`
let client;
app.use(cors());
app.options('*', cors());
MongoClient.connect(url, { 
    useNewUrlParser: true
}, function(err, db) {
    if (err) return console.error(err)
    console.log('Connected to Database')
    client = db
}   
);
app.use(express.static(process.cwd()+"/dist/"));
app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/dist/index.html")
  });

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
const port = 3000

app.post('/save-response', function (req, res) {
    console.log(req.body);
    const db = client.db('covidresource')
    const resourceCollection = db.collection('resources')
    resourceCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))

    res.send({status: "success", data: req.body})

  })

  app.get('/get-response', function (req, res) {
    
    const db = client.db('covidresource')
    db.collection('resources').find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send({status: "success", data: result})
      });
    // const resourceCollection = db.collection('resources')
    // resourceCollection.find()
    // .then(result => {
    //     res.send({status: "success", data: result})
    // })
    // .catch(error => console.error(error))

    

  })

app.listen(process.env.PORT || 8080);
