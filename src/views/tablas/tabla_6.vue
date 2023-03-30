<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-2" ref="tableContainer">
        <table class="table table-striped" ref="table">
          <!-- Definimos la estructura de la tabla -->
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
              <!-- Definimos las celdas de la tabla y utilizamos data binding para mostrar los datos -->
              <th>{{ item.name.first}} {{item.name.last}}</th>
              <td>{{item.gender}}</td>
              <td>{{item.email}}</td>
              <td>{{item.phone}}</td>
              <td>{{item.cell}}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="isLoading" class="text-center">
          <!-- Muestra un spinner mientras se está cargando la información -->
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Este ejemplo modifica la ruta get para el funcionamiento
export default {
  data() {
    return {
      items: [], // Datos de la tabla
      page: 1, // Página actual
      isLoading: false, // Indica si se está cargando información
    }
  },
  mounted() {
    this.getData();  // Se carga la información al montar el componente
    window.addEventListener('scroll', this.handleScroll); // Se agrega un listener para el evento de scroll
  },
  methods: {
    getData() {
      // Obtiene los datos de la API
      this.isLoading = true;
      const url = `https://randomuser.me/api/?results=50&page=${this.page}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
           // Agrega los nuevos datos al array de items
          this.items = [...this.items, ...data.results];
          this.page++;
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleScroll() {
      // Maneja el evento de scroll para cargar más información si es necesario
      const tableContainer = this.$refs.tableContainer;
      const table = this.$refs.table;
      if (tableContainer.scrollTop + tableContainer.offsetHeight >= table.clientHeight) {
        this.getData();
      }
    }
  },
  beforeDestroy() {
    // Remueve el listener del evento de scroll antes de que el componente sea destruido
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
table {
  max-height: 400px; 
  overflow-y: auto;
}
</style>
