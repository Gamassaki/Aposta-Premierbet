function apostar(){
    let valorAposta = parseInt(document.getElementById("valor-aposta").value)
    let numero = parseInt(document.getElementById("numero").value)
    let numero1 = parseInt(document.getElementById("numero1").value)
    let numero2 = parseInt(document.getElementById("numero2").value)
    let numero3 = parseInt(document.getElementById("numero3").value)

    let numeros = [numero, numero1, numero2, numero3]
    let numerosAletorios = []

    for (let n= 0; n < 4; n++) {
        let numero = Math.ceil(Math.random()*9)
        let verificar = numerosAletorios.every(valor => {
            return valor != numero
         })

        if(verificar) numerosAletorios.push(numero)
        else n--
    }
    let cont = 0
    numerosAletorios.forEach(element => {
        if(numero == element)cont++
        if(numero1 == element && numero != numero1) cont++
        if(numero2 == element && numero != numero2 && numero2 != numero1) cont++
        if(numero3 == element && numero != numero3 && numero1 != numero3 && numero2 != numero3) cont++
        
        return cont
    });
    let valorGanho = 0
    if(cont == 1) valorGanho = valorAposta
    if(cont == 2) valorGanho = valorAposta*2
    if(cont == 3) valorGanho = valorAposta*4
    if(cont == 4) valorGanho = valorAposta*10
    
    resutadoDaAposta(valorAposta, numeros, numerosAletorios, valorGanho)
}

function resutadoDaAposta(valorAposta, numeros, numerosAletorios, valorGanho){
    let id = document.getElementById("id")
    let nome = document.getElementById("nome")
    let data = document.getElementById("data")
    let morada = document.getElementById("morada")

    if( id.value.length > 0 && nome.value.length > 3 &&
        data.value.length > 4 && morada.value.length > 3 &&
        !isNaN(valorAposta)){
           if( numeros.every(x=>{
                return !isNaN(x)
            })) {
                document.getElementById("saidaId").innerHTML = id.value
                document.getElementById("saidaNome").innerHTML = nome.value
                document.getElementById("saidaNumeroAposta").innerHTML = numeros
                document.getElementById("saidaNumeroAleatorio").innerHTML = numerosAletorios
                document.getElementById("saidaDataNascimento").innerHTML = data.value
                document.getElementById("saidaMorada").innerHTML = morada.value
                document.getElementById("saidaQuantiaApostar").innerHTML = valorAposta
                document.getElementById("saidaQuantiaGanhar").innerHTML = valorGanho
                mostrarResultado()
            }

            else alert("Todos Campos Devem Ser Preenchidos")
        }
    else alert("Todos Campos Devem Ser Preenchidos")
}
let jogando = document.getElementById("jogando")
let resultado = document.getElementById("resulado")
function mostrarResultado(){
    if(resultado.style.display == "none"){
        jogando.style.display = "none"
        resultado.style.display = "block"
    }
    else{
        resultado.style.display = "none"
        jogando.style.display = "block"
    }

}