google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Desastre', 'Cantidad'],
        ['Friaje',     54],
        ['Helada',      406],
        ['Huaico',  557],
        ['Inundación', 385],
        ['Sequia',    54],
        ['Sismo',    46]
    ]);

    var options = {
        title: 'Año 2017',
        pieHole: 0.5,
        legend: {position: 'bottom'}
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}