
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

var mapData = [
  { "id": "IN", "name": "India 2nd Office ", "value": 9, "color": chart.colors.getIndex(0),},
  { "id": "RU", "name": "Russia", "value": 13, "color": chart.colors.getIndex(2) },
  { "id": "CN", "name": "China", "value": 16, "color": chart.colors.getIndex(2) },
  { "id": "PK", "name": "Pakistan", "value": 1, "color": chart.colors.getIndex(3) },
  { "id": "AU", "name": "Australia", "value": 2, "color": chart.colors.getIndex(1) },
  { "id": "BE", "name": "Belgium", "value": 1, "color": chart.colors.getIndex(1) },
  { "id": "BY", "name": "Belarus", "value": 1, "color": chart.colors.getIndex(0) },
  { "id": "BD", "name": "Bangladesh", "value": 2, "color": chart.colors.getIndex(0) },
  { "id": "CL", "name": "Chile", "value": 1, "color": chart.colors.getIndex(1) },
  { "id": "CA", "name": "Cannada", "value": 1, "color": chart.colors.getIndex(1) },
  { "id": "PH", "name": "Philippines", "value": 3, "color": chart.colors.getIndex(2) },
  { "id": "TW", "name": "Taiwan", "value": 13, "color": chart.colors.getIndex(3) },
  { "id": "HK", "name": "Hong Kong", "value": 3, "color": chart.colors.getIndex(2) },
  { "id": "MY", "name": "Malaysia", "value": 3, "color": chart.colors.getIndex(3) },
  { "id": "SG", "name": "Singapore", "value": 1, "color": chart.colors.getIndex(0) },
  { "id": "ID", "name": "Indonesia", "value": 0, "color": chart.colors.getIndex(0) },
  { "id": "ZA", "name": "South Africa", "value": 6, "color": chart.colors.getIndex(2) },
  { "id": "FR", "name": "France", "value": 2, "color": chart.colors.getIndex(4) },
  { "id": "UY", "name": "Uruguay", "value": 1, "color": chart.colors.getIndex(4) },
  { "id": "PY", "name": "Parauay", "value": 2, "color": chart.colors.getIndex(4) },
  { "id": "AR", "name": "Argentina", "value": 11, "color": chart.colors.getIndex(4) },
  { "id": "MX", "name": "Mexico", "value": 4, "color": chart.colors.getIndex(4) },
  { "id": "UK", "name": "UK", "value": 2, "color": chart.colors.getIndex(4) },
  { "id": "IS", "name": "Ireland", "value": 3, "color": chart.colors.getIndex(3) },
  { "id": "IR", "name": "Iran", "value": 10, "color": chart.colors.getIndex(3) },
  { "id": "TQ", "name": "Iraq", "value": 1, "color": chart.colors.getIndex(3) },
  { "id": "JO", "name": "Jorden", "value": 4, "color": chart.colors.getIndex(3) },
  { "id": "OM", "name": "Oman", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "SA", "name": "Saudi Arebia", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "SY", "name": "Syria", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "TR", "name": "Turkey", "value": 5, "color": chart.colors.getIndex(3) },
  { "id": "YE", "name": "Yemen", "value": 1, "color": chart.colors.getIndex(3) },
  { "id": "EG", "name": "Egypt", "value": 11, "color": chart.colors.getIndex(3) },
  { "id": "DE", "name": "Germany", "value": 19, "color": chart.colors.getIndex(3) },
  { "id": "PL", "name": "Poland", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "AT", "name": "Austria", "value": 1, "color": chart.colors.getIndex(3) },
  { "id": "TN", "name": "Tunisia", "value": 3, "color": chart.colors.getIndex(3) },
  { "id": "VN", "name": "Vietnam", "value": 20, "color": chart.colors.getIndex(3) },
  { "id": "JP", "name": "Japan", "value": 50, "color": chart.colors.getIndex(3) },
  { "id": "TN", "name": "Dubai", "value": 5, "color": chart.colors.getIndex(3) },
  { "id": "TH", "name": "Thailand", "value": 4, "color": chart.colors.getIndex(3) },
  { "id": "NL", "name": "Netherlands", "value": 3, "color": chart.colors.getIndex(3) },
  { "id": "ES", "name": "Spain", "value": 5, "color": chart.colors.getIndex(3) },
  { "id": "GR", "name": "Greece", "value": 4, "color": chart.colors.getIndex(3) },
  { "id": "CH", "name": "Switzerland", "value": 9, "color": chart.colors.getIndex(3) },
  { "id": "CY", "name": "Cyprus", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "GT", "name": "Guatemala", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "KR", "name": "South Korea HeadQuarter", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "SI", "name": "Slovenia", "value": 2, "color": chart.colors.getIndex(3) },
  { "id": "USA", "name": "USA", "value": 2, "color": chart.colors.getIndex(3) },

];


// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
polygonSeries.nonScalingStroke = true;
polygonSeries.strokeWidth = 0.1;
polygonSeries.calculateVisualCenter = true;

polygonSeries.events.on("validated", function(){
  imageSeries.invalidate();
})


var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.data = mapData;
imageSeries.dataFields.value = "value";

var imageTemplate = imageSeries.mapImages.template;
imageTemplate.nonScaling = true

imageTemplate.adapter.add("latitude", function(latitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLatitude;
   }
   return latitude;
})

imageTemplate.adapter.add("longitude", function(longitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLongitude;
   }
   return longitude;
})

var circle = imageTemplate.createChild(am4core.Circle);
circle.fillOpacity = 0.4;
circle.propertyFields.fill = "color";
circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries.heatRules.push({
  "target": circle,
  "property": "radius",
  "min": 4,
  "max": 7,
  "dataField": "value"
})

var label = imageTemplate.createChild(am4core.Label);
label.text = ""
label.horizontalCenter = "middle";
label.padding(0,0,0,0);
label.adapter.add("dy", function(dy, target){
  var circle = target.parent.children.getIndex(0);
  return circle.pixelRadius;
})
