// - Replica el ejercicio completo del vídeo
// - Añade dos párrafos más en cada una de las secciones
// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".container")
const tacho = document.querySelector(".tacho")

parrafos.forEach(p => {
    p.addEventListener('dragstart', e => {
        //console.log('arrastre: ' + p.innerHTML)
        p.classList.add('dragging')
        e.dataTransfer.setData('id', p.id)
        //console.log(p.id)
        
    })
    p.addEventListener('dragend', ()=>{
        //console.log('deje de arrastrar')
        p.classList.remove('dragging')
    })
})

secciones.forEach(s => {
    s.addEventListener('dragover', e => {
        e.preventDefault()
        //console.log('dragover')
    })
    s.addEventListener('drop', e => {
        //console.log('drop')
        const id_parrafo = e.dataTransfer.getData('id')
        //console.log('id:', id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        s.appendChild(parrafo)
        
    })
})

tacho.addEventListener('dragover', e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
})

tacho.addEventListener('drop', e => {
   const id_parrafo = e.dataTransfer.getData('id')
   document.getElementById(id_parrafo).remove()
})
