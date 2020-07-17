class TaskList{
    constructor(){
        this.tituloInput = document.getElementById('titleInput');
        this.mensagemInput = document.getElementById('messageField');
        this.adicionar = document.getElementById('bnt');
        this.caixaRecados= document.getElementById('caixa-recados')

       this.recados=[];

       this.regitaAddbtnEvent();
    }
    generateRecadoId(){
      return this.recados.length +1;
    }

    regitaAddbtnEvent(){
        this.adicionar.onclick= () => this.novaMensagem();
    }

    botaoEvento(){
      
      document.querySelectorAll('.delete-button').forEach((item)=>{item.onclick=(event)=>this.deletaMenssagem(event);
      });
    }

    criarRecados(){
        this.caixaRecados.innerHTML ="";

        for (const recado of this.recados) {         const cardHtml = this.criaCartaoMensagem(recado.id,
        recado.titulo,
        recado.mensagem);
        this.inserirHtml(cardHtml);
      }
      this.botaoEvento();
     }

    novaMensagem(){
        if(!this.tituloInput.value || !this.mensagemInput.value){
          alert('O titulo e a mensagem deve se digitadas!')
          return;} 
        const id = this.generateRecadoId();
        const titulo = this.tituloInput.value;
        const mensagem = this.mensagemInput.value;
      
        this.tituloInput.value = '';
        this.mensagemInput.value= '';
        this.recados.push({id,titulo,mensagem});
      
        this.criarRecados();
       
      }

      deletaMenssagem(event){
        event.path[2].remove()
      const scrapId = event.path[2].getAttribute('id-scrap');
      const scrapIndex =this.recados.findIndex(item=>{
        return item.id == scrapId;
      })
      this.recados.splice(scrapIndex, 1)
      }

      inserirHtml(html){
        this.caixaRecados.innerHTML += html
      }

    criaCartaoMensagem(id, titulo,mensagem){
        return`
        <div class="message-cards card text-white bg-dark m-2 col-3 id-scrap=${id}">
        <div class="card-header font-weight-bold">${titulo}</div>
        <div class="card-body">
          <p class="card-text">
            ${mensagem}
          </p>
        </div>
        <div class="w-100 d-flex justify-content-end pr-2 pb-2">
          <button class="btn btn-danger mr-1 delete-button" 
          >Apagar</button>
          <button class="btn btn-info">Editar</button>
        </div>
      </div>
      `;}
}

new TaskList();