<template>
    <v-app id="inside">

        <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense
      >
        <v-list-group value="true">
       <template v-slot:activator
       >
          <v-list-item-avatar>
              <img src="../../../public/img/igor.jpg" height="40px" alt="Imagem do Usuário">
            </v-list-item-avatar>

            <v-list-item-content >
              <v-list-item-title><b>{{ user.nome }}</b></v-list-item-title>
              <v-list-item-subtitle><b>{{ user.status }}</b></v-list-item-subtitle>
            </v-list-item-content>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../../public/img/settings.svg" height="35px" alt=" Icone de configuração">
            </v-list-item-action>
            <v-list-item-title >Configurações</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../../public/img/logout.svg" height="30px" alt=" Icone de Sair">
            </v-list-item-action>
            <v-list-item-title @click="sair" class="pl-1">Sair</v-list-item-title>
          </v-list-item>

        </v-list>
        
           </v-list-group>

      </v-list>
      
        <v-divider></v-divider>

        <v-list>
          <v-list-item link>
           
            <v-list-item-title>Inserir alunos</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>Inserir AAAA</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="purple darken-4"
      dark
      width="100%"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-container 
      height="100%"
      class="central d-flex justify-center"
      color="purple darken-4"
      >
        <img @click="inicio"  src="../../../public/img/logo2menor.png" height="45px" width="200px" alt="Logo Simulando - Simulados online">
      </v-container>

      
    </v-app-bar>

    <v-content>
        <v-container>

          <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Cadastro de usuário</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <!-- <v-btn color="primary" dark class="mb-2" v-on="on">Novo usuário</v-btn> -->
            <v-btn
            color="purple darken-4"
            class="elevation-1 white--text"
            v-on="on"
            small
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row class="d-block">
                  <v-col cols="12" sm="8" md="4">
                    <v-text-field v-model="editedItem.name" label="Nome do usuário"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.insti"  label="Instituição de Ensino"></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save" :disabled="!valid">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
            

        </v-container>
    </v-content>

    <Footer />
        
    </v-app>
</template>

<script>
import Footer from '../../components/Footer';

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      length: 3,
      onboarding: 0,

      dialog: false,
      headers: [
        {
          text: 'Nome usuário',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'E-mail', value: 'email' },
        { text: 'Instituição de ensino', value: 'insti' },
        
        { text: 'Opções', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        insti: '',

      },
      defaultItem: {
        name: '',
        email: '',
        insti: '',

      },
    
    }),
   
    computed: {
      user () {
        return this.$ls.get('user')
      },

      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    components: {
    Footer,
  },

    methods: {

      initialize () {
        this.desserts = [
          {
            name: 'Igor Alves',
            email: 'igoralves.simt@gmail.com',
            insti: 'Etec Matão',

          },
          {
            name: 'Murillo Mirando',
            email: 'murillomirando123@gmail.com',
            insti: 'Buscardi',

          },

          {
            name: 'Joice Marques',
            email: 'inaramarques@gmail.com',
            insti: 'Etec Taquaritinga',

          },
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Tem certeza que deseja excluir?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        } if (this.$refs.form.save()) {
          this.snackbar = true
        }
        this.close()
      },

      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
        },
      sair () {
      this.$router.push('/index')
        },
      inicio () {
      this.$router.push('/index')
        },
    },
}
</script>
