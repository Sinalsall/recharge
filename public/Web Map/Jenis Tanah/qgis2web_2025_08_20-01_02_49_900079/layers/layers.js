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
var format_jenis_tanah_jakarta_1 = new ol.format.GeoJSON();
var features_jenis_tanah_jakarta_1 = format_jenis_tanah_jakarta_1.readFeatures(json_jenis_tanah_jakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jenis_tanah_jakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jenis_tanah_jakarta_1.addFeatures(features_jenis_tanah_jakarta_1);
var lyr_jenis_tanah_jakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jenis_tanah_jakarta_1, 
                style: style_jenis_tanah_jakarta_1,
                popuplayertitle: 'jenis_tanah_jakarta',
                interactive: true,
    title: 'jenis_tanah_jakarta<br />\
    <img src="styles/legend/jenis_tanah_jakarta_1_0.png" /> Jd<br />\
    <img src="styles/legend/jenis_tanah_jakarta_1_1.png" /> Nd<br />\
    <img src="styles/legend/jenis_tanah_jakarta_1_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_jenis_tanah_jakarta_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_jenis_tanah_jakarta_1];
lyr_jenis_tanah_jakarta_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SNUM': 'SNUM', 'FAOSOIL': 'FAOSOIL', 'DOMSOI': 'DOMSOI', 'PHASE1': 'PHASE1', 'PHASE2': 'PHASE2', 'MISCLU1': 'MISCLU1', 'MISCLU2': 'MISCLU2', 'PERMAFROST': 'PERMAFROST', 'CNTCODE': 'CNTCODE', 'CNTNAME': 'CNTNAME', 'SQKM': 'SQKM', 'COUNTRY': 'COUNTRY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_jenis_tanah_jakarta_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SNUM': 'TextEdit', 'FAOSOIL': 'TextEdit', 'DOMSOI': 'TextEdit', 'PHASE1': 'TextEdit', 'PHASE2': 'TextEdit', 'MISCLU1': 'TextEdit', 'MISCLU2': 'TextEdit', 'PERMAFROST': 'TextEdit', 'CNTCODE': 'TextEdit', 'CNTNAME': 'TextEdit', 'SQKM': 'TextEdit', 'COUNTRY': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_jenis_tanah_jakarta_1.set('fieldLabels', {'OBJECTID': 'no label', 'SNUM': 'no label', 'FAOSOIL': 'no label', 'DOMSOI': 'no label', 'PHASE1': 'no label', 'PHASE2': 'no label', 'MISCLU1': 'no label', 'MISCLU2': 'no label', 'PERMAFROST': 'no label', 'CNTCODE': 'no label', 'CNTNAME': 'no label', 'SQKM': 'no label', 'COUNTRY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_jenis_tanah_jakarta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});