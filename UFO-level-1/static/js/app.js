// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


// Select the input
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var input = d3.select(".form-control");
  // console.log(inputHTML);

  // Get the value property of the input element
  var inputValue = input.property("value");
  console.log(inputValue);
  // Use the form input to filter the data by date
  var filtered = tableData.filter(sighting => sighting.datetime === inputValue);
  console.log(filtered);

  // write filtered object to the table body of html page
  filtered.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


  });
