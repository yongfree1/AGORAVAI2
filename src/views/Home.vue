<template>
  <section class="banner">
    <div class="escuro">
      
        <div>
          <div class="my-10">
            <img class="anima" src="../../public/img/logo2menor.png" height="130" alt="Logo Simulando - Simulados online">
          </div>
          
          <div class="ml-5 my-12 d-flex justify-center">
            <v-btn color="white deep-purple--text headline font-weight-black" @click="inicio">Acessar</v-btn>
          </div> 
            
        </div>
   
    </div>
  </section>
</template>

<style>

    .banner{
    background-color: rgb(0, 0, 0, 0.6);
    background-image: url("../../public/img/prova.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center; 
    width: 100%;
    height: 100%;
  }
  .escuro{
    background-color: rgb(0, 0, 0, 0.7);
    height: 100%;
    padding: 50px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
      justify-content: space-around;
      align-items: center;    
  }

  .estilo{ border-radius: 10px 60px;}

  .cor{color: #2f0763; background-color: white}

  .anima{
    animation-name: animacao1;
    animation-duration: 2.0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  }

  @keyframes animacao1{
    0%{
      
    }
    100%{
        transform: scale(1.3);
    }
}

</style>

<script>
  export default {

      methods: {

    inicio () {
      this.$router.push('/index')
    },
  },

  }
</script>