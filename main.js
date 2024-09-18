// CAPTURANDO DATOS DESDE EL FORM

function validar() {
  var fechaDeVenta = document.getElementById("fecha-venta").value;
  var nombreTitular = document.getElementById("nombre-titular").value;
  var estadoSolicitud = document.getElementById("estado-solicitud").value;
  var nLineaT = document.getElementById("n-linea-tt").value;
  var lineasLigadas = document.getElementById("lineas-ligadas").value;
  var gestionSim = document.getElementById("gestion-sim").value;
  var formLoad = document.getElementById("form-load").value;
  var logistica = document.getElementById("logistica").value;

  // Validaciones secuenciales
  if (nombreTitular === "") {
    alert("El nombre del titular es obligatorio");
    document.getElementById("nombre-titular").focus();
    return;
  } else if (estadoSolicitud === "") {
    alert("El estado de solicitud es obligatorio");
    document.getElementById("estado-solicitud").focus();
    return;
  } else if (nLineaT === "") {
    alert("El n° de línea del titular es obligatorio");
    document.getElementById("n-linea-tt").focus();
    return;
  } else if (gestionSim === "") {
    alert("El estado de gestión de SIM es obligatorio");
    document.getElementById("gestion-sim").focus();
    return;
  }

  // Obtener el contenedor donde se agregarán las tarjetas
  var container = document.getElementById('client-card-container');

  // Clonar la plantilla del cliente
  var template = document.getElementById('cliente-template');
  if (!template) {
    console.error("No se encontró la plantilla de cliente.");
    return;
  }

  var newCard = template.cloneNode(true);
  newCard.style.display = '';  // Mostrar la nueva tarjeta
  newCard.id = ''; // Elimina el ID para evitar duplicados

  // Actualizar el contenido de la nueva tarjeta con los datos del cliente
  var fechaLabel = newCard.querySelector('#fecha-label');
  var nameLabel = newCard.querySelector('#name-label');
  var stateLabel = newCard.querySelector('#state-label');
  var nLineaLabel = newCard.querySelector('#n-linea-label');
  var lineasLigadasLabel = newCard.querySelector('#lineas-ligadas-label');
  var gestionSimLabel = newCard.querySelector('#gestion-sim-label');
  var formLoadLabel = newCard.querySelector('#form-load-label');
  var logisticaLabel = newCard.querySelector('#logistica-label');
  var titleElement = newCard.querySelector('#card-title');
  var titleComent = newCard.querySelector('#title-coment');

  // Verificar que los elementos existen
  if (!fechaLabel || !nameLabel || !stateLabel || !nLineaLabel || !lineasLigadasLabel || !gestionSimLabel || !formLoadLabel || !logisticaLabel || !titleElement || !titleComent) {
    console.error("Faltan elementos en la tarjeta clonada.");
    return;
  }

  fechaLabel.innerText = fechaDeVenta;
  nameLabel.innerText = nombreTitular;
  stateLabel.innerText = estadoSolicitud;
  nLineaLabel.innerText = nLineaT;
  lineasLigadasLabel.innerText = lineasLigadas;
  gestionSimLabel.innerText = gestionSim;
  formLoadLabel.innerText = formLoad;
  logisticaLabel.innerText = logistica;

  // Actualizar el título con n-linea-tt y estado de solicitud
  titleElement.innerText = `${nLineaT} - ${estadoSolicitud}`;
  titleComent.innerText = "Realizar Acción";

  // Limpiar las clases anteriores
  titleElement.classList.remove('client__title--green', 'client__title--yellow', 'client__title--gray', 'client__title--orange');

  // Condicionales para cambiar el color del título según las combinaciones
  if (gestionSim === "Sin PIN / Sin CHIP") {
    titleElement.classList.add('client__title--gray');
  } else if (gestionSim === "Sin PIN / Con CHIP") {
    titleElement.classList.add('client__title--orange');
  } else if (gestionSim === "Con PIN / Sin CHIP")
  
      { }

  // Añadir la nueva tarjeta al contenedor
  container.appendChild(newCard);

  // Limpiar los campos del formulario
  document.getElementById("fecha-venta").value = "";
  document.getElementById("nombre-titular").value = "";
  document.getElementById("estado-solicitud").value = "";
  document.getElementById("n-linea-tt").value = "";
  document.getElementById("lineas-ligadas").value = "";
  document.getElementById("gestion-sim").value = "";
  document.getElementById("form-load").value = "";
  document.getElementById("logistica").value = "";

  // Focalizar nuevamente el primer campo del formulario
  document.getElementById("nombre-titular").focus();
}
