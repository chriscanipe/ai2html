var doc = app.activeDocument;

var pathComponents = doc.fullName.toString().split('/');
var slug = pathComponents.pop().split('.')[0];
var exportPath = pathComponents.join('/') + '/' + slug + '/fallbacks/' + slug;

var fallbackURL = new File( exportPath + '-fallback' );
var appleURL = new File( exportPath + '-apple' );

var exportOptions = new ExportOptionsPNG24();
exportOptions.horizontalScale = 300;
exportOptions.verticalScale = 300;
exportOptions.artBoardClipping = true;
exportOptions.transparency = false;
var type = ExportType.PNG24;

$.writeln (fallbackURL,appleURL)

var artboards = doc.artboards;

var process = function(ab,file) {

    var original = ab.artboardRect;

     var newRect = [
        original[0]-20,
        original[1],
        original[2]+20,
        original[3]
    ]
    
    ab.artboardRect = newRect
    doc.exportFile( file, type, exportOptions );
    ab.artboardRect = original
}

for (var i=0; i<artboards.length; i++) {
    var abname = artboards[i].name
    
    if ( abname === 'tablet:375' ) {
        artboards.setActiveArtboardIndex(i)
        process(artboards[i],fallbackURL)
        
    }
    if ( abname === 'mobile-large:336' ) {
        artboards.setActiveArtboardIndex(i)
        process(artboards[i],appleURL)
    }
}