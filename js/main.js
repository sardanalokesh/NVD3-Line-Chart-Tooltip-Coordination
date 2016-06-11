require(["ChartPlotter"], function(ChartPlotter) {
    var data1 = [["2016-05-25", "248100062"],
        ["2016-05-26", "235429104"],
        ["2016-05-27", "198854267"],
        ["2016-05-28", "186075986"],
        ["2016-05-29", "201859101"],
        ["2016-05-30", "221064693"],
        ["2016-05-31", "234223612"]];

    var data2 = [["2016-05-25", "148300062"],
        ["2016-05-26", "335429104"],
        ["2016-05-27", "88854267"],
        ["2016-05-28", "086075986"],
        ["2016-05-29", "501859101"],
        ["2016-05-30", "321064693"],
        ["2016-05-31", "134223612"]];

    var data3 = [["2016-05-25", "348300062"],
        ["2016-05-26", "135429104"],
        ["2016-05-27", "68854267"],
        ["2016-05-28", "386075986"],
        ["2016-05-29", "201859101"],
        ["2016-05-30", "821064693"],
        ["2016-05-31", "534223612"]];

    var data4 = [["2016-05-25", "548100062"],
        ["2016-05-26", "235429104"],
        ["2016-05-27", "798854267"],
        ["2016-05-28", "886075986"],
        ["2016-05-29", "401859101"],
        ["2016-05-30", "621064693"],
        ["2016-05-31", "634223612"]];

    var data5 = [["2016-05-25", "448300062"],
        ["2016-05-26", "335429104"],
        ["2016-05-27", "28854267"],
        ["2016-05-28", "186075986"],
        ["2016-05-29", "601859101"],
        ["2016-05-30", "721064693"],
        ["2016-05-31", "034223612"]];

    var data6 = [["2016-05-25", "848300062"],
        ["2016-05-26", "735429104"],
        ["2016-05-27", "58854267"],
        ["2016-05-28", "486075986"],
        ["2016-05-29", "301859101"],
        ["2016-05-30", "221064693"],
        ["2016-05-31", "134223612"]];

    var lineChart1 = {
        chart: null,
        series: {
            name: "Company A",
            data: data1,
            color: function() {
                return "#FF9900"
            }
        }
    };

    var lineChart2 = {
        chart: null,
        series: {
            name: "Company B",
            data: data2,
            color: function() {
                return "#3366CC"
            }
        }
    };

    var lineChart3 = {
        chart: null,
        series: {
            name: "Company C",
            data: data3,
            color: function() {
                return "#DC3912"
            }
        }
    };

    var lineChart4 = {
        chart: null,
        series: {
            name: "Company D",
            data: data3,
            color: function() {
                return "#109618"
            }
        }
    };

    var lineChart5 = {
        chart: null,
        series: {
            name: "Company E",
            data: data4,
            color: function() {
                return "#990099"
            }
        }
    };

    var lineChart6 = {
        chart: null,
        series: {
            name: "Company F",
            data: data5,
            color: function() {
                return "#0099C6"
            }
        }
    };

    var plotter = new ChartPlotter(3);
    plotter.add("#chartContainer1 svg", lineChart1);
    plotter.add("#chartContainer2 svg", lineChart2);
    plotter.add("#chartContainer3 svg", lineChart3);
    plotter.add("#chartContainer4 svg", lineChart4);
    plotter.add("#chartContainer5 svg", lineChart5);
    plotter.add("#chartContainer6 svg", lineChart6);

});