var pieChartCanvas = $("#pieChart1").get(0).getContext("2d");
var pieChart = new Chart(pieChartCanvas);
var PieData = [{
    value: 43,
    color: "#293B5F",
    highlight: "#293B5F",
    label: "Mid sized pharma (43)%"
  },
  {
    value: 25,
    color: "#39A2DB",
    highlight: "#39A2DB",
    label: "Large pharma(25%)"
  },
  {
    value: 20,
    color: "#FAEBE0",
    highlight: "#FAEBE0",
    label: "Biotech(20%)"
  },
  {
    value: 12,
    color: "#E98580",
    highlight: "#E98580",
    label: "Others(12%)"
  }
];


var pieOptions = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke: true,
  //String - The colour of each segment stroke
  segmentStrokeColor: "#fff",
  //Number - The width of each segment stroke
  segmentStrokeWidth: 2,
  //Number - The percentage of the chart that we cut out of the middle
  percentageInnerCutout: 0, // This is 0 for Pie charts
  //Number - Amount of animation steps
  animationSteps: 200,
  //String - Animation easing effect
  animationEasing: "easeOutBounce",
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate: true,
  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale: false,
  //Boolean - whether to make the chart responsive to window resizing
  responsive: true,
  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio: true,

  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

pieChart.Doughnut(PieData, pieOptions);
