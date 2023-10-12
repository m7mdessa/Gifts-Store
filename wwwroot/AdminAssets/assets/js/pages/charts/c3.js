$(function() {
    "use strict";
    setTimeout(function(){ 
 
        $(document).ready(function () {
            var chartData = @Html.Raw(ViewBag.ChartData);

            var chart = c3.generate({
                bindto: '#chart-area-spline-sracke', // id of chart wrapper
                data: {
                    columns: [
                        ['Profits'].concat(chartData.profits),
                        ['Total Prices'].concat(chartData.totalPrices),
                        ['Quantities'].concat(chartData.quantities),
                        ['Sales'].concat(chartData.sales)
                    ],
                    type: 'area-spline', // default type of chart
                    groups: [
                        ['Profits', 'Total Prices', 'Quantities', 'Sales']
                    ],
                    colors: {
                        'Profits': Aero.colors["blue"],
                        'Total Prices': Aero.colors["cyan"],
                        'Quantities': Aero.colors["orange"],
                        'Sales': Aero.colors["purple"]
                    },
                    names: {
                        'Profits': 'Profits',
                        'Total Prices': 'Total Prices',
                        'Quantities': 'Quantities',
                        'Sales': 'Sales'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        categories: chartData.labels
                    }
                },
                legend: {
                    show: true
                },
                padding: {
                    bottom: 0,
                    top: 0
                }
            });
        });
        $(document).ready(function () {
            var chart = c3.generate({
                bindto: '#chart-spline-rotated', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 11, 8, 15, 18, 19, 17],
                        ['data2', 7, 7, 5, 7, 9, 12]
                    ],
                    type: 'spline', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                    rotated: true,
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-step', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 11, 8, 15, 18, 19, 17],
                        ['data2', 7, 7, 5, 7, 9, 12]
                    ],
                    type: 'step', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-area-step', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 11, 8, 15, 18, 19, 17],
                        ['data2', 7, 7, 5, 7, 9, 12]
                    ],
                    type: 'area-step', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-bar', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 11, 8, 15, 18, 19, 17],
                        ['data2', 7, 7, 5, 7, 9, 12]
                    ],
                    type: 'bar', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                },
                bar: {
                    width: 16
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-bar-rotated', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 11, 8, 15, 18, 19, 17],
                        ['data2', 7, 7, 5, 7, 9, 12]
                    ],
                    type: 'bar', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                    rotated: true,
                },
                bar: {
                    width: 16
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-bar-stacked', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 11, 8, 15, 18, 19, 17],
                        ['data2', 7, 7, 5, 7, 9, 12]
                    ],
                    type: 'bar', // default type of chart
                    groups: [
                        [ 'data1', 'data2']
                    ],
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                },
                bar: {
                    width: 30,
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-pie', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 63],
                        ['data2', 44],
                        ['data3', 12],
                        ['data4', 14]
                    ],
                    type: 'pie', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue-darker"],
                        'data2': Aero.colors["blue"],
                        'data3': Aero.colors["blue-light"],
                        'data4': Aero.colors["blue-lighter"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'A',
                        'data2': 'B',
                        'data3': 'C',
                        'data4': 'D'
                    }
                },
                axis: {
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-donut', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 63],
                        ['data2', 37]
                    ],
                    type: 'donut', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-scatter', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 11, 8, 15, 18, 19, 17],
                        ['data2', 7, 7, 5, 7, 9, 12]
                    ],
                    type: 'scatter', // default type of chart
                    colors: {
                        'data1': Aero.colors["blue"],
                        'data2': Aero.colors["cyan"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Maximum',
                        'data2': 'Minimum'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
        $(document).ready(function(){
            var chart = c3.generate({
                bindto: '#chart-combination', // id of chart wrapper
                data: {
                    columns: [
                        // each columns data
                        ['data1', 30, 20, 50, 40, 60, 50],
                        ['data2', 200, 130, 90, 240, 130, 220],
                        ['data3', 300, 200, 160, 400, 250, 250],
                        ['data4', 200, 130, 90, 240, 130, 220]
                    ],
                    type: 'bar', // default type of chart
                    types: {
                        'data2': "line",
                        'data3': "spline",
                    },
                    groups: [
                        [ 'data1', 'data4']
                    ],
                    colors: {
                        'data1': Aero.colors["cyan"],
                        'data2': Aero.colors["indigo"],
                        'data3': Aero.colors["green"],
                        'data4': Aero.colors["blue"]
                    },
                    names: {
                        // name of each serie
                        'data1': 'Development',
                        'data2': 'Marketing',
                        'data3': 'Sales',
                        'data4': 'Sales'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        // name of each category
                        categories: ['2013', '2014', '2015', '2016', '2019', '2018']
                    },
                },
                bar: {
                    width: 30,
                },
                legend: {
                    show: true, //hide legend
                },
                padding: {
                    bottom: 0,
                    top: 0
                },
            });
        });
    }, 500);
});