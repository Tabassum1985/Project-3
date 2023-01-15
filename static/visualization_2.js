
const url = "http://127.0.0.1:5000/db_call2";

function drawMap(selectedID) {

    d3.json(url).then(function(response) {
  
        console.log(response);

        long = 0
        lat = 0

     // Loop through the JSON data
        
        for (let i = 0; i < response.length; i++) {
            
            if (response[i].year == selectedID) {
                
                long = response[i].longitude;
                console.log(long);
                lat = response[i].latitude;
                console.log(lat);
                break;
            }
        }

        var container = L.DomUtil.get('map');
        if(container != null){
            container._leaflet_id = null;
        }

        var myMap = L.map("map", {
        center: [lat, long],
        zoom: 5
        });
  
        // Adding the tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);
  
 
  
  
    

  
        var goals_data = [];
        response.forEach(function(d) {
            if (d.year == selectedID) {
            goals_data.push({lat: d.latitude, lng: d.longitude, weight: d.total_goals});
            }
        });
    
        // Create a heatmap layer and add it to the map
        var heatmap = L.heatLayer(goals_data, {
            minOpacity: 0.5
        }).addTo(myMap);


        console.log(goals_data)

  });

}

function populateSelector() {
    // Fetch the JSON data 
    d3.json(url).then(function(data) {
    
        console.log(data[0].year);
    
        idList = data
        
        yearList = []
    
        for (let i = 0; i < idList.length; i++) {
            
            if (yearList.includes(data[i].year) == false) {
                
                yearList.push(data[i].year);
            }
        }
        console.log(yearList)
    
    
        // Use D3 to select the drop down
        let selData = d3.select("#selDataset");
    
        for (let i = 0; i < yearList.length; i++) {
            // Append option list
            selData.append("option").text(yearList[i]).property("value", yearList[i]);
            
        }
    });
}


// run initializer 
function init() {
    d3.json(url).then(function(response) {

        populateSelector();
        drawMap(response[0].year);
    })
}



// function for when the drop down is changed
function optionChanged(selectedID) {
    console.log(selectedID);
    // Check if the map already exists
    // document.getElementById('map').innerHTML = '<div id="map"></div>';
    drawMap(selectedID);
}

init();