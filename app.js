
var express = require('express');
var path = require('path');

var foodRouter = require('./routes/food.js')


var app = express();

var port = process.env.PORT || 3001;

var host = "127.0.0.1";

var response = () => {
  console.log(`server is running on ${host}:${port}`)
}


app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){ res.send("/public/index.html") })

app.use('/api/food', foodRouter);



app.listen(port, host, response)


module.exports = app;
