// Variaveis

let codificar = document.getElementById("codificar");
let decodificar = document.getElementById("decodificar");
let botao = document.getElementById("botao");
let cesar = document.getElementById("cesar");
let base64 = document.getElementById("base64");
let incrementar = document.getElementById("incrementar");
let resposta = document.getElementById("resultado");
let incremento = parseInt(document.getElementById("incrementacao").value);

//Sumir incremento ao carregar

function carregar() {
  incrementar.style.display = "none";
}

// BTN CODE / ENCODE

function textoBtn() {
  if (decodificar.checked) {
    botao.innerText = "Decodificar";
  } else if (codificar.checked) {
    botao.innerText = "Codificar";
  }
}

//Aparecer/desaparecer incremento

function mostraIncremento() {
  incrementar.style.display = "block";
}

function escondeIncremento() {
  incrementar.style.display = "none";
}

cesar.addEventListener("change", mostraIncremento);
base64.addEventListener("change", escondeIncremento);

botao.addEventListener("click", function (event) {
  event.preventDefault();
  opcaoUsuario();
});

// Code Cesar

function codificarCesar(mensagem) {
  mensagem = mensagem.split("");
  let mensagemAtual = mensagem.map((valor) => valor.charCodeAt());
  let mensagemInclemento = mensagemAtual.map((valor) => valor + incremento);
  let mensagemNova = mensagemInclemento
    .map((valor) => String.fromCharCode(valor))
    .join("");
  return mensagemNova;
}

// Decode Cesar

function decodificarCesar(mensagem) {
  mensagem = mensagem.split("");
  let mensagemAtual = mensagem.map((valor) => valor.charCodeAt());
  let mensagemInclemento = mensagemAtual.map((valor) => valor - incremento);
  let mensagemNova = mensagemInclemento
    .map((valor) => String.fromCharCode(valor))
    .join("");
  return mensagemNova;
}

// Escolha do usuario

function opcaoUsuario() {
  let mensagem = document.getElementById("mensagem").value;
  if (codificar.checked) {
    if (cesar.checked) {
      resposta.innerText = codificarCesar(mensagem);
    } else {
      resposta.innerText = btoa(mensagem);
    }
  } else if (decodificar.checked) {
    if (cesar.checked) {
      resposta.innerText = decodificarCesar(mensagem);
    } else {
      resposta.innerText = atob(mensagem);
    }
  }
}
