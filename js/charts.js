//charts
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09" ],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 340, 200, 260, 350, 415, 380, 280, 270, 300 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 400, 180, 301, 270, 455, 125, 200, 500, 310 ],
        },
        {
            label: "",
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 600 ],
            // 7
            hidden: true,
        }]
    },
});