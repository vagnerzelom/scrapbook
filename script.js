let titulo = document.getElementById('titleInput');
let mensagem = document.getElementById('messageField');
let adicionar = document.getElementById('bnt');
let container = document.querySelector('.container');
 
let recados = [] ; 



adicionar.onclick = function(){
    if(!titulo.value || !mensagem.value) return;
  let scrapField =  document.createElement('div')
  let botaoApagar = document.createElement('button')
  scrapField.appendChild(botaoApagar)
  botaoApagar.innerHTML='Apagar';
  let editar = document.createElement('button')
  scrapField.appendChild(editar)
  editar.innerHTML='Editar'
  editar.setAttribute('class','btn-editar')
  botaoApagar.setAttribute('class', 'btn-apagar')
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
 
  
}

document.addEventListener('click',function(e){
  const btn = e.target;
  if(btn.classList.contains('btn-apagar')){
     
       btn.parentElement.remove();
 }
} )

document.addEventListener('click',function(e){
  const btn = e.target;
  if(btn.classList.contains('btn-editar')){
     
       openEditModal();
}
} )

 function openEditModal(){
  $('#editModal').modal('toggle');
 }

