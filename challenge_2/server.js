var express = require('express');

var app = express();

app.use(express.static('client'));
 
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/', function (req, res) {
  var body = [];
  req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      res.end(body);
    });
});


// each property on the object needs to be sent as the first line in the csv data
// each additional line is the data from the top to the bottom in the structure
// so first line is the very first person in the object and each additional is the person under him
// recurse through the object to check to see if the person has children or not

// break into two functions, first one simply puts out the first line 

var categoryGrabber = function(teamData) {
  var results = [];
  for (var key in teamData) {
    if (key !== 'children') {
      results.push(key);
    }
  }
  return results.toString();
};

var personalDataGrabber = function (teamData) {
  var results = [];
  for (var key in teamData) {
    var value = teamData[key];
    if (key !== 'children') {
      results.push(value);
    }
  }
  return results.toString();

  var recurseData = function

   if (teamData.children.length === 0) {
    return teamData.individualSales;
  } else {
    // iterate through one level below 
    var sales = 0;
    for (var i = 0; i < teamData.children.length; i++) {
      sales += totalSales(teamData.children[i]);
    }
    return sales + teamData.individualSales;
    
  }
};

app.listen(3000, () => console.log('app listening on port 3000'));
