/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soma */ \"./src/soma.js\");\n// class TaskList{\n//     constructor(){\n//         this.tituloInput = document.getElementById('titleInput');\n//         this.mensagemInput = document.getElementById('messageField');\n//         this.adicionar = document.getElementById('bnt');\n//         this.caixaRecados= document.getElementById('caixa-recados');\n//         this.editTexto= document.getElementById('editTitleInput');\n//         this.editMessagem = document.getElementById('editMessageField');\n//         this.salveedit= document.getElementById('saveEdit');\n//        this.recados= JSON.parse(localStorage.getItem(\"recados\")) || [];\n//        this.criarRecados();\n//        this.regitaAddbtnEvent();\n//     }\n//     generateRecadoId(){\n//       return this.recados.length +1;\n//     }\n//     regitaAddbtnEvent(){\n//         this.adicionar.onclick= () => this.novaMensagem();\n//     }\n//     botaoEvento(){\n//       document.querySelectorAll('.delete-button').forEach((item)=>{item.onclick=(event)=>this.deletaMenssagem(event);\n//       });\n//       document.querySelectorAll('.editar-button').forEach(item=>{item.onclick = event=> this.editaRecado(event);\n//       });\n//     }\n//     criarRecados(){\n//         this.caixaRecados.innerHTML =\"\";\n//         for (const recado of this.recados) {         \n//         const cardHtml = this.criaCartaoMensagem(\n//         recado.id,\n//         recado.titulo,\n//         recado.mensagem);\n//         this.inserirHtml(cardHtml);\n//       }\n//       this.botaoEvento();\n//      }\n//     novaMensagem(){\n//         if(!this.tituloInput.value || !this.mensagemInput.value){\n//           alert('O titulo e a mensagem deve se digitadas!')\n//           return;} \n//         const id = this.generateRecadoId();\n//         const titulo = this.tituloInput.value;\n//         const mensagem = this.mensagemInput.value;\n//         this.tituloInput.value = '';\n//         this.mensagemInput.value= '';\n//         this.recados.push({id,titulo,mensagem});\n//         this.criarRecados();\n//         this.savarLocalstore();\n//       }\n//       deletaMenssagem(event){\n//        if(!confirm('Deseja realmente apagar esta mensagem?'))return;\n//         event.path[2].remove()\n//       const scrapId = event.path[2].getAttribute('id-scrap');\n//       const scrapIndex =this.recados.findIndex(item=>{\n//         return item.id == scrapId;\n//       })\n//       this.recados.splice(scrapIndex, 1);\n//       this.savarLocalstore();\n//       }\n//       inserirHtml(html){\n//         this.caixaRecados.innerHTML += html\n//       }\n//       editaRecado(event) {\n//         $('#editModal').modal('toggle');\n//         const scrapId = event.path[2].getAttribute('id-scrap');\n//         const scrapIndex = this.recados.findIndex((item) => {\n//           return item.id == scrapId\n//         })\n//          this.editTexto.value = this.recados[scrapIndex].titulo;\n//          this.editMessagem.value = this.recados[scrapIndex].mensagem;\n//         this.salveedit.onclick = () => this.editSalvar(scrapIndex) \n//        }\n//        editSalvar(scrapIndex){\n//         if(!confirm('Você realmente deseja salvar esta mensagem?')) return;\n//         alert('Mensagem salva com sucesso!')\n//         $(\"#editModal\").modal(\"hide\");\n//        this.recados[scrapIndex].titulo = this.editTexto.value;\n//        this.recados[scrapIndex].mensagem = this.editMessagem.value ;\n//        this.criarRecados();\n//        this.savarLocalstore();\n//        }\n//        savarLocalstore(){\n//         localStorage.setItem('recados',JSON.stringify(this.recados));\n//       }\n//     criaCartaoMensagem(id, titulo,mensagem){\n//         return`\n//         <div class=\"message-cards card text-white bg-dark m-2 col-3\" id-scrap=\"${id}\">\n//         <div class=\"card-header font-weight-bold\">${titulo}</div>\n//         <div class=\"card-body\">\n//           <p class=\"card-text\">\n//             ${mensagem}\n//           </p>\n//         </div>\n//         <div class=\"w-100 d-flex justify-content-end pr-2 pb-2\">\n//           <button class=\"btn btn-danger mr-1 delete-button\" \n//           >Apagar</button>\n//           <button class=\"btn btn-info editar-button \">Editar</button>\n//         </div>\n//       </div>\n//       `;}\n// }\n// new TaskList();\n\nalert(Object(_soma__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/soma.js":
/*!*********************!*\
  !*** ./src/soma.js ***!
  \*********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nvar soma = function soma(a, b) {\n  return a + b;\n};\n\n//# sourceURL=webpack:///./src/soma.js?");

/***/ })

/******/ });