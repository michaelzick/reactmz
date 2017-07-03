#!/bin/env node

var work = [];
var art = [];
var pics = [];
var about = [];
var skills = [];

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , busboy = require('express-busboy')
  , methodOverride = require('method-override');

var app = express();

busboy.extend(app);

var port = process.env.PORT || 80;
var ipaddr = process.env.IP;

console.log('IP: ' + ipaddr);

http.createServer(app).listen(port, ipaddr, function(){
  console.log('Express server listening on port ' + port);
});

// DB
app.use(busboy);
var MongoClient = require('mongodb').MongoClient;

app.get('/', function(req, res){
  MongoClient.connect("mongodb://localhost:27017/michaelmulti",
    {
      // retry to connect for 60 times
      reconnectTries: 60,
      // wait 1 second before retrying
      reconnectInterval: 1000
    },
    function(err, db) {
      if(!err) {
        console.log("We are connected");
      }
      db.collection("work", function(err, collection) {
        collection.find().sort({order_num: 1}).toArray(function(err, result) {
          if (err) {
            throw err;
          } else {
            result.forEach(function(item, i) {
              work[i] = result[i];
            });
          }
        });
      });
      db.collection("art", function(err, collection) {
        collection.find().sort({order_num: 1}).toArray(function(err, result) {
          if (err) {
            throw err;
          } else {
            result.forEach(function(item, i) {
              art[i] = result[i];
            });
          }
        });
      });
      db.collection("pics", function(err, collection) {
        collection.find().sort({order_num: 1}).toArray(function(err, result) {
          if (err) {
            throw err;
          } else {
            result.forEach(function(item, i) {
              pics[i] = result[i];
            });
          }
        });
      });
      db.collection("about", function(err, collection) {
        collection.find().sort({order_num: 1}).toArray(function(err, result) {
          if (err) {
            throw err;
          } else {
            result.forEach(function(item, i) {
              about[i] = result[i];
            });
          }
        });
      });
      db.collection("skills", function(err, collection) {
        collection.find().sort({order_num: 1}).toArray(function(err, result) {
          if (err) {
            throw err;
          } else {
            result.forEach(function(item, i) {
              skills[i] = result[i];
            });
          }
        });
      });
      res.render('index.html', {
        work: work,
        art: art,
        pics: pics,
        about: about,
        skills: skills
      });
    });
  });
});

app.post('/', function (req, res) {
  MongoClient.connect("mongodb://localhost:27017/michael", function(err, db) {
  // FOR LIVE, CHANGE THE ABOVE LINE TO:
  // MongoClient.connect("mongodb://"+dbUser+":"+dbPass+"@"+dbHost+":"+dbPort+"/michael", function(err, db) {
    db.collection("portfolio", function(err, collection) {
      collection.insert(
            {
              order_num: parseInt(req.body.orderNum),
              proj_link_0: req.body.projLink0,
              proj_rel: req.body.projRel,
              proj_title: req.body.projTitle,
              proj_role: req.body.projRole,
              proj_thumb: req.body.projThumb,
              proj_header: req.body.projHeader,
              proj_desc: req.body.projDesc,
              proj_link_1: req.body.projLink1,
              proj_link_1_title: req.body.projLink1Title,
              proj_link_1_role: req.body.projLink1Role,
              proj_link_2: req.body.projLink2,
              proj_link_2_title: req.body.projLink2Title,
              proj_link_2_role: req.body.projLink2Role,
              proj_link_3: req.body.projLink3,
              proj_link_3_title: req.body.projLink3Title,
              proj_link_3_role: req.body.projLink3Role,
              work_radio: req.body.workRadio,
              art_radio: req.body.artRadio,
              pics_radio: req.body.picsRadio,
              proj_is_url: req.body.urlCheck,
              proj_is_iframe: req.body.iframeCheck,
              proj_new_line: req.body.newLineCheck
            }, function (err, results, fields) {
          if (err) throw err;
          else res.send('success');
      });
    });
  });
});
// /DB

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// app.set('views', __dirname + '/components');
// app.engine('jsx', ReactEngine());
// app.engine('jsx', ReactEngine({wrapper: 'default.jsx'}));

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.set('views', __dirname + '/views');

app.get('/', routes.index);
app.get('/admin', routes.admin);
app.get('/users', user.list);
