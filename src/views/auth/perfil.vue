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
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
            alt=""
          />
          <p class="label mt-3">Daniela Rodriguez</p>
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
                    type="text"
                    class="form-control"
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
                    type="text"
                    class="form-control"
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
                    class="form-control"
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
                    type="text"
                    class="form-control"
                    id="inlineFormInputGroup"
                  />
                </div>
              </div>
            </div>
            <div class="row py-2 px-5">
              <div class="col-sm-6">
                <button class="btn btn-primary">Actualizar datos</button>
              </div>
              <div class="col-sm-6">
                <button class="btn btn-primary">Cambiar Constraseña</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="reservaciónes-recientes">
      <h3 class="label">Reservaciónes recientes</h3>
      <div class="card my-3" style="max-width: 100%">
        <div class="row no-gutters">
          <div class="col-lg-12">
            <div class="card-body row">
              <div class="col-md-5" id="card-left">
                <h5 class="card-title">
                  <small class="text-muted">ID de Reservación: 7844-8545</small>
                </h5>
                <h3 class="label">Oficina</h3>
                <p class="card-text">Edificio Central</p>
                <p class="card-text">Fecha de creación: 15 Julio, 2020</p>
              </div>
              <div class="col-md-5" id="card-middle">
                <p class="card-text">Fecha de ingreso: 16 Julio, 2020</p>
                <p class="card-text">Fecha de salida: 20 Julio, 2020</p>
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
                <p class="card-text">$1,500.00 MXN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-3" style="max-width: 100%">
        <div class="row no-gutters">
          <div class="col-lg-12">
            <div class="card-body row">
              <div class="col-md-5" id="card-left">
                <h5 class="card-title">
                  <small class="text-muted">ID de Reservación: 7844-8545</small>
                </h5>
                <h3 class="label">Oficina</h3>
                <p class="card-text">Edificio Central</p>
                <p class="card-text">Fecha de creación: 15 Julio, 2020</p>
              </div>
              <div class="col-md-5" id="card-middle">
                <p class="card-text">Fecha de ingreso: 16 Julio, 2020</p>
                <p class="card-text">Fecha de salida: 20 Julio, 2020</p>
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
                <p class="card-text">$1,500.00 MXN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-3" style="max-width: 100%">
        <div class="row no-gutters">
          <div class="col-lg-12">
            <div class="card-body row">
              <div class="col-md-5" id="card-left">
                <h5 class="card-title">
                  <small class="text-muted">ID de Reservación: 7844-8545</small>
                </h5>
                <h3 class="label">Oficina</h3>
                <p class="card-text">Edificio Central</p>
                <p class="card-text">Fecha de creación: 15 Julio, 2020</p>
              </div>
              <div class="col-md-5" id="card-middle">
                <p class="card-text">Fecha de ingreso: 16 Julio, 2020</p>
                <p class="card-text">Fecha de salida: 20 Julio, 2020</p>
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
                <p class="card-text">$1,500.00 MXN</p>
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
export default {
  name: "Perfil",
  data: () => ({}),
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
