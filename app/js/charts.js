// ...
am4core.ready(function() {

// Themes begin
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4charts.PieChart);


    chart.data = [{
        "country": "Радио РОКС",
        "value": 13.8
    }, {
        "country": "Юмор FM",
        "value": 12.1
    }, {
        "country": "UNISTAR",
        "value": 11.8
    }, {
        "country": "Новое радио",
        "value": 10.7
    }, {
        "country": "Русское Радио Минск",
        "value": 5.5
    }, {
        "country": "Пилот FM",
        "value": 5.5
    }, {
        "country": "Другие",
        "value": 40.6
    }];


// Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "country";

    pieSeries.colors.list = [
        am4core.color("#493F7B"),
        am4core.color("rgba(73, 63, 123, 0.85)"),
        am4core.color("rgba(73, 63, 123, 0.7)"),
        am4core.color("rgba(73, 63, 123, 0.55)"),
        am4core.color("rgba(73, 63, 123, 0.4)"),
        am4core.color("rgba(73, 63, 123, 0.25)"),
        am4core.color("rgba(73, 63, 123, 0.1)"),
    ];

// Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(55);

// Disable ticks and labels
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

// Disable tooltips
    pieSeries.slices.template.tooltipText = "";

    var label = pieSeries.createChild(am4core.Label);
    // label.text = '123';
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 28;
    label.fontWeight = 600;

// this creates initial animation
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.itemContainers.template.togglable = false;
    chart.legend.itemContainers.template.events.on("hit", function(ev) {
        var slice = ev.target.dataItem.dataContext.slice;
        pieSeries.slices.each(function(item) {
            if (item != slice) {
                item.isActive = false;
                label.text = item._dataItem.values.value.percent;
                console.log(item._dataItem.values.value.percent)
            }
            else {
                slice.isActive = !slice.isActive;
            }
        });
    });
});