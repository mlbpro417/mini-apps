/*For basic requirements, data-entry of the JSON on the client should be done using an HTML form with a single 
textarea input field (for the entire JSON text) and a submit button. 
When the user clicks submit, POST the form data to the server.


A single page app means that once the page loads, no user-generated actions on the page may cause the entire page to reload. 
One way this rule could be broken in your implementation is through the use of an HTML form for submitting your JSON data. 
You will know the page is reloading if you see a change in your URL. You must prevent this behavior from occurring.

You may assume the JSON data has a regular structure and hierarchy (see included sample file). 
The server must flatten the JSON hierarchy, mapping each item in the JSON to a single line of CSV report 
(see included sample output). You may assume child records in the JSON will always be in a property called children 
but you may not assume a JSON record has any other specific properties; i.e. any properties that exist besides children 
must be mapped to a column in your CSV report.
*/


// to do

// make POST requests to the server
  // link submit button in html to making a post request

// user submitted data should be in json format 

var dummyData = {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
};

// handle click and submission of data
var handleSubmitData = function() {
  $('form').on('submit', function(e){
  e.preventDefault();
  var inputData = $('#input')[0].value;
  sendData(dummyData);
  // console.log();
  });
}();

// function to send post request
var sendData = function(message) {
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('Message sent', data);
    },
    error: function (data) {
      console.error('Failed to send message', data);
    }
  });
}




