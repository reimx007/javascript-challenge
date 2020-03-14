// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


// Select the input
var button = d3.select("#filter-btn");

var filterCondition = {
    datetime: "",
    city: "",
    state: "",
    country: "",
    shape: ""
  };

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");

  // console.log(inputHTML);

  // Get the value property of the input element
  // var inputDateValue = inputDate.property("value");
  //
  // var inputCityValue = inputCity.property("value");

  // Use the form input to filter the data by blood type
  if (inputDate.property("value") != "") {
    var inputDateValue = inputDate.property("value");
    filterCondition.datetime = inputDateValue;
    console.log(inputDateValue);}

  if (inputCity.property("value") != "") {
    var inputCityValue = inputCity.property("value");
    filterCondition.city = inputCityValue;
    console.log(inputCityValue); }

    if (inputState.property("value") != "") {
      var inputStateValue = inputState.property("value");
      filterCondition.state = inputStateValue;
      console.log(inputStateValue); }

      if (inputCountry.property("value") != "") {
        var inputCountryValue = inputCountry.property("value");
        filterCondition.country = inputCountryValue;
        console.log(inputCountryValue); }

        if (inputShape.property("value") != "") {
          var inputShapeValue = inputShape.property("value");
          filterCondition.shape = inputShapeValue;
          console.log(inputShapeValue); }
    console.log(filterCondition)
  // var filtered = tableData.filter(sightings =>
  //   sightings.datetime == inputDateValue && sightings.city == inputCityValue);
  // console.log(filtered);

  // var filtered = tableData.filter(function(obj) {
  //   for (var key in filterCondition) {
  //       // if condition not met return false
  //   }
  //   return true;
  // });
  var filter = tableData.filter(function(item) {
    for (var key in filterCondition) {
      if (item[key] === undefined || item[key] != filterCondition[key])
        return false;
    }
    return true;
  });


  filter.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
