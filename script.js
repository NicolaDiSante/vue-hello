const app = new Vue({

  el: '#app',
  data: {
    messaggio: "Benvenuto nella home",
    color: "",
    img: '',
  },

  methods: {
    changeColor(classe){
      this.color = classe
    },

    showImage(evento){
      this.img = evento
    }

    
  }
  

});
