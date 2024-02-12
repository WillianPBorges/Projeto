function toggleMode() {
const html = document.documentElement

html.classList.toggle('light')

// pegar a teg img
const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {

    img.setAttribute("src", "./assets/avatar-light.png")
 } else {

    img.setAttribute("src", "./assets/avatar.png")

 }
//substituir a imagem
//se tiver light mode, adicionar a imagem light
// set tiver sem light mode, manter a imagem normal
}