// from data.js
var tableData = data;
// Use D3 to select the table body
var tbody = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
// YOUR CODE HERE!
data.forEach((UFO_Report) => {
  var row = tbody.append("tr");
  Object.entries(UFO_Report).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
//console.log(UFO_Report)
});

// Select the button
var button = d3.select("#filter-btn");
//var tbody=d3.select("tbody");
button.on("click", function() {
  tbody.selectAll("tr").remove();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(ufo_date => ufo_date.datetime === inputValue);

  console.log(filteredData)

  data = filteredData;
  data.forEach((UFO_Filter_Report) => {
    var row = tbody.append("tr");
    Object.entries(UFO_Filter_Report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  console.log(UFO_Filter_Report)
  });
});
