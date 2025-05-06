 // JavaScript para deshabilitar el envío del formulario si hay campos no válidos
 (function() {
  'use strict';
  window.addEventListener('load', function() {
      // Obtiene todos los formularios a los que queremos aplicar estilos de validación de Bootstrap
      var forms = document.getElementsByClassName('needs-validation');
      // Pasa por todos ellos y evita el envío si no son válidos
      var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              } else {
                  // Si el formulario es válido, redirige a INDEX.HTML
                  event.preventDefault();  // Previene el envío por defecto del formulario
                  window.location.href = 'INDEX.HTML';
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();

  function showTicketInfo() {
    var selectedTicket = document.getElementById("ticketType").value;
    var ticketInfoElements = document.querySelectorAll("#ticketInfo .pricing-card");

    // Ocultar todos los elementos de información de entrada
    ticketInfoElements.forEach(function(element) {
        element.style.display = "none";
    });

    // Mostrar solo el elemento correspondiente al tipo seleccionado
    if (selectedTicket) {
        var selectedElement = document.getElementById(selectedTicket);
        if (selectedElement) {
            selectedElement.style.display = "block";
        }
    }
}



