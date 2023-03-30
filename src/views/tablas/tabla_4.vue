<template>
  <div class="container-fluid b">
    <div class="row p-0 b">
      <div class="col-12 p-0 mt-2 b table-container" ref="tableContainer" @scroll="handleScroll">
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
            <tr v-for=" item in items" :key="item">
              <th>{{ item.name.first }} {{ item.name.last }}</th>
              <td>{{ item.gender }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.cell }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-primary" @click="loadMore" v-if="showLoadMoreButton">
        Cargar más
      </button>
    </div>
  </div>
</template>

<script>
//Este codigo modifica la ruta para obtener la paginacion y numero de registros
export default {
  data() {
    return {
      items: [], // arreglo que almacena los datos de usuarios obtenidos
      loading: false, // variable que indica si se está cargando más datos o no
      page: 1, // número de página actual
      resultsPerPage: 5, // cantidad de resultados por página
      showLoadMoreButton: false // indica si el botón de "Cargar más" debe mostrarse o no
    };
  },
  mounted() {
    // obtener los primeros resultados al cargar el componente
    this.getResults();
  },
  methods: {
    getResults() {
      this.loading = true; // activar la bandera de carga

      // hacer la petición HTTP para obtener los resultados
      this.axios.get(`https://randomuser.me/api/?results=${this.resultsPerPage}&page=${this.page}`)
        .then(response => {
          this.items = this.items.concat(response.data.results); // concatenar los nuevos resultados al arreglo existente
          this.loading = false; // desactivar la bandera de carga

          // determinar si el botón de "Cargar más" debe mostrarse o no
          this.showLoadMoreButton = response.data.results.length === this.resultsPerPage;
        })
        .catch(error => {
          console.log(error);
          this.loading = false; // desactivar la bandera de carga en caso de error
        });
    },
    loadMore() {
      // incrementar el número de página y obtener más resultados
      this.page++;
      this.getResults();
    },
    handleScroll() {
      const tableContainer = this.$refs.tableContainer; // obtener el elemento de la tabla

      // verificar si el usuario ha llegado al final del contenedor de la tabla
      if (tableContainer.scrollTop + tableContainer.clientHeight >= tableContainer.scrollHeight) {
        // cargar más resultados si no se está cargando nada actualmente y si hay más resultados por cargar
        if (!this.loading && this.showLoadMoreButton) {
          this.loadMore();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>