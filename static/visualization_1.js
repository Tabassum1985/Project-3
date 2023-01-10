// Get the samples json
const attendance = "";


function populateSelector() {
// Fetch the JSON data 
d3.json(attendance).then(function(data) {

    console.log(data);
    idList = data.Year

    // Use D3 to select the drop down
    let selData = d3.select("#selDataset");

    for (let i = 0; i < idList.length; i++) {
        // Append option list
        selData.append("option").text(idList[i]).property("value", idList[i]);
    }
});
}

// function to create charts

function charts(selectedID) {


    d3.json(attendance).then(function(data) {
    // I need data for top 10 OTUs for individual sample_values = data for the bar
    // otu_ids = labels
    // otu_labels = hovertext

        
        // filter based on the current selection: Sample and MetaData
        let currentSample = data.samples.filter(patient => patient.id == selectedID)[0];
        let currentMetaData = data.metadata.filter(patient => patient.id == selectedID)[0];

        // // Slice the first 10 objects for plotting
        // // Reverse the array to accommodate Plotly's defaults

        // Trace for the Data
        const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    });
}

// function for when the drop down is changed
function optionChanged(selectedID) {
    console.log(selectedID);
    charts(selectedID);
}


// run initializer 
function init() {
    d3.json(attendance).then(function(data) {
    
    populateSelector();
    charts(data.Year[0]);
    })
}

init();