// Creates Table
d3.json('\dataPart.json', function (error,data) {

  function tabulate(data, columns) {
		var table = d3.select('body').append('table')
			table.attr("id","data");
		var thead = table.append('thead')
			thead.attr("id","thead");
		var	tbody = table.append('tbody');
			tbody.attr("id","tbody");

		// append the header row
		thead.append('tr')
		  .selectAll('th')
		  .data(columns).enter()
		  .append('th')
		    .text(function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		  .data(function (row) {
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter()
		  .append('td')
		    .text(function (d) { return d.value; });

	  return table;
	}

	// render the table(s)
	tabulate(data, ['datetime', 'city','state','country','shape','durationMinutes','comments']); // 7 column table

});

// Sorts Through Table
function myFunction(dataset) {
    // Declare variables
    var input, filter, ul, li, a, i, td;
    input = document.getElementById('myInput');
    input2 = document.getElementById('myInput2');
    input3 = document.getElementById('myInput3');
    input4 = document.getElementById('myInput4');
    input5 = document.getElementById('myInput5');
    input6 = document.getElementById('myInput6');
    inputCountry = dataset;
    console.log(inputCountry);
    
    filter = input.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    filter4 = input4.value.toUpperCase();
    filter5 = input5.value.toUpperCase();
    filter6 = input6.value.toUpperCase();
    filterCountry = inputCountry.toUpperCase();
    
    ul = document.getElementById("tbody");
    li = ul.getElementsByTagName('tr');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("td")[0];
        a2 = li[i].getElementsByTagName("td")[1];
        a3 = li[i].getElementsByTagName("td")[2];
        a4 = li[i].getElementsByTagName("td")[4];
        a5 = li[i].getElementsByTagName("td")[5];
        a6 = li[i].getElementsByTagName("td")[6];
        aCountry = li[i].getElementsByTagName("td")[3];
        

        if ((a.innerHTML.toUpperCase().indexOf(filter) > -1) && 
			(a2.innerHTML.toUpperCase().indexOf(filter2) > -1) && 
			(a3.innerHTML.toUpperCase().indexOf(filter3) > -1) && 
			(a4.innerHTML.toUpperCase().indexOf(filter4) > -1) && 
			(a5.innerHTML.toUpperCase().indexOf(filter5) > -1) && 
			(a6.innerHTML.toUpperCase().indexOf(filter6) > -1) &&
			(aCountry.innerHTML.toUpperCase().indexOf(filterCountry) > -1)
			) {
				li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
    }
}
var current_page = 1;
var records_per_page = 5;


function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } 
    else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } 
    else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
		//add line
	// Declare variables
    var input, filter, ul, li, a, i, td;
    input = document.getElementById('myInput');
    input2 = document.getElementById('myInput2');
    input3 = document.getElementById('myInput3');
    input4 = document.getElementById('myInput4');
    input5 = document.getElementById('myInput5');
    input6 = document.getElementById('myInput6');
    //~ inputCountry = dataset;
    //~ console.log(inputCountry);
    
    filter = input.value.toUpperCase();
    filter2 = input2.value.toUpperCase();
    filter3 = input3.value.toUpperCase();
    filter4 = input4.value.toUpperCase();
    filter5 = input5.value.toUpperCase();
    filter6 = input6.value.toUpperCase();
    //~ filterCountry = inputCountry.toUpperCase();
    
    ul = document.getElementById("tbody");
    li = ul.getElementsByTagName('tr');
    //add line
    
    return Math.ceil(ul.childElementCount / records_per_page);
}

window.onload = function() {
    changePage(1);
};
