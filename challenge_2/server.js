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
      body = JSON.parse(Buffer.concat(body));
      var test = transformData(body);
      // console.log(test);
      res.send(transformData(body));
    });
});


// each property on the object needs to be sent as the first line in the csv data aka categories
// each additional line is the personal data from the top to the bottom in the structure
// so first line is the very first person in the object and each additional is the person under him
// recurse through the object to check to see if the person has children or not

// break into two functions, first one simply puts out the first line 

var transformData = function(data) {
  var stringData = '';
  categoryGrabber(data);
  personalDataGrabber(data);
  recurseData(data);
  return categoryGrabber(data) + '\n' + recurseData(data); 
}

// grab categories first
var categoryGrabber = function(teamData) {
  var results = [];
  for (var key in teamData) {
    if (key !== 'children') {
      results.push(key);
    }
  }
  return results.toString();
};
// grab personal data
var personalDataGrabber = function (teamData) {
  var results = [];
  for (var key in teamData) {
    var value = teamData[key];
    if (key !== 'children') {
      results.push(value);
    }
  }
  return results.toString();
};
// recurse through JSON object
var stringData = '';
  var recurseData = function (teamData) {
    if (teamData.children.length === 0) {
      return personalDataGrabber(teamData);
    } else {
    // iterate through one level below 
      for (var i = 0; i < teamData.children.length; i++) {
        stringData += personalDataGrabber(teamData.children[i]) + '\n';
        recurseData(teamData.children[i]);
      }
      return stringData += personalDataGrabber(teamData);
    }
  }  


app.listen(3000, () => console.log('app listening on port 3000'));
