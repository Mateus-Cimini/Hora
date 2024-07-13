function carregar() {

var msg = window.document.getElementById("msg");
var img = window.document.getElementById("imagem");
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora  sao ${hora}:00`

if (hora >= 6 && hora < 12) {
    img.src = 'img/manha.jpg'
    document.body.style.background = 'rgb(255, 172, 64)'

} else if (hora >= 12 && hora <= 17) {
    img.src = 'img/tarde.jpg'
    document.body.style.background = 'rgb(207, 110, 80)'
    
 } else {
    img.src = 'img/noite.jpg'
    document.body.style.background = 'rgb(12, 9, 58)'
    

 }
    
}