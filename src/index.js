import api from "./services/api";




class TaskList{
    constructor(){
        this.tituloInput = document.getElementById('titleInput');
        this.mensagemInput = document.getElementById('messageField');
        this.adicionar = document.getElementById('bnt');
        this.caixaRecados= document.getElementById('caixa-recados');
        this.editTexto= document.getElementById('editTitleInput');
        this.editMessagem = document.getElementById('editMessageField');
        this.salveedit= document.getElementById('saveEdit');
        
        
       this.recados= [];
       
       this.regitaAddbtnEvent();
       this.getScraps();
    }
    async getScraps(){
        const{data: recados}= await api.get("/scraps");

        this.recados = recados;
        this.criarRecados();
    }
    
    

    regitaAddbtnEvent(){
        this.adicionar.onclick= () => this.novaMensagem();

    }

    botaoEvento(){
      
      document.querySelectorAll('.delete-button').forEach((item)=>{item.onclick=(event)=>this.deletaMenssagem(event);
      });

      document.querySelectorAll('.editar-button').forEach(item=>{item.onclick = event=> this.editaRecado(event);
      });

    }

    criarRecados(){
        this.caixaRecados.innerHTML ="";

        for (const recado of this.recados) {         
        const cardHtml = this.criaCartaoMensagem(
        recado.id,
        recado.title,
        recado.message);
        this.inserirHtml(cardHtml);
      }
      this.botaoEvento();
     }

  async  novaMensagem(){
        if(!this.tituloInput.value || !this.mensagemInput.value){
          alert('O titulo e a mensagem deve se digitadas!')
          return;} 
          
          const novoTitulo = this.tituloInput.value;
          const novoMensagem = this.mensagemInput.value;
          
          const{data: {id, title, message}} = await api.post("/scraps",{title:novoTitulo, message:novoMensagem});
          
          this.recados.push({id,title,message});

          this.criarRecados();
          
          this.tituloInput.value = '';
          this.mensagemInput.value= '';
       }



    async  deletaMenssagem(event){
       if(!confirm('Deseja realmente apagar esta mensagem?'))return;
        event.path[2].remove()
      const scrapId = event.path[2].getAttribute('id-scrap');
    
      const scrapIndex = this.recados.findIndex(item=>{
        return item.id == scrapId;
      })
      this.recados.splice(scrapIndex, 1);

      try{
      await api.delete(`/scraps/${scrapId}`);
      } catch(error){
        console.log(error);
      }
      
      
    }
     
      inserirHtml(html){
        this.caixaRecados.innerHTML += html
      }



      editaRecado(event) {
        $('#editModal').modal('toggle');
        const scrapId = event.path[2].getAttribute('id-scrap');
         const scrapIndex = this.recados.findIndex((item) => {
           return item.id == scrapId
         })
             
         this.editTexto.value = this.recados[scrapIndex].title;
         this.editMessagem.value = this.recados[scrapIndex].message;

        this.salveedit.onclick = () => this.editSalvar(scrapId,scrapIndex) 

       }

      async editSalvar(scrapId,scrapIndex){
        if(!confirm('Você realmente deseja salvar esta mensagem?')) return;
        alert('Mensagem salva com sucesso!')
        try{
        let title = this.editTexto.value;
        let message = this.editMessagem.value ;

        
      const {data: scrap} = await api.put(`/scraps/${scrapId}`,  {title, message});
        
        this.recados[scrapIndex]= scrap;
        
        this.criarRecados();
        
        $("#editModal").modal("hide");}catch(error){
          console.log(error);
        }
       }

     
      
      


    

    criaCartaoMensagem(id, title,message){
        return`
        <div class="message-cards card text-white bg-dark m-2 col-3" id-scrap="${id}">
        <div class="card-header font-weight-bold">${title}</div>
        <div class="card-body">
          <p class="card-text">
            ${message}
          </p>
        </div>
        <div class="w-100 d-flex justify-content-end pr-2 pb-2">
          <button class="btn btn-danger mr-1 delete-button" 
          >Apagar</button>
          <button class="btn btn-info editar-button ">Editar</button>
        </div>
      </div>
      `;}
}

new TaskList();