

var data = { 
  livros: [{ titulo: 'Orange is The New Black', autor: 'Piper Kerman', checked: true },    
          { titulo: 'A Origem das Espécies', autor: 'Charles Darwin', checked: false }], 
  cabecalho: 'Livros Preferidos', 
  novoLivro: '',
  novoAutor: ''
};

new Vue({ 
   el: '#app', 
   data: data,
   methods: { 
     addLivro: function () { 
       var titulo = this.novoLivro.trim(); 
       var autor = this.novoAutor.trim(); 
       if (titulo && autor) { 
         this.livros.push({ 
           titulo: titulo, 
           autor: autor, 
           checked: false
         }); 
         this.novoLivro = ''; 
         this.novoAutor = ''; 
       } 
     }
   }
});


var objeto = {};
var texto = '';

var h2 = document.getElementsByTagName('h2')[0];


Object.defineProperty(objeto, 'texto', { 
  get: function () { 
    return texto; 
  }, 
  set: function (novoValor) { 
    texto = novoValor;  
    h2.innerHTML = texto;
  } 
});