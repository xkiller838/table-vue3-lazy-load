<template>
  <div class="container-fluid b">
    <div class="row p-0 b">
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
      <button type="button" class="btn btn-primary" @click="loadMore">
        Cargar más
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // los datos que se mostraran en la tabla
      loading: false, // indica si se esta cargando mas datos
      page: 1, // la pagina actual
      resultsPerPage: 5 // cantidad de resultados por pagina
    };
  },
  mounted() {
    // Agrega un event listener al objeto window que está a la escucha del evento scroll y llama al método handleScroll cuando ocurre el evento.
    window.addEventListener('scroll', this.handleScroll);
    this.getData(); // obtiene los primeros datos al cargar la pagina
  },
  methods: {
    getData() {
      this.axios.get(`https://randomuser.me/api/?results=5`)
        .then(response => {
          this.items = response.data.results // asigna los datos obtenidos a la lista de items
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadMore() {
      if (this.loading) return; // si se esta cargando mas datos, retorna

      this.loading = true; // indica que se esta cargando mas datos

      const startIndex = (this.page - 1) * this.resultsPerPage; // indice inicial de los nuevos datos
      const endIndex = startIndex + this.resultsPerPage; // indice final de los nuevos datos
      const newItems = this.items.slice(startIndex, endIndex); // corta la lista de items para obtener los nuevos datos

      setTimeout(() => {
        this.items = [...this.items, ...newItems]; // agrega los nuevos datos a la lista de items
        this.page++; // aumenta la pagina actual
        this.loading = false; // indica que termino de cargar los nuevos datos
      }, 500);
    },
    handleScroll() {
      const currentPosition = window.pageYOffset + window.innerHeight; // posicion actual en la pagina
      const documentHeight = document.documentElement.scrollHeight; // altura del documento completo

      if (currentPosition >= documentHeight) {
        this.loadMore(); // carga mas datos al llegar al final de la pagina
      }
    }
  }
};
</script>
