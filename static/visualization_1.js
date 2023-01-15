// Get the attendance data json
const attendance = "http://127.0.0.1:5000/db_call";

console.log("Run 12")
function populateSelector() {
// Fetch the JSON data 
d3.json(attendance).then(function(data) {

    console.log(data[0].year);

    idList = data
    
    yearList = []

    // yearList.push(data[0].year)

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

// function to create charts

function charts(selectedID) {


    d3.json(attendance).then(function(data) {

    // Create a list of all games and their attendance
    
    idList = data
    
    gameList = []

    for (let i = 0; i < idList.length; i++) {
        
        if (data[i].year == selectedID) {
            
            gameList.push(data[i].stage_home_away_team);
        }
        
        
    }
    console.log(gameList)

    attendanceGameList = []

    for (let i = 0; i < idList.length; i++) {
        
        if (data[i].year == selectedID) {
            
            attendanceGameList.push(data[i].attendance);
        }
        
        
    }
    console.log(attendanceGameList)


    games_attendance = gameList.map((game, index) => {
        return {game: game, attendance: attendanceGameList[index]};
    });
    
    games_attendance.sort((a, b) => b.attendance - a.attendance);
    console.log(games_attendance)

    topTenGames = games_attendance.slice(0, 10);
    console.log(topTenGames);

    labels = []
    data = []

    for (let i = 0; i < topTenGames.length; i++) {
        
        labels.push(topTenGames[i].game);
        data.push(topTenGames[i].attendance);
        
    }

    
    
    // Chart.js element
    const ctx = document.getElementById('myChart');
   

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Attendance',
                data: data,
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
    // Check if the chart already exists
    if (myChart) {
        // Destroy the existing chart
            myChart.destroy();
        }
    charts(selectedID);
}


// run initializer 
function init() {
    d3.json(attendance).then(function(data) {

    populateSelector();
    charts(data[0].year);
    })
}

init();