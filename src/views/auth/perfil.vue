<template>
  <section id="perfil" class="container">
    <div id="informacion">
      <div class="row text-center">
        <div class="col-12">
          <h1 class="label pb-5">Perfil</h1>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-sm-12 col-md-4">
          <img
            class="rounded-circle img-responsive"
            :src="
              `https://randomuser.me/api/portraits/${
                profile.genero
              }/${Math.floor(Math.random() * 50)}.jpg`
            "
            alt=""
          />
          <p class="label mt-3">{{ profile.nombre }}</p>
        </div>
        <div class="col-sm-12 col-md-8">
          <form>
            <div class="form-row align-items-center">
              <div class="col-sm-12 col-md-6">
                <label class="sr-only" for="inlineFormInputGroup">Nombre</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                  </div>
                  <input
                    readonly
                    type="text"
                    class="form-control"
                    :value="profile.nombre"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <label class="sr-only" for="inlineFormInputGroup"
                  >Teléfono</label
                >
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Teléfono</div>
                  </div>
                  <input
                    readonly
                    type="text"
                    class="form-control"
                    :value="profile.telefono"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
            </div>
            <div class="form-row align-items-center">
              <div class="col-sm-12 col-md-6">
                <label class="sr-only" for="inlineFormInputGroup"
                  >Dirección</label
                >
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Dirección</div>
                  </div>
                  <input
                    type="text"
                    readonly
                    :value="profile.direccion"
                    class="form-control"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <label class="sr-only" for="inlineFormInputGroup">Email</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Email</div>
                  </div>
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    :value="profile.email"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
            </div>
            <div class="form-row align-items-center">
              <div class="col-sm-12 col-md-6">
                <label class="sr-only" for="inlineFormInputGroup">RFC</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">RFC</div>
                  </div>
                  <input
                    readonly
                    :value="profile.RFC"
                    type="text"
                    class="form-control"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <label class="sr-only" for="inlineFormInputGroup">Cuenta</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Cuenta</div>
                  </div>
                  <input
                    readonly
                    type="text"
                    class="form-control"
                    :value="profile.admin ? 'Admin' : 'Normal'"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
            </div>
            <div class="row py-2 px-5">
              <!-- <div class="col-sm-6">
                <button class="btn btn-primary">Actualizar datos</button>
              </div>
              <div class="col-sm-6">
                <button class="btn btn-primary">Cambiar Contraseña</button>
              </div> -->
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="reservaciónes-recientes" v-if="reservaciones.length > 0">
      <h3 class="label">Reservaciónes recientes</h3>
      <div
        v-for="res in reservaciones"
        :key="res.id"
        class="card my-3"
        style="max-width: 100%"
      >
        <div class="row no-gutters">
          <div class="col-lg-2">
            <div class="card-body p-6">
              <vue-qrcode :text="`/reservaciones/ + ${res.id}`" :size="150" />
            </div>
          </div>
          <div class="col-lg-10">
            <div class="card-body row">
              <div class="col-md-5" id="card-left">
                <h5 class="card-title">
                  <small class="text-muted"
                    >ID de Reservación: {{ res.id }}</small
                  >
                </h5>
                <h3 class="label">{{ res.reservacion }}</h3>
                <p class="card-text">
                  {{ res.ubicacion_id }}
                </p>
                <p class="card-text">
                  Fecha de reservación: {{ res.fecha_reservacion }}
                </p>
                <p class="card-text">Horas: {{ res.horas }}</p>
              </div>
              <div class="col-md-5" id="card-middle">
                <p class="card-text">
                  Fecha de ingreso: {{ res.fecha_inicio }}
                </p>
                <p class="card-text">Fecha de salida: {{ res.fecha_salida }}</p>
              </div>
              <div class="col-md-2">
                <div class="row pull-right" id="check">
                  <svg
                    class="bi bi-check-circle-fill"
                    width="2em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                    />
                  </svg>
                </div>
                <p class="card-text">${{ res.total }} MXN</p>
                <p class="card-text">
                  <router-link
                    :to="{
                      name: 'Reservaciones',
                      params: { reservacion_id: res.id },
                    }"
                  >
                    Ver reservacion
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <h3 class="label">Método de pago</h3>
      <div class="row mx-auto">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <!-- Credit card form content -->
              <div class="tab-content">
                <!-- credit card info-->
                <div id="credit-card col-md-8">
                  <form role="form">
                    <div class="form-group">
                      <label for="username"><h6>Nombre</h6></label>
                      <input
                        type="text"
                        name="username"
                        required
                        class="form-control"
                      />
                    </div>

                    <div class="form-group">
                      <label for="cardNumber"><h6>Número de tarjeta</h6></label>
                    </div>
                    <div class="input-group">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="row">
                      <div class="col-sm-8">
                        <div class="form-group">
                          <label
                            ><span class="hidden-xs"
                              ><h6>Fecha de expiración</h6></span
                            ></label
                          >
                          <div class="input-group">
                            <input
                              type="number"
                              placeholder="MM"
                              name=""
                              class="form-control"
                              required
                              min="0"
                              max="12"
                            /><input
                              type="number"
                              placeholder="AA"
                              name=""
                              class="form-control"
                              required
                              min="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group mb-4">
                          <label
                            data-toggle="tooltip"
                            title="Código de 3 digitos al reverso de tu tarjeta"
                            ><h6>
                              CVV
                              <i class="fa fa-question-circle d-inline"></i></h6
                          ></label>
                          <input type="text" required class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <button
                        type="button"
                        class="subscribe btn btn-primary btn-block shadow-sm"
                      >
                        Confirmar pago
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- End -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import db from "@/firebase/init.js";
import VueQrcode from "vue-qr";
import firebase from "firebase";

export default {
  name: "Perfil",
  components: {
    VueQrcode,
  },
  data: () => ({
    profile: null,
    user: null,
    reservaciones: [],
    ubicaciones: [],
  }),

  async created() {
    //get user
    await firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        await db
          .collection("usuarios")
          .where("user_id", "==", user.uid)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              this.user.admin = doc.data().admin;
              this.user.empresa_id = doc.data().empresa_id;
            });
          });
      } else {
        this.user = null;
      }
    });

    // get current user
    await db
      .collection("usuarios")
      .where("user_id", "==", this.user.uid)
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => (this.profile = doc.data()))
      );

    //get reservaciones
    await db
      .collection("reservaciones")
      .where("user_id", "==", this.user.uid)
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => this.reservaciones.push(doc.data()))
      );

    //get ubicaciones
    this.getUbicaciones();
  },

  async getUbicaciones() {
    //get ubicaciones
    await db
      .collection("ubicaciones")
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => this.ubicaciones.push(doc.data()))
      );
  },
};
</script>

<style>
.rounded-circle {
  height: 10rem;
}
.input-group-text {
  width: 80px;
  padding-left: 0.4rem !important;
  background: rgba(57, 151, 243) !important;
  color: #fff !important;
  font-size: 1rem !important;
}
.btn-primary {
  width: 180px;
}
#check {
  padding-left: 50%;
  padding-bottom: 5rem;
}
@media only screen and (max-width: 770px) {
  #check {
    display: flex;
    position: absolute;
  }
}
#card-middle {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 0px !important;
}
#informacion {
  padding-bottom: 1rem;
}
#reservaciónes-recientes {
  padding-bottom: 1rem;
}
#iconos-pago {
  display: flex;
  justify-content: flex-end;
}
.panel-title {
  display: inline;
  font-weight: bold;
}
.checkbox.pull-right {
  margin: 0;
}
.pl-ziro {
  padding-left: 0px;
}
</style>
