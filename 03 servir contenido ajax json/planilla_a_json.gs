// definimos el ID de la planilla que serviremos como 
var SS = "1Shqxub3sfzw3ZQXx6oT6BlHyBxwq_1Ymg00X64mIhis";

// Creamos una clase para definir los atributos de un objeto inventario
function Inventario ( codigo, producto, cantidad, precioCL, precioDolar ) {
  this.codigo = codigo;
  this.producto = producto;
  this.cantidad = cantidad;
  this.precioCL = precioCL;
  this.precioDolar = precioDolar;
};

// definimos una funcion responsable de obtener 
// los datos de la planilla y convertirlos a un arreglo
function cargarPlanilla () {
  var ss = SpreadsheetApp.openById( SS );
  var sheet = ss.getSheetByName( "Listado" );
  var range = sheet.getDataRange();
  var datos = range.getValues();
  
  //var arreglo = new Array();
  var arreglo = [];
  
  for ( var d = 1; d < datos.length; d++ ) {
    var row = datos[d];
    var inventario = new Inventario( row[0], row[1], row[2], row[3], row[4] );
    arreglo.push( inventario );
  };
  
  Logger.log( arreglo );
  return arreglo;
};

// metodo GET de apps script que nos permitirá retornar
// un JSON para ser consumido por AJAX con JQuery, AngularJS, Android, etc.
function doGet () {
  var datos = cargarPlanilla();
  return ContentService.createTextOutput( JSON.stringify( datos ) ).setMimeType( ContentService.MimeType.JSON );
};