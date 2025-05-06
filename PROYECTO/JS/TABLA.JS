// Función para mostrar el detalle de la conferencia en el modal
function mostrarDetalleConferencia(ponente, conferencia, hora) {
    // Selecciona el elemento donde se mostrará el detalle y establece el texto con la información recibida
    document.getElementById('detalleConferenciaTexto').innerText = `Ponente: ${ponente}\nConferencia: ${conferencia}\nHora: ${hora}`;
  }
  
  // Espera a que se cargue completamente el contenido HTML antes de ejecutar el script
  document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el elemento del filtro de categorías (select)
    const filtroCategorias = document.getElementById('filtroCategorias');
    // Obtiene todas las filas (tr) de la tabla de conferencias
    const tablaConferencias = document.getElementById('tablaConferencias').getElementsByTagName('tr');
  
    // Añade un evento de escucha al cambio de valor en el filtro de categorías
    filtroCategorias.addEventListener('change', function () {
      // Obtiene el valor seleccionado en minúsculas
      const categoriaSeleccionada = this.value.toLowerCase();
  
      // Recorre todas las filas de la tabla de conferencias
      for (let i = 0; i < tablaConferencias.length; i++) {
        const conferencia = tablaConferencias[i];
        // Obtiene el texto del segundo td (ponente) y lo convierte a minúsculas
        const ponente = conferencia.getElementsByTagName('td')[1].textContent.toLowerCase();
  
        // Verifica si la categoría seleccionada es 'todas' o si el nombre del ponente incluye la categoría seleccionada
        if (categoriaSeleccionada === 'todas' || ponente.includes(categoriaSeleccionada)) {
          // Muestra la fila si cumple con el filtro
          conferencia.style.display = '';
        } else {
          // Oculta la fila si no cumple con el filtro
          conferencia.style.display = 'none';
        }
      }
    });
  });