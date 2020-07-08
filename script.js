let tituloInput = document.getElementById('titleInput');
let mensagemInput = document.getElementById('messageField');
let adicionar = document.getElementById('bnt');
let container = document.querySelector('.container');
let caixaRecados= document.getElementById('caixa-recados')
let editTexto= document.getElementById('editTitleInput')
let editMessagem = document.getElementById('editMessageField')
let salveedit= document.getElementById('saveEdit');



 
let recados = [] ; 

function criarRecados(){
   caixaRecados.innerHTML= '';
   for (const recado of recados) {
      let position = recados.indexOf(recado);
      caixaRecados.innerHTML += criaCartaoMensagem(recado.titulo,recado.mensagem,position);
   }
}



function novaMensagem(){
  let titulo = tituloInput.value;
  let mensagem = mensagemInput.value;

  tituloInput.value = '';
  mensagemInput.value= '';
  recados.push({titulo,mensagem})

  criarRecados()
}

function deletarMensagem(position){
  recados.splice(position, 1)

  criarRecados();
}

function criaCartaoMensagem(titulo,mensagem, position){
  return`
  <div class="message-cards card text-white bg-dark m-2 col-3">
  <div class="card-header font-weight-bold">${titulo}</div>
  <div class="card-body">
    <p class="card-text">
      ${mensagem}
    </p>
  </div>
  <div class="w-100 d-flex justify-content-end pr-2 pb-2">
    <button class="btn btn-danger mr-1" onclick="deletarMensagem(${position})">Apagar</button>
    <button class="btn btn-info" onclick="openEditModal(${position})">Editar</button>
  </div>
</div>
`;}



 function openEditModal(position){
  $('#editModal').modal('toggle');
 editTexto.value = recados[position].titulo;
editMessagem.value = recados[position].mensagem;

//salveedit.setAttribute('onclick',`saveChanges(position)`);
 }

function saveChanges(position){
 let titulo = editTexto.value;
 let menssagem = editMessagem.value ;
}

criarRecados();
adicionar.onclick = novaMensagem;
