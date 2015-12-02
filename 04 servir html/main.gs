function doGet () {
  return HtmlService.createHtmlOutputFromFile( "index" )
         .setSandboxMode( HtmlService.SandboxMode.IFRAME )
         .setTitle( "Ejemplo HTML5 GAS" );
};