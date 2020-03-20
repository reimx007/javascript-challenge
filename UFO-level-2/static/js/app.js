// from data.js
var tableData = data;

// create variable for table body
var tbody = d3.select("tbody");


// grab the button
var button = d3.select("#filter-btn");


// when the button is pressed, take filter conditions
// and return the results in the table body
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // Grab inputs for each conditions (dat, city, state, country and shape)
  // For each condition, assign the input value to variable if not empty
  if (inputDate.property("value") != "") {
    var inputDateValue = inputDate.property("value");

    console.log(inputDateValue);
  }
  // if input is empty, ensure that variable is an empty string
  else {
  var inputDateValue = "";
}

  if (inputCity.property("value") != "") {
    var inputCityValue = inputCity.property("value");

    console.log(inputCityValue);
  }
  else {
  var inputCityValue = "";
}

    if (inputState.property("value") != "") {
      var inputStateValue = inputState.property("value");

      console.log(inputStateValue);
    }
    else {
    var inputStateValue = "";
  }

    if (inputCountry.property("value") != "") {
      var inputCountryValue = inputCountry.property("value");

      console.log(inputCountryValue);
     }
     else {
     var inputCountryValue = "";
   }

    if (inputShape.property("value") != "") {
      var inputShapeValue = inputShape.property("value");

      console.log(inputShapeValue);
     }
     else {
     var inputShapeValue = "";
   }



   // Using the variables assigned from the inputs, determine which data table
   // elements they match. Filter these elements out to a new object.
    var filtered = tableData.filter(sightings =>
      (sightings.datetime == inputDateValue || inputDateValue == "")
      && (sightings.city == inputCityValue || inputCityValue == "")
     && (sightings.state == inputStateValue || inputStateValue == "")
     && (sightings.country == inputCountryValue || inputCountryValue == "")
     && (sightings.shape == inputShapeValue || inputShapeValue == "")
   );

   // Take the filtered object and, for each element in the object,
   // write it to a new line in the html table
   filtered.forEach((ufoSighting) => {
     var row = tbody.append("tr");
     Object.entries(ufoSighting).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
     });
   });
});
