<template>
  <div>
        <HeaderProva2 />
    <v-container class="grey marg lighten-5 alinhamento">
    <v-row
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col lg="8" md="8" sm="8" xs="10">
        <v-card
          class="pa-2"
          outlined
          tile
        >
         <v-card-title>
            Questões ENEM
          </v-card-title>

          <v-card outlined class="d-flex flex-column mt-5 ">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 1 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img3" src="../../../public/img/enem/questao_A.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 2 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img" src="../../../public/img/enem/questao_B.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 3 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img" src="../../../public/img/enem/questao_C.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 4 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img1" src="../../../public/img/enem/questao_D.png" alt="">
            </div> 
          </v-card>

          <v-card outlined class="d-flex flex-column mt-10">
            <v-list-item-title class="headline my-5 d-flex text-wrap text-center">Questão 5 - Responda ao lado</v-list-item-title>
            <v-divider></v-divider>
            <div class="d-flex justify-center mb-5">
              <img class="ma-3 img" src="../../../public/img/enem/questao_E.png" alt="">
            </div> 
          </v-card>
        </v-card>
      </v-col>
      <v-col md="0" >
        <v-card
          class="px-2 fixo sumir"
          outlined
          tile
          
          
        >
          <v-card-title>
            Gabarito 
          </v-card-title>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 1</v-list-item-subtitle>

          <v-radio-group v-model="rowdesk" ref="buttons6"  row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-1" color="black"></v-radio>
            <v-radio label="B" value="radio-2" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-3" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-4" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-5" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 2</v-list-item-subtitle>

          <v-radio-group v-model="rowdesk" ref="buttons7"  row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-6" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-7" color="black"></v-radio>
            <v-radio label="C" value="radio-8" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-9" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-10" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 3</v-list-item-subtitle>

          <v-radio-group v-model="rowdesk" ref="buttons8" row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-11" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-12" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-13" color="black"></v-radio>
            <v-radio label="D" value="radio-14" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-15" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 4</v-list-item-subtitle>

          <v-radio-group v-model="rowdesk" ref="buttons9" row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-16" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-17" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-18" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-19" color="black"></v-radio>
            <v-radio label="E" value="radio-20" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 5</v-list-item-subtitle>

          <v-radio-group v-model="rowdesk" ref="buttons10"  row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-21" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-22" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-23" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-24" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-25" color="black"></v-radio>
          </v-radio-group>

          <div class="d-flex justify-space-around flex-wrap mt-5">
             <div class="my-2">
            <v-btn color="black darken-4" @click="terminar" dark>Terminar</v-btn>
          </div>
  
          <div class="my-2">
            <v-btn color="white darken-1 black--text" class="mr-4" @click="reset"> Apagar respostas </v-btn>
          </div>
          </div>
        </v-card>

        
      </v-col>

      <v-col md="4" ls="4" sm="4" xs="12">
        <v-card
          class="px-2 aparecer"
          outlined
          tile
          fixed
        >
          <v-card-title>
            Gabarito 
          </v-card-title>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 1</v-list-item-subtitle>

          <v-radio-group v-model="rowmobile" ref="buttons1" row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-1" color="black"></v-radio>
            <v-radio label="B" value="radio-2" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-3" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-4" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-5" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 2</v-list-item-subtitle>

          <v-radio-group v-model="rowmobile" ref="buttons2" row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-6" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-7" color="black"></v-radio>
            <v-radio label="C" value="radio-8" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-9" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-10" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 3</v-list-item-subtitle>

          <v-radio-group v-model="rowmobile" ref="buttons3" row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-11" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-12" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-13" color="black"></v-radio>
            <v-radio label="D" value="radio-14" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-15" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 4</v-list-item-subtitle>

          <v-radio-group v-model="rowmobile" ref="buttons4" row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-16" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-17" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-18" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-19" color="black"></v-radio>
            <v-radio label="E" value="radio-20" color="#B0BEC"></v-radio>
          </v-radio-group>

          <v-list-item-subtitle class="pl-5 pt-1 title">Questão 5</v-list-item-subtitle>

          <v-radio-group v-model="rowmobile" ref="buttons5" row class="pl-5 mt-n1">
            <v-radio label="A" value="radio-21" color="#B0BEC"></v-radio>
            <v-radio label="B" value="radio-22" color="#B0BEC"></v-radio>
            <v-radio label="C" value="radio-23" color="#B0BEC"></v-radio>
            <v-radio label="D" value="radio-24" color="#B0BEC"></v-radio>
            <v-radio label="E" value="radio-25" color="black"></v-radio>
          </v-radio-group>

          <div class="d-flex justify-space-around flex-wrap mt-5">
             <div class="my-2">
            <v-btn color="black darken-4" @click="terminar" dark>Terminar</v-btn>
          </div>
  
          <div class="my-2">
            <v-btn color="black darken-1 white--text" class="mr-4" @click="reset"> Apagar respostas </v-btn>
          </div>
          </div>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
  </div>
    
</template>

<style>
  .alinhamento{
    margin-top: -580px;
  }

  .fixo{
       position: fixed;
  top: 82px;
  left: 890px;
  right: 100px;
  width: 23em;
  }
  .marg{
    margin-top: 70px;
  }    
  @media(max-width: 410px) {
    .img{
      height: 350px;
    }
    .img1{
      height: 420px;
    }
    .img3{
      height: 450px;
    }
  }

  .aparecer{
    display: none;
  }

  @media(max-width: 1200px){
    .sumir{
      display: none;
    }
  }

  @media(max-width: 1200px){
    .aparecer{
      display: block;
    }
  }

    
</style>
<script>
import HeaderProva2 from '../../components/HeaderProva2';

export default {
  components: {
    HeaderProva2,
  },

    methods: {
      reset () {
        this.$refs.buttons10.reset()
        this.$refs.buttons9.reset()
        this.$refs.buttons8.reset()
        this.$refs.buttons7.reset()
        this.$refs.buttons6.reset()

        this.$refs.buttons5.reset()
        this.$refs.buttons4.reset()
        this.$refs.buttons3.reset()
        this.$refs.buttons2.reset()
        this.$refs.buttons1.reset()
      },

      terminar () {
      this.$router.push('/adm/final2')
    }, 
  },


  
};
</script>
