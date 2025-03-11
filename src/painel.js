// formulario - validações dos cadastro
let areaCachorro = document.getElementById('area-cachorro')
let abaPrincipal = document.querySelector('main.aba-principal')
var body = document.getElementsByTagName('body')[0]
// body.style.backgroundImage = "url('../imagens/ossinho2.jpg')"


areaCachorro.addEventListener('click',() =>{
    
    mudarFundo(abaPrincipal)
    
})
function mudarFundo(fundo){
    const reader = new FileReader()
    
    reader.readAsDataURL(ossinho.jpg)
    
    reader.onload = function(evento){
        const urlmage = evento.target.result

        abaPrincipal.style.backgroundImage = `url('${urlmage}')`
        alert()

    }
}