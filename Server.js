var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var askadeClients     =   require("./askadeBilling/model/AskadeClients");
var askadeClientsContracts     =   require("./askadeBilling/model/AskadeClientsContracts");
var askadeClientsProjects     =   require("./askadeBilling/model/AskadeClientsProjects");
var askadeResources     =   require("./askadeBilling/model/AskadeResources");
var askadeProjectResources     =   require("./askadeBilling/model/AskadeProjectResources");
var askadeCompany = require("./askadeBilling/model/AskadeCompany");
var askadeLogin = require("./askadeBilling/model/AskadeLogin");

var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/AskadeBilling');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/askadeLogin")
    .get(function(req,res){
        var response = {};
        var query = askadeLogin.findOne({'email':req.body.email});
        query.selelect('password');
        query.exec(function(err, askadeLogin){
            if(err){
                console.log(err);
                res.json({"error":true, "message" : err.message});
            }else{
                if(askadeLogin.password == req.body.password){
                    res.json.(askadeLogin);
                }
            }
        })

    })
    .post(function(req,res){
        var askadeLogin = new askadeLogin();
        var response = {};
        askadeLogin.email = req.body.email;
        askadeLogin.password = req.body.password;
        askadeLogin.socialMediaId = req.body.password;
        askadeLogin.startDate = new Date();

        askadeLogin.save(function(err){
            if(err){
                response = {"error" : true, "message" : "Error adding data"};
            }else{
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });

router.route("/askadeCompany")
    .get(function(req,res){
        
    })
    .post(function(req,res){
        
    });

router.route("/askadeClients")
    .get(function(req,res){
        var response = {};
        askadeClients.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = data;//{"error" : false,"message" : data};
            }
            res.json(response);
        })
	})		
	.post(function(req,res){
        var db = new askadeClients();
        var response = {};
                db.clientCode = req.body.clientCode;
                db.clientName =  req.body.clientName;
                db.ProductOwner =  req.body.ProductOwner;
                db.location =  req.body.location;
                db.startDate =  req.body.startDate;
                db.endDate =  req.body.endDate;
                db.save(function(err){
                if(err) {
                    response = {"error" : true,"message" : "Error adding data"};
                } else {
                    response = {"error" : false,"message" : "Data added"};
                }
                res.json(response);
        });

	});

router.route("/askadeClients/:id")
    .get(function(req,res){
        var response = {};
        askadeClients.findById(req.params.id,function(err,data){
            if(err){
                response = {"error": true, "message":"Error fetching data"};
            }else{
                response = data;
            }
            res.json(response);
        });
    })
    .post(function(req,res){
        var response = {};
        askadeClients.findById(req.params.id, function(err,data){
            if(err){
                response = {"error": true, "message":"Error fetching data"};
            }else{
                if(req.body.clientName !== undefined){
                    data.clientName = req.body.clientName;
                }
                if(req.body.ProductOwner !== undefined){
                    data.ProductOwner = req.body.ProductOwner;
                }
                if(req.body.location !== undefined){
                    data.location = req.body.location;
                }
                if(req.body.endDate !== undefined){
                    data.endDate = req.body.endDate;
                }
                data.save(function(err){
                  if(err){
                      response = {"error" : true,"message" : "Error updating data"};
                  }else{
                      response = {"error" : false,"message" : "Data is updated for "+req.params.id};
                  }
                  res.json(response);
                })
            }
        });
    })






app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");
