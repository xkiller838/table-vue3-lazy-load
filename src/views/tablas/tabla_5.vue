<template>
  <div class="container-fluid b">
    <div class="row p-0 b">
      <div class="col-12 p-0 mt-2 b h-scroll table-container" @scroll="handleScroll">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Nombre</th>
              <th>Total</th>
              <th>Recarga</th>
              <th>Valor Btc</th>
              <th>Recibir</th>
              <th>Enviar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(qqtcoin, index) in items" :key="index">
              <th>1</th>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr v-if="loading">
              <td colspan="7" class="text-center">Cargando...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
//Este ejemplo simula en un floque for la carga de archivos
export default {
  data() {
    return {
      items: [],
      loading: false,
      page: 1,
      resultsPerPage: 10
    };
  },
  mounted() {
    // cargar los primeros elementos
    this.loadMore();
  },
  methods: {
    loadMore() {
      // activar el indicador de carga
      this.loading = true;

      // simular una solicitud de datos
      setTimeout(() => {
        const start = (this.page - 1) * this.resultsPerPage;
        const end = this.page * this.resultsPerPage;
        const newItems = Array.from({ length: this.resultsPerPage }, (_, i) => i + start);
        this.items = [...this.items, ...newItems];
        this.loading = false;
        this.page++;
      }, 1000);
    },
    handleScroll(event) {
      // detectar si el usuario ha llegado al final de la página
      const bottomOfTable = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
      if (bottomOfTable && !this.loading) {
        this.loadMore();
      }
    }
  },
};
</script>
<style lang="css" scoped>

</style>
