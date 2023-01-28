// Get the winner data json
const worldcups = "http://127.0.0.1:5000/db_call3";

console.log("visualizaion_3.js")

function populateSelector(selData) {
// Fetch the JSON data 
    selData.html("");
    d3.json(worldcups).then(function(data) {
        console.log(data);
        //idList = data
        let countryList = []
        for (let i = 0; i < data.length; i++){
        
            //console.log(data[i].winner)
            countryList.push(data[i].winner)
            //let selData = d3.select("#selDataset);
            selData.append("option").text(countryList[i]).property("value", countryList[i]);
        }
        //console.log(countryList)
    });

}
function optionChanged(selectorElement, country, table_id){
    console.log(`optionChanged ${selectorElement} ${country}`);
    d3.json('/db_call4').then(function(data) {

        console.log(data)
        console.log(data[country]) 
        tabulate(data[country], country, table_id)   
    })

}

// To make the table for result
function tabulate(data, header, table_id) {
    var table = d3.select(table_id)
        table.html("")
        thead = table.append("thead");
        tbody = table.append("tbody");
        console.log()

    thead.append("tr")
        .append("th")
            // .data(function(d) {return d;})
            // .enter()
            // .append("th")
            // .attr("colspan", function(d) {return d.span;})
            .text(`years ${header} won` );

    // Create a row for each object in the data
    // var rows = tbody.selectAll("tr")
    //     .data(data)
    //     .enter()
    //     .append("tr");
    
    for (let i = 0; i < data.length; i++){
        console.log(data[i])
        tbody.append("tr")
            .append("td")
            .text(data[i])

    }
    
   }
   

populateSelector(d3.select("#Country1"));
populateSelector(d3.select("#Country2"));   
