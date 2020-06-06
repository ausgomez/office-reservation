<template>
  
  <v-img 
  id="Fondo"
  src="/images/Fondo_Ciudad.jpg"
  class="mx-auto"
  width="100%"
  height="100%"
  contain="false"
   
   >
    
   <div>
     
     <v-text class="text-center white--text " ><h1>Login</h1></v-text>
     
    <v-card class="mt-12  mx-auto" width="50%" height="auto" :elevation="12" contain="false" >
     <v-card-title>
      <v-img 
      src="/images/icon-iniciar-sesion.png" 
      class="mx-auto"
      width="150"
      height="150"
      contain="false"
      ></v-img>
     </v-card-title> 
      <div class="ml-12">
       <v-col cols="12" sm="50%" md="10" >
          <v-text-field
            color="#42A5F5"
            label="Usuario/E-mail"
            outlined 
            
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="50%" md="10" >
          <v-text-field
            color="#42A5F5"
            label="Contraseña"
            outlined 
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            hint="Al menos 8 caracteres."
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
       </div>

         <div class="text-center" >
          
         <v-btn 
           x-large
           color="#42A5F5" 
           :elevation="12"
           class="mx-auto mr-12"
           >
          Iniciar Sesion
         </v-btn>
          
         <v-btn 
           x-large 
           color="#42A5F5" 
           class=""
           :elevation="12"
           @click="overlay = !overlay"
           >
            Registrarse
         </v-btn>

             <v-overlay
          :absolute="absolute"
          :value="overlay"
          
        >
            <v-card width="100%" height="auto" class="my-n12"> 
             <v-card-title>
               <v-img 
                 src="/images/Registrarte.png" 
                 class="mx-auto"
                 width="100"
                 height="100"
                 contain="false"
               ></v-img>
             </v-card-title> 
              <div class="ml-12">
                <v-col cols="12" sm="5" md="10" >
                <v-text-field
                   color="#42A5F5"
                   label="Nombre de Usuario"
                   outlined 
                ></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" md="10" >
                <v-text-field
                   color="#42A5F5"
                   label="Correo Electronico"
                   outlined 
                ></v-text-field>
                </v-col>

              <v-col cols="12" sm="5" md="10">
               <v-text-field
                  color="#42A5F5"
                  label="Contraseña"
                  outlined 
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  hint="Al menos 8 caracteres."
                  @click:append="show1 = !show1"
               ></v-text-field>
              </v-col>
                <v-col cols="12" sm="5" md="10">
               <v-text-field
                  color="#42A5F5"
                  label="Confirmar Contraseña"
                  outlined 
                  :type="'password'"
                  hint="Al menos 8 caracteres."
               ></v-text-field>
              </v-col>
              
              <v-btn
               color="success"
               @click="overlay = false"
               class="ml-n12"
              >
               Crear Cuenta
              </v-btn>
               </div>          
            </v-card>
        </v-overlay>
            
           <div>
            <v-text >*Si aun no tienes una cuenta puedes registrarte.</v-text>
           </div>
        </div>
   </v-card>
   </div>
   </v-img>
</template>

<script>
export default {
  name: "Signin",
  data () {
    /*tittle: "Iniciar sesion",*/ 
    return {
      show1: false,
      password: 'Password',
      rules: {
         required: value => !!value || 'Required',
         min: v => v.length >= 8 || 'Min 8 characters',
      },

      absolute:true,
      overlay: false,
    }
  },
  methods: {
  },
};
</script>

<style></style>
