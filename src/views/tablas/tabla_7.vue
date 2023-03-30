<template>
  <div class="container-fluid b">
    <div class="row p-0 b">
      <div class="col-12 p-0 mt-2 b h-scroll table-container" ref="tableContainer" @scroll="handleScroll">
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
            <tr v-for="(item, index) in items" :key="index">
              <th>{{ item.name.first }} {{ item.name.last }}</th>
              <td>{{ item.gender }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.cell }}</td>
            </tr>
            <tr v-if="loading">
              <td colspan="5" class="text-center">
                <i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Cargando...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//Esta es la mas optima sin modificar la ruta de la paginacion en axios get
export default {
  data() {
    return {
      page: 1,
      items: [], // Array para almacenar los resultados de la API
      loading: false, // Bandera para indicar si se está cargando la siguiente página
      endReached: false, // Bandera para indicar si se alcanzó el final de los resultados
    };
  },
  mounted() {
  this.getData();
  /*establece la posición del scroll del contenedor de la tabla al inicio de la página, lo que permite que
    el usuario vea el contenido desde el principio cuando se actualiza o ingresa a la página.*/
  this.$refs.tableContainer.scrollTop = 0;
  },
  methods: {
    getData() {
      this.loading = true; // Se indica que se está cargando la siguiente página

      // Se hace una petición GET a la API de Random User
      this.axios.get(`https://randomuser.me/api/?results=50`).then((response) => {
        // Se concatenan los nuevos resultados con los ya existentes
          this.items = [...this.items, ...response.data.results];
          this.page += 1; // Se incrementa la página
          this.loading = false; // Se indica que ya se cargó la siguiente página
        })
        .catch((error) => {
          console.log(error); // Se muestra un mensaje en caso de error
          this.loading = false; // Se indica que ya se cargó la siguiente página, aunque haya sido con error
        });
    },
    handleScroll() {
      const tableContainer = this.$refs.tableContainer;
      // Se verifica si se alcanzó el final de la tabla, no se está cargando más resultados y no se alcanzó el final de los resultados
      if (tableContainer.scrollTop + tableContainer.offsetHeight >= tableContainer.scrollHeight && !this.loading && !this.endReached) {
        this.getData(); // Se cargan más resultados
      }
    },
  },
};
</script>

<style lang="css" scoped>

</style>
