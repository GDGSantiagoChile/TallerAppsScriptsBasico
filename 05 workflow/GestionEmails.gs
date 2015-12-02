function enviarCorreoAdmin ( row ) {
  var mensaje = '';
  mensaje += "<div> Estimado Admin, el usuario <b>" + row.nombreCompleto + '</b>';
  mensaje += " te ha contactado vía Google Form. Por favor revisar a la brevedad";
  
  var opciones = { noReply: 'true', htmlBody: mensaje };
  
  MailApp.sendEmail( "christiandiegor@gmail.com", ASUNTO_CORREO_ADMIN, "", opciones );
};

function envarCorreoContacto ( row ) {
  var mensaje = '<div>';
  mensaje += 'Hola <b>' + row.nombreCompleto + '</b>';
  mensaje += ' Gracias por contactarte con nosotros, te responderemos a la brevedad. Saludos!';
  mensaje += '</div>';
  
  var opciones = { noReply: 'true', htmlBody: mensaje };
  
  MailApp.sendEmail( row.correo, ASUNTO_CORREO_CONTACTO, "", opciones );
};