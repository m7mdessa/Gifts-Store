//var chartData = @Html.Raw(chartData);

//$(function () {
//    var fc = document.getElementById("filled_line_chart").getContext("2d");
//    var chartConfig = getChartConfig(chartData);
//    new Chart(fc, chartConfig);
//});

//function getChartConfig(data) {
//    return {
//        type: 'line',
//        data: {
//            labels: data.labels,
//            datasets: [
//                {
//                    label: 'Profits',
//                    data: data.profits,
//                    borderColor: '#5CC5CD',
//                    backgroundColor: '#5dbecd',
//                    pointBorderColor: '#128293',
//                    pointBackgroundColor: '#FFFFFF',
//                    pointBorderWidth: 1
//                },
//                {
//                    label: 'Total Prices',
//                    data: data.totalPrices,
//                    borderColor: '#46b6fe',
//                    backgroundColor: '#3866a6',
//                    pointBorderColor: '#5ebcf9',
//                    pointBackgroundColor: '#FFFFFF',
//                    pointBorderWidth: 1
//                },
//                {
//                    label: 'Quantities',
//                    data: data.quantities,
//                    borderColor: '#F39C12',
//                    backgroundColor: '#FFC100',
//                    pointBorderColor: '#E28903',
//                    pointBackgroundColor: '#FFFFFF',
//                    pointBorderWidth: 1
//                },
//                {
//                    label: 'Sales',
//                    data: data.sales,
//                    borderColor: '#9B59B6',
//                    backgroundColor: '#BE90D4',
//                    pointBorderColor: '#6F3183',
//                    pointBackgroundColor: '#FFFFFF',
//                    pointBorderWidth: 1
//                }
//            ]
//        },
//        options: {
//            responsive: true,
//            legend: false
//        }
//    };
//}