<template>
  <div class="container">
    <v-list>
      <v-list-title>
        <h2>Usuarios</h2>
      </v-list-title> 
      <v-list-item v-for="user in pessoas" :key="user.id" dark>
        <v-list-item-content  @click="getPostByUserId(user.id)" @click.stop="dialog=true">
          <v-row justify="space-around">
            <v-avatar size="62" class="bottom">
              <img src="https://library.kissclipart.com/20180916/zvq/kissclipart-icon-clipart-computer-icons-kerona-scientific-limi-a1bc81c60735cb88.jpg">
            </v-avatar>
          </v-row>  
          <v-list-item-title>{{ user.id }}</v-list-item-title>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          <v-row justify="center">
            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="headline">Ua</v-card-title>
                <v-card-text>
                  Ola 
                </v-card-text>
                <v-card-actions>  
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Voltar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-list-item-subtitle class = "line" ><v-divider role="presentation" aria-orientation="horizontal"></v-divider></v-list-item-subtitle>  
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
  import users from '~/services/userService.js'
  import post from '~/services/seila.js'

  export default {
      data(){
        return  {       
          dialog: false,          
          pessoas: [],
          postas: [],
        }
      },
    async mounted(){
      this.pessoas = await this.getUsers();
      this.postas = this.getPostByUserId()

    },
    methods: {
      async getUsers(){
        const { data }  = await users.listar()
        return data;
      },
       async getPostByUserId(user){
        const data = post.Post(user);
        return data;
      }
    }
  }
</script>
<style>
  .container {
    background-color: black;
    text-align: center;
    margin-top: 20px;
    font-family: sans-serif;  
  }
  .line{
    margin-top: 20px;
  }
  .bottom{
    margin-bottom:20px;
  }
</style>