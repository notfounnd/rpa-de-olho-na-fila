// Open Firefox and type "about:config" into the URL bar.
// Search for: "security.fileuri.strict_origin_policy"
// Set to "false"

function performChart() {
    fetch("../rpa/files/data.json")
        .then(response => response.json())
        .then(json => {
            console.log(json)
            generateChart(json)
        })
}

function generateChart(json) {
    let chart = document.getElementById('data-chart')
    chart.height = 250
    let myChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: json.labels,
            datasets: json.dataset
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 6
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    })
}

performChart()
