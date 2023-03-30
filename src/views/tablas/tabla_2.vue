<template>
<!-- Contenedor principal con diseño de Bootstrap -->
  <div class="container-fluid b">
    <div class="row p-0 b">
      <!-- Contenedor de la tabla con diseño de Bootstrap y evento de scroll -->
      <div class="col-12 p-0 mt-2 b table-container" @scroll="handleScroll">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Genero</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Celular</th>
            </tr>
          </thead>
          <tbody>
            <!-- Iteración sobre el arreglo items para mostrar los datos de cada usuario -->
            <tr v-for=" item in items" :key=" item">
              <th>{{ item.name.first}} {{item.name.last}}</th>
              <td>{{item.gender}}</td>
              <td>{{item.email}}</td>
              <td>{{item.phone}}</td>
              <td>{{item.cell}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Botón para cargar más datos con evento click vinculado a la función loadMore() -->
      <button type="button" class="btn btn-primary" @click="loadMore">
        Cargar más
      </button>
    </div>
  </div>
</template>

<script>
//Esta opcion modifica la url get para mostrar los resultados
export default {
  data() {
    return {
      items: [], // Arreglo que contiene los datos de los usuarios
     loading: false,  // Variable booleana que indica si se están cargando más datos
     page: 1, // Número de página actual
     resultsPerPage: 5, // Número máximo de resultados por página
     showLoader: false, // Variable booleana que indica si se está mostrando el spinner de carga
     showButton: true  // Variable booleana que indica si se está mostrando el botón de carga de más datos
    };
  },
mounted () {
  // Al montar el componente, se cargan los primeros datos
  this.getData();
},
  methods: {
    loadMore() {
    // Se muestra el spinner y se oculta el botón de carga de más datos
    this.showLoader = true;
    this.showButton = false;

    setTimeout(() => {
      // Después de 2.6 segundos, se oculta el spinner y se cargan más datos
      this.showLoader = false;

      setTimeout(() => {
        // Después de 3 segundos, se cargan más datos y se muestra de nuevo el botón de carga de más datos
        this.getData();
        this.showButton = true;
      }, 3000);
    }, 2600);
  },

    getData(){
      // Se realiza una petición GET a la API de Random User con el número de resultados por página definido
      this.axios.get(`https://randomuser.me/api/?results=${this.resultsPerPage}`).then(response => {
        // Se agrega el nuevo resultado al arreglo de usuarios y se aumenta el número de página
        this.items = [...this.items, ...response.data.results];
        this.page++;
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
};
</script>

<style lang="css" scoped></style>
