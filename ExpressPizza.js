var express=require("express");
var server=express();
var cors=require("cors");
const bodyParser = require('body-parser');
server.use(express.urlencoded({extended: false}))
server.use(express.static("public"));
server.use(cors());
server.use(bodyParser.json());
var mongodb = require("mongodb");

var mongoclient = mongodb.MongoClient;

var url = "mongodb://localhost:27017";

server.get('/fetchPizza',(req,res)=>{
   mongoclient.connect(url,(err,connectResult)=>{
        if(err){
            console.log(err)
        }
        else
        {
            var database=connectResult.db("training")
            database.collection("pizza").find({}).toArray((collectionError,Data)=>{
                if(collectionError){
                    console.log("Error")
                }else
                {
                    console.log(Data)
                    res.send(Data)
                    res.end()
                }
            })
        }
    })
})







server.get('/fetchIngred',(req,res)=>{
    var connect = mongoclient.connect(url, (err,connectResult) => {

        if (err) {
    
            console.log("Error while connecting with database"+err);
    
        }
        else {
    
            var database=connectResult.db("training")
            database.collection("Ingred").find({}).toArray((collectionError,employeeData)=>{
                if(collectionError){
                    console.log("Error")
                }else
                {
                    console.log(employeeData)
                    res.send(employeeData)
                    res.end()
                }
            })
    
            
        }
    })
                
    })

server.listen(7000,()=>console.log("Server listening on port 7000!!"))