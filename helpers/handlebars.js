
const helpers = {
  seleccionarSkills: (seleccionadas = [], opciones) => {
    const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress']
    let html = ''
    skills.forEach(skill => {
      if (seleccionadas.length) {
        html += `<li class="skill ${seleccionadas.includes(skill) ? 'activo' : ''}">${skill}</li>`
      } else {
        html += `<li class="skill">${skill}</li>`
      }
    })
    return html
  },
  tipoContrato: (seleccionado = '', opciones) => {
    const contratos = ['Freelance', 'Termino Indefinido', 'Termino Fijo', 'Prestacion de Servicios']
    let html = ''
    contratos.forEach(contrato => {
      html += `<option value="${contrato}" ${seleccionado === contrato ? 'selected' : ''}>${contrato}</option>`
    })
    return html
  },
  mostrarAlertas: (errores = {}, alertas) => {
    const categoria = Object.keys(errores)
    let html = ''
    if (categoria.length) {
      errores[categoria].forEach(error => {
        html += `
        <div class="${categoria} alerta">
          ${error}
        </div>
        `
      })
    }
    return html
  }
}

export default helpers
