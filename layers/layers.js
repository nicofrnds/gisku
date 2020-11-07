var wms_layers = [];

var format_Kecamatan_KAB_MAGELANG_0 = new ol.format.GeoJSON();
var features_Kecamatan_KAB_MAGELANG_0 = format_Kecamatan_KAB_MAGELANG_0.readFeatures(json_Kecamatan_KAB_MAGELANG_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_KAB_MAGELANG_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_KAB_MAGELANG_0.addFeatures(features_Kecamatan_KAB_MAGELANG_0);
var lyr_Kecamatan_KAB_MAGELANG_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_KAB_MAGELANG_0, 
                style: style_Kecamatan_KAB_MAGELANG_0,
                interactive: true,
    title: 'Kecamatan_KAB_MAGELANG<br />\
    <img src="styles/legend/Kecamatan_KAB_MAGELANG_0_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Kecamatan_KAB_MAGELANG_0_1.png" /> 1 - 4<br />\
    <img src="styles/legend/Kecamatan_KAB_MAGELANG_0_2.png" /> 4 - 9<br />\
    <img src="styles/legend/Kecamatan_KAB_MAGELANG_0_3.png" /> 9 - 12<br />\
    <img src="styles/legend/Kecamatan_KAB_MAGELANG_0_4.png" /> 12 - 31<br />'
        });

lyr_Kecamatan_KAB_MAGELANG_0.setVisible(true);
var layersList = [lyr_Kecamatan_KAB_MAGELANG_0];
lyr_Kecamatan_KAB_MAGELANG_0.set('fieldAliases', {'fid': 'fid', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'kode_kab': 'kode_kab', 'jml_positif': 'jml_positif', });
lyr_Kecamatan_KAB_MAGELANG_0.set('fieldImages', {'fid': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'kode_kab': 'TextEdit', 'jml_positif': 'Range', });
lyr_Kecamatan_KAB_MAGELANG_0.set('fieldLabels', {'fid': 'inline label', 'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'kode_kab': 'inline label', 'jml_positif': 'inline label', });
lyr_Kecamatan_KAB_MAGELANG_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});