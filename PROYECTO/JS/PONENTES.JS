// Aquí se puede agregar JavaScript personalizado para la funcionalidad de búsqueda y filtrado
document.addEventListener('DOMContentLoaded', function () {
    const selectPonente = document.getElementById('selectPonente');
    const ponentes = document.querySelectorAll('.ponente');

    // Función para mostrar u ocultar según el ponente seleccionado
    function mostrarPonente(ponente) {
      ponentes.forEach(item => {
        if (ponente === 'todos' || item.classList.contains(ponente)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    // Evento para cambiar el contenido según el ponente seleccionado
    selectPonente.addEventListener('change', function () {
      const selectedPonente = selectPonente.value;
      mostrarPonente(selectedPonente);
    });

    // Mostrar todos los ponentes al cargar la página
    mostrarPonente('todos');
  });