const palavrasDeSubstituicao = {
  a:  "ai",
  e:  "enter",
  i:  "imes",
  o:  "ober",
  u:  "ufat",
};

const btnCriptografar = document.querySelector('.btnCriptografar');
const btnDescriptografar = document.querySelector('.btnDescriptografar');
const btnCopiarTexto = document.querySelector('.btnCopiarTexto');
const tituloCopiarTexto = document.querySelector('.tituloMensagem');
const paragrafoMensagem = document.querySelector('.paragrafoMensagem');
const paragrafoResultado = document.querySelector('#texto');

function textoCriptografado(texto) {
  let textoOriginal = document.querySelector('#texto').value;

  if (textoOriginal.length == " ") {
    alert('Por favor, encira um texto valido.');
  } else {
      for (let i = 0; i < texto.length; i++) {
      const letra = texto[i].toLowerCase();
      if (palavrasDeSubstituicao.hasOwnProperty(letra)) {
          textoOriginal += palavrasDeSubstituicao[letra];
      } else {
        textoOriginal += letra;
      }
    }
    return textoOriginal;
  }
  
};
btnCriptografar.addEventListener('click', () => {

  textoCriptografado(texto);
  mostrarTexto();
  
  btnDescriptografar.removeAttribute("disabled");
  btnCopiarTexto.style.display = 'block';

});

function mostrarTexto(){
  let textoOriginal = document.querySelector('#texto').value;
  let novoTexto = document.querySelector('.paragrafoResultado');
  let mensagemCriptografada = textoCriptografado(textoOriginal);
  
  novoTexto.style.display = "block";
  novoTexto.textContent = mensagemCriptografada;
  tituloCopiarTexto.style.display = 'none';
  btnCopiarTexto.style.display = 'none ';
  
  let limparInput = document.querySelector('#texto').value = "";
};

function textoDescriptografado(texto) {
  let novoTexto = document.querySelector('.paragrafoResultado').value;

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (palavrasDeSubstituicao.hasOwnProperty(letra)) {
      novoTexto -= palavrasDeSubstituicao[letra];
    } else {
      novoTexto -= letra;
    }
  }
  return novoTexto;
};

function mostrarTextoDescriptografado(){
  let novoTexto = document.querySelector('.paragrafoResultado');
  let mensagemCriptografada = textoCriptografado(novoTexto);
  
  novoTexto.style.display = "block";
  novoTexto.textContent = mensagemCriptografada;
  tituloCopiarTexto.style.display = 'block';
};

btnDescriptografar.addEventListener('click', ()=> {
  textoDescriptografado(texto);
  mostrarTextoDescriptografado();
  btnCopiarTexto.style.display = 'none ';
});

btnCopiarTexto.addEventListener("click", async (e)=> {
  let textoOriginal = document.querySelector('#texto').value;
  let mensagemCriptografada = textoCriptografado(textoOriginal);

  try {
    await navigator.clipboard.writeText(mensagemCriptografada);
    alert('Texto copiado com sucesso !');
  } catch (e) {
    alert("Erro ao tentar copiar");
  };
});
