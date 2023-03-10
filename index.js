var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var inputOriginal = document.getElementById ('input-original'); 
var cifradores = document.getElementById ('cifradores');
var resultados = document.getElementById ('resultados');
var btncodificar = document.getElementById('codificar');
var btndecodificar = document.getElementById('decodificar');
var radio = document.querySelector('.radio');


opçoes.addEventListener('change', function () {

    if(opçoes.value == 'cifraDeCesar'){
        incremento.style.display = 'block';

    }else if (opçoes.value == 'base64'){
        incremento.style.display = 'none';

    }else {
        alert('Cifra de Cesar ou Base64?')
    }
})

btncodificar.addEventListener("click" , function() {
    submit.style.display = 'block';
    submit.value = 'Codifica!'
})

btndecodificar.addEventListener("click" , function() {
    submit.style.display = 'block';
    submit.value = 'Decodifica!'
})
//    Cesar    //

function codCesar() {
    var elementoDaMensagem = entradaMensagem.value;
    var mensagemMinuscula = elementoDaMensagem.toLowerCase();
    var transformarNumero = (Number(incremento.value) % 26);
    var mensagemCodificada = '';

    for(var i = 0; i < mensagemMinuscula.length; i++){
        for(var j =0; j < alfabeto.length; j++){
            if(mensagemMinuscula[i] == alfabeto[j]){
                mensagemCodificada += alfabeto [j + transformarNumero]
                break;
            } else if (mensagemMinuscula[i] == ' ') {
                mensagemCodificada += ' ';
                break;
            }
        }


    }
    return mensagemCodificada
}


function decCesar() {
    var elementoDaMensagem = entradaMensagem.value;
    var mensagemMinuscula = elementoDaMensagem.toLowerCase()
    var transformarNumero = (Number(incremento.value) % 26)
    var mensagemCodificada = '';

    for(var i = 0; i < mensagemMinuscula.length; i++) {
        for(var j = alfabeto.length - 1; j >= 0; j--){
            if(mensagemMinuscula[i] == alfabeto[j]){
                mensagemCodificada += alfabeto [j - transformarNumero]
                break;
            } else if (mensagemMinuscula[i] == ' ') {
                mensagemCodificada += ' ';
                break;
            }
        }
    }
    return mensagemCodificada
}


//    Base 64    //

function codBase(){
    let mensagem = document.querySelector('#escolhaseucifrador').value
    let codificado = btoa(mensagem)
    return codificado
}

function decBase(){
    let mensagem = document.querySelector('#escolhaseucifrador').value
    let decodificado = atob(mensagem)
    return decodificado
}


submit.addEventListener('click', function(e){
    e.preventDefault();
    if(btncodificar.checked && opçoes.value === "base64"){

        saidaMensagem.innerText = codBase();
    } else if(btndecodificar.checked && opçoes.value === "base64"){

        saidaMensagem.innerText = decBase();
    } else if(btncodificar.checked && opçoes.value === "cifraDeCesar"){

        saidaMensagem.innerText = codCesar()
    } else if(btndecodificar.checked && opçoes.value === "cifraDeCesar"){

        saidaMensagem.innerText = decCesar()
    } else{
        saidaMensagem.innerText = "ERROR ... Digite Novamente"
    }
})
