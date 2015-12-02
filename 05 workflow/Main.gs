// Definimos variables globales 
var COLUMNA_ESTADO = 2;
var NOMBRE_ESTADO = 'NOTIFICADO';
var ASUNTO_CORREO_ADMIN = 'Alguien te ha contactado';
var ASUNTO_CORREO_CONTACTO = 'Gracias por contactarnos';


function alEnviarForm ( e ) {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets();
  var hojaRespuestas = sheet[0];
  
  var datos = getRowsData( hojaRespuestas );
  
  for ( var d = 0; d < datos.length; d++ ){
    var row = datos[d];
    row.rowNumber = d + 2;
    
    if ( row.estado != NOMBRE_ESTADO) {
      enviarCorreoAdmin ( row );
      envarCorreoContacto ( row );
      hojaRespuestas.getRange(row.rowNumber, COLUMNA_ESTADO ).setValue( NOMBRE_ESTADO );
    };
  };
};