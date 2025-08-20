var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_rastertopolygonnn_1 = new ol.format.GeoJSON();
var features_rastertopolygonnn_1 = format_rastertopolygonnn_1.readFeatures(json_rastertopolygonnn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rastertopolygonnn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rastertopolygonnn_1.addFeatures(features_rastertopolygonnn_1);
var lyr_rastertopolygonnn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rastertopolygonnn_1, 
                style: style_rastertopolygonnn_1,
                popuplayertitle: 'rastertopolygonnn',
                interactive: true,
    title: 'rastertopolygonnn<br />\
    <img src="styles/legend/rastertopolygonnn_1_0.png" /> 1<br />\
    <img src="styles/legend/rastertopolygonnn_1_1.png" /> 2<br />\
    <img src="styles/legend/rastertopolygonnn_1_2.png" /> 3<br />\
    <img src="styles/legend/rastertopolygonnn_1_3.png" /> 4<br />\
    <img src="styles/legend/rastertopolygonnn_1_4.png" /> 5<br />\
    <img src="styles/legend/rastertopolygonnn_1_5.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_rastertopolygonnn_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_rastertopolygonnn_1];
lyr_rastertopolygonnn_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_rastertopolygonnn_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_rastertopolygonnn_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_rastertopolygonnn_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});