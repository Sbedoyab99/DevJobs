document.addEventListener('DOMContentLoaded', () => {
  skillsSeleccionados()
})

const skills = document.querySelectorAll('.skill')
const skillsSet = new Set()
const skillsCampo = document.querySelector('#skills')

skills.forEach(skill => {
  skill.addEventListener('click', agregarSkills)
})

function agregarSkills (e) {
  if (e.target.classList.contains('activo')) {
    skillsSet.delete(e.target.textContent)
    e.target.classList.remove('activo')
  } else {
    skillsSet.add(e.target.textContent)
    e.target.classList.add('activo')
  }
  const skillsArray = [...skillsSet]
  skillsCampo.value = skillsArray
}

function skillsSeleccionados () {
  const seleccionadas = Array.from(document.querySelectorAll('.activo'))
  seleccionadas.forEach(seleccionada => {
    skillsSet.add(seleccionada.textContent)
  })
  const skillsArray = [...skillsSet]
  skillsCampo.value = skillsArray
}
