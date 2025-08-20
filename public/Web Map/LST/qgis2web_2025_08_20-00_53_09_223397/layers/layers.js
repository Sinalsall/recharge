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
var format_rastertopolygon_lst_1 = new ol.format.GeoJSON();
var features_rastertopolygon_lst_1 = format_rastertopolygon_lst_1.readFeatures(json_rastertopolygon_lst_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rastertopolygon_lst_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rastertopolygon_lst_1.addFeatures(features_rastertopolygon_lst_1);
var lyr_rastertopolygon_lst_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rastertopolygon_lst_1, 
                style: style_rastertopolygon_lst_1,
                popuplayertitle: 'rastertopolygon_lst',
                interactive: true,
    title: 'rastertopolygon_lst<br />\
    <img src="styles/legend/rastertopolygon_lst_1_0.png" /> 1<br />\
    <img src="styles/legend/rastertopolygon_lst_1_1.png" /> 2<br />\
    <img src="styles/legend/rastertopolygon_lst_1_2.png" /> 3<br />\
    <img src="styles/legend/rastertopolygon_lst_1_3.png" /> 4<br />\
    <img src="styles/legend/rastertopolygon_lst_1_4.png" /> 5<br />\
    <img src="styles/legend/rastertopolygon_lst_1_5.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_rastertopolygon_lst_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_rastertopolygon_lst_1];
lyr_rastertopolygon_lst_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_rastertopolygon_lst_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rastertopolygon_lst_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_rastertopolygon_lst_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});