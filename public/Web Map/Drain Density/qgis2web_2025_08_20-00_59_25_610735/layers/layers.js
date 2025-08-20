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
var format_DrainDensity_1 = new ol.format.GeoJSON();
var features_DrainDensity_1 = format_DrainDensity_1.readFeatures(json_DrainDensity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainDensity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainDensity_1.addFeatures(features_DrainDensity_1);
var lyr_DrainDensity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainDensity_1, 
                style: style_DrainDensity_1,
                popuplayertitle: 'DrainDensity',
                interactive: true,
    title: 'DrainDensity<br />\
    <img src="styles/legend/DrainDensity_1_0.png" /> 1<br />\
    <img src="styles/legend/DrainDensity_1_1.png" /> 2<br />\
    <img src="styles/legend/DrainDensity_1_2.png" /> 3<br />\
    <img src="styles/legend/DrainDensity_1_3.png" /> 4<br />\
    <img src="styles/legend/DrainDensity_1_4.png" /> 5<br />\
    <img src="styles/legend/DrainDensity_1_5.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_DrainDensity_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DrainDensity_1];
lyr_DrainDensity_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DrainDensity_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DrainDensity_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DrainDensity_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});