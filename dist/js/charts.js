const chart1 = am4core.create("chartShare1", am4charts.PieChart);
const chart2 = am4core.create("chartSex", am4charts.PieChart);
const chart3 = am4core.create("chartAge", am4charts.PieChart);
const chart4 = am4core.create("chartPlace", am4charts.PieChart);
const chart5 = am4core.create("chartTime", am4charts.XYChart);
const chart6 = am4core.create("chartPrice", am4charts.XYChart);

$(function () {
    function am4themes_myTheme(target) {
        if (target instanceof am4core.ColorSet) {
            target.list = [
                am4core.color("#493F7B"),
                am4core.color("rgba(73, 63, 123, 0.85)"),
                am4core.color("rgba(73, 63, 123, 0.7)"),
                am4core.color("rgba(73, 63, 123, 0.55)"),
                am4core.color("rgba(73, 63, 123, 0.4)"),
                am4core.color("rgba(73, 63, 123, 0.25)"),
                am4core.color("rgba(73, 63, 123, 0.1)")
            ];
        }
    }

    am4core.useTheme(am4themes_myTheme);

    chart1.innerRadius = am4core.percent(53);

    let pieSeries = chart1.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "radio";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";

    let slice = pieSeries.slices.template;
    slice.states.getKey("hover").properties.scale = 1.2;
    slice.states.getKey("active").properties.scale = 1.2;

    chart1.legend = new am4charts.Legend();
    chart1.legend.position = "right";
    chart1.legend.valign = "top";
    let marker = chart1.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(8, 8, 8, 8);
    marker.valign = "middle";
    marker.width = 8;
    marker.height = 8;

    chart1.legend.itemContainers.template.togglable = false;
    chart1.legend.itemContainers.template.events.on("hit", function(ev) {
        let slice = ev.target.dataItem.dataContext.slice;
        pieSeries.slices.each(function(item) {
            let shadow;
            if (item != slice) {
                item.isActive = false;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = 'transparent';
            }
            else {
                slice.isActive = !slice.isActive;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = '#493F7B';
                shadow.blur = 10;
            }
        });
    });

    chart1.paddingBottom = 50;

});


$(function () {
    function am4themes_myTheme(target) {
        if (target instanceof am4core.ColorSet) {
            target.list = [
                am4core.color("#493F7B"),
                am4core.color("rgba(73, 63, 123, 0.85)")
            ];
        }
    }

    am4core.useTheme(am4themes_myTheme);

    chart2.valign = "middle";

    chart2.innerRadius = am4core.percent(53);

    let pieSeries = chart2.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "radio";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";

    let slice = pieSeries.slices.template;
    slice.states.getKey("hover").properties.scale = 1.2;
    slice.states.getKey("active").properties.scale = 1.2;

    chart2.legend = new am4charts.Legend();
    chart2.legend.position = "bottom";
    chart2.legend.valign = "top";
    chart2.legend.display = 'flex';
    chart2.legend.flexDirection = 'column';
    let marker = chart2.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(8, 8, 8, 8);
    marker.valign = "middle";
    marker.width = 8;
    marker.height = 8;

    chart2.legend.itemContainers.template.togglable = false;
    chart2.legend.itemContainers.template.events.on("hit", function(ev) {
        let slice = ev.target.dataItem.dataContext.slice;
        pieSeries.slices.each(function(item) {
            let shadow;
            if (item != slice) {
                item.isActive = false;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = 'transparent';
            }
            else {
                slice.isActive = !slice.isActive;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = '#493F7B';
                shadow.blur = 10;
            }
        });
    });

    chart2.paddingBottom = 20;
});


$(function () {
    function am4themes_myTheme(target) {
        if (target instanceof am4core.ColorSet) {
            target.list = [
                am4core.color("#B04B79"),
                am4core.color("#DC669B"),
                am4core.color("rgba(220, 102, 155, 0.9)"),
                am4core.color("rgba(220, 102, 155, 0.8)"),
                am4core.color("rgba(220, 102, 155, 0.7)"),
                am4core.color("rgba(220, 102, 155, 0.6)"),
                am4core.color("rgba(220, 102, 155, 0.5)"),
                am4core.color("rgba(220, 102, 155, 0.4)"),
                am4core.color("rgba(220, 102, 155, 0.3)"),
                am4core.color("rgba(220, 102, 155, 0.2)")
            ];
        }
    }

    am4core.useTheme(am4themes_myTheme);

    chart3.innerRadius = am4core.percent(53);

    let pieSeries = chart3.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "radio";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";

    let slice = pieSeries.slices.template;
    slice.states.getKey("hover").properties.scale = 1.2;
    slice.states.getKey("active").properties.scale = 1.2;

    chart3.legend = new am4charts.Legend();
    chart3.legend.position = "bottom";
    chart3.legend.valign = "top";
    chart3.legend.display = 'flex';
    chart3.legend.flexDirection = 'column';
    let marker = chart3.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(8, 8, 8, 8);
    marker.valign = "middle";
    marker.width = 8;
    marker.height = 8;

    chart3.legend.itemContainers.template.togglable = false;
    chart3.legend.itemContainers.template.events.on("hit", function(ev) {
        let slice = ev.target.dataItem.dataContext.slice;
        pieSeries.slices.each(function(item) {
            let shadow;
            if (item != slice) {
                item.isActive = false;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = 'transparent';
            }
            else {
                slice.isActive = !slice.isActive;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = '#B04B79';
                shadow.blur = 10;
            }
        });
    });

    chart3.paddingBottom = 20;
});


$(function () {
    function am4themes_myTheme(target) {
        if (target instanceof am4core.ColorSet) {
            target.list = [
                am4core.color("#FF9458"),
                am4core.color("rgba(255, 148, 88, 0.85)"),
                am4core.color("rgba(255, 148, 88, 0.7)"),
                am4core.color("rgba(255, 148, 88, 0.55)"),
                am4core.color("rgba(255, 148, 88, 0.4)"),
                am4core.color("rgba(255, 148, 88, 0.25)")
            ];
        }
    }

    am4core.useTheme(am4themes_myTheme);

    chart4.innerRadius = am4core.percent(53);

    let pieSeries = chart4.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "radio";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";

    let slice = pieSeries.slices.template;
    slice.states.getKey("hover").properties.scale = 1.2;
    slice.states.getKey("active").properties.scale = 1.2;

    chart4.legend = new am4charts.Legend();
    chart4.legend.position = "bottom";
    chart4.legend.valign = "top";
    chart4.legend.display = 'flex';
    chart4.legend.flexDirection = 'column';
    let marker = chart4.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(8, 8, 8, 8);
    marker.valign = "middle";
    marker.width = 8;
    marker.height = 8;

    chart4.legend.itemContainers.template.togglable = false;
    chart4.legend.itemContainers.template.events.on("hit", function(ev) {
        let slice = ev.target.dataItem.dataContext.slice;
        pieSeries.slices.each(function(item) {
            let shadow;
            if (item != slice) {
                item.isActive = false;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = 'transparent';
            }
            else {
                slice.isActive = !slice.isActive;
                shadow = item.filters.push(new am4core.DropShadowFilter);
                shadow.color = '#FF9458';
                shadow.blur = 10;
            }
        });
    });

    chart4.paddingBottom = 20;
});

$(function () {
    am4core.useTheme(am4themes_animated);

    let categoryAxis = chart5.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "time";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 0;
    categoryAxis.renderer.cellStartLocation = 0.3;
    categoryAxis.renderer.cellEndLocation = 0.7;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 50;

    let valueAxis = chart5.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 20;

    let series = chart5.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "time";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.columns.template.column.fill = '#DC669B';

    let hoverState = series.columns.template.column.states.create("hover");

    series.columns.template.adapter.color = '#493F7B';
    chart5.paddingBottom = 30;
    chart5.cursor = new am4charts.XYCursor();
});

$(function () {
    am4core.useTheme(am4themes_animated);

    chart6.numberFormatter.numberFormat = "#.0";

    let categoryAxis = chart6.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "age";
    categoryAxis.renderer.grid.template.location = 10;
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.labels.template.fontSize = 14;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    chart6.colors.list = [
        am4core.color("#DC669B"),
        am4core.color("#FF9458"),
        am4core.color("#493F7B"),
        am4core.color("#EF5A5A"),
        am4core.color("#6FA8B3"),
        am4core.color("#C452EC"),
    ];

    let valueAxis = chart6.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    function createSeries(field, name) {
        let series = chart6.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "age";
        series.name = name;
        series.columns.template.tooltipText = "[bold]{valueY}[/]";
        series.columns.template.width = am4core.percent(85);
    }

    chart6.paddingBottom = 50;
    chart6.maskBullets = false;

    createSeries("value_1", "", true);
    createSeries("value_2", "", true);
    createSeries("value_3", "", true);
    createSeries("value_4", "", true);
    createSeries("value_5", "", true);
    createSeries("value_6", "", true);
});