const alertas = document.querySelectorAll('.alerta')

if (alertas.length) {
  limpiarAlertas()
}

function limpiarAlertas () {
  setTimeout(() => {
    alertas.forEach(alerta => alerta.remove())
  }, 5000)
}
