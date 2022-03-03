var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GRPTourduMorvanboucleBibracteMtBeuvray_1 = new ol.format.GeoJSON();
var features_GRPTourduMorvanboucleBibracteMtBeuvray_1 = format_GRPTourduMorvanboucleBibracteMtBeuvray_1.readFeatures(json_GRPTourduMorvanboucleBibracteMtBeuvray_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRPTourduMorvanboucleBibracteMtBeuvray_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRPTourduMorvanboucleBibracteMtBeuvray_1.addFeatures(features_GRPTourduMorvanboucleBibracteMtBeuvray_1);
var lyr_GRPTourduMorvanboucleBibracteMtBeuvray_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRPTourduMorvanboucleBibracteMtBeuvray_1, 
                style: style_GRPTourduMorvanboucleBibracteMtBeuvray_1,
                interactive: true,
                title: '<img src="styles/legend/GRPTourduMorvanboucleBibracteMtBeuvray_1.png" /> GRP Tour du Morvan - boucle Bibracte Mt Beuvray'
            });
var format_POI_2 = new ol.format.GeoJSON();
var features_POI_2 = format_POI_2.readFeatures(json_POI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_2.addFeatures(features_POI_2);
var lyr_POI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POI_2, 
                style: style_POI_2,
                interactive: true,
                title: 'POI'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GRPTourduMorvanboucleBibracteMtBeuvray_1.setVisible(true);lyr_POI_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GRPTourduMorvanboucleBibracteMtBeuvray_1,lyr_POI_2];
lyr_GRPTourduMorvanboucleBibracteMtBeuvray_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_POI_2.set('fieldAliases', {'Nom': 'Nom', 'cat': 'cat', });
lyr_GRPTourduMorvanboucleBibracteMtBeuvray_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_POI_2.set('fieldImages', {'Nom': 'TextEdit', 'cat': 'TextEdit', });
lyr_GRPTourduMorvanboucleBibracteMtBeuvray_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_POI_2.set('fieldLabels', {'Nom': 'inline label', 'cat': 'no label', });
lyr_POI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});