let titulo = document.getElementById('titleInput');
let mensagem = document.getElementById('messageField');
let adicionar = document.getElementById('bnt');
let container = document.querySelector('.container');
 
let recados = JSON.parse (localStorage.getItem('recados_list')) || [];

for (const recado of recados) {
  let scrapField =  document.createElement('div')
  scrapField.setAttribute('class','d-flex mt-5 flex-wrap justify-content-center w-100');
  scrapField.setAttribute('id','scrapsField');
  let cartaoMensagem = document.createElement('div');
  cartaoMensagem.setAttribute('class',"message-cards card text-white bg-dark m-2 col-3");
  scrapField.appendChild(cartaoMensagem);
  let tituloCartao = document.createElement('div');
  tituloCartao.setAttribute('class','card-header font-weight-bold');  
  tituloCartao.innerHTML= recado[0];
  cartaoMensagem.appendChild(tituloCartao);
  let corpoCartao = document.createElement('div');
  corpoCartao.setAttribute('class','card-body');
  cartaoMensagem.appendChild(corpoCartao);
  let textoCartao =document.createElement('p');
  textoCartao.setAttribute('class','card-text');
  textoCartao.innerHTML = recado[1];
  corpoCartao.appendChild(textoCartao);
  container.appendChild(scrapField);
  
};


adicionar.onclick = function(){
    if(!titulo.value || !mensagem.value) return;
  let scrapField =  document.createElement('div')
  let botao = document.createElement('button')
  scrapField.appendChild(botao)
  botao.innerHTML='Apagar';
  scrapField.setAttribute('class','d-flex mt-5 flex-wrap justify-content-center w-100');
  scrapField.setAttribute('id','scrapsField');
  let cartaoMensagem = document.createElement('div');
  cartaoMensagem.setAttribute('class',"message-cards card text-white bg-dark m-2 col-3");
  scrapField.appendChild(cartaoMensagem);
  let tituloCartao = document.createElement('div');
  tituloCartao.setAttribute('class','card-header font-weight-bold');  
  tituloCartao.innerHTML= titulo.value;
  cartaoMensagem.appendChild(tituloCartao);
  let corpoCartao = document.createElement('div');
  corpoCartao.setAttribute('class','card-body');
  cartaoMensagem.appendChild(corpoCartao);
  let textoCartao =document.createElement('p');
  textoCartao.setAttribute('class','card-text');
  textoCartao.innerHTML = mensagem.value;
  corpoCartao.appendChild(textoCartao);
  container.appendChild(scrapField);
   let text = [titulo.value, mensagem.value];
  mensagem.value= '';
  titulo.value = '';
 recados.push(text);
 salvar();
  
}


function salvar(){

    localStorage.setItem('recados_list',JSON.stringify(recados))
}
