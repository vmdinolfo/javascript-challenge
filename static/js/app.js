// from data.js
var tableData = data;

// select button
var button = d3.select("#filter-btn");

// select date picker (form)
var datePicker = d3.select("#filter");

// select tbody for table in index.html
var tbody = d3.select("tbody");

// Create event handlers
button.on("click", runEnter);
datePicker.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement  = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // log data and input to console to validate js reading correctly
    console.log(inputValue);
    console.log(tableData);

    // filter data based on date inputValue entered in form
    var dateFilter = tableData.filter(date => date.datetime === inputValue);
    
    // log filtered data in console to validate filter works
    console.log(dateFilter);
    
    //clear table content
    tbody.html("");

    dateFilter.forEach(function(dateFilters) {
        // append rows to table for filtered dates        
        var row = tbody.append("tr");
          
        //Loop through object to create individual arrays
        Object.entries(dateFilters).forEach(function([key, value]) {
            
            //create cells for array content to be enterd
            var cell = row.append("td");           

            //append array to cells
            cell.text(value);
        });
    });
};