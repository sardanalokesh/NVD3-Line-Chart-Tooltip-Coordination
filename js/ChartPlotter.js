define(["d3", "nvd3"], function(d3, nvd3) {

    function LineChartPlotter(total) {
        this.total = total;
        this.lineCharts = [];
    }

    LineChartPlotter.prototype.add = function(svg, lineChart) {
        var self = this;
        drawChart(svg, lineChart.series, function(chart) {
            lineChart.chart = chart;
            self.lineCharts.push(lineChart);
            if (self.lineCharts.length >= self.total) {
                for (var i in self.lineCharts) {
                    var all = self.lineCharts.slice();
                    var main = all.splice(i, 1)[0];
                    var siblings = all;
                    bindSiblings(main, siblings);
                }
            }
        });
    };

    function drawChart(svg, series, callback) {
        nv.addGraph(function() {
            var chart = nv.models.lineChart()
                .margin({top: 50, right: 80, bottom: 50, left: 80})
                .options({
                    duration: 300,
                    useInteractiveGuideline: true,
                    focusEnable: false,
                    color: series.color
                    //showXAxis: false
                });

            chart.xAxis
                .axisLabel('Date')
                .tickFormat(function(d) {
                    return d3.time.format('%b %d')(new Date(d));
                })
                .showMaxMin(false);

            var numberFormat = d3.format('.4s');
            chart.yAxis
                .tickFormat(numberFormat);

            d3.select(svg)
                .datum([getSeriesData(series)])
                .call(chart);

            return chart;
        }, callback);
    }

    function bindSiblings(lineChart, siblings) {
        lineChart.chart.interactiveLayer.tooltip.options({
            contentGenerator: function(d) {
                var numberFormat = d3.format('.4s');
                var charts = [lineChart].concat(siblings);
                var table = "<table>";
                table += "<tr><td style='font-weight: bold;' colspan='3'>" + d.value + "</td></tr>";
                for (var c in charts) {
                    row = "<tr>"
                        + "<td><div class='circle' style='background:" + charts[c].series.color() + "'></div></td>"
                        + "<td>" + charts[c].series.name + "</td>"
                        + "<td>" + numberFormat(charts[c].series.data[d.index][1]) + "</td>";
                    if (d.index > 0) {
                        var delta = charts[c].series.data[d.index][1] - charts[c].series.data[d.index - 1][1];
                        var deltaClass = delta > 0 ? "increase" : "decrease";
                        row += "<td class='" + deltaClass + "'>(" + numberFormat(Math.abs(delta)) + ")</td>"
                    }
                    row += "</tr>";
                    table += row;
                }
                table += "</table>";
                return table;
            }
        });

        if (siblings.length > 0) {
            lineChart.chart.interactiveLayer.dispatch.on("elementMousemove.coordinate", function(d, isPseudo) {
                if (!isPseudo) {
                    for (var s in siblings) {
                        siblings[s].chart.tooltip.hidden(true);
                        //workaround for nvd3 multiple charts tooltip bug
                        siblings[s].chart.interactiveLayer.tooltip.hidden(true);
                        siblings[s].chart.interactiveLayer.dispatch.elementMousemove(d, true);
                    }
                }
            });
        }
    }

    function getSeriesData(series) {
        return {
            key: series.name,
            values: series.data.map(function(d) {
                return {
                    x: new Date(d[0]),
                    y: parseInt(d[1])
                };
            })
        };
    }

    return LineChartPlotter;
});