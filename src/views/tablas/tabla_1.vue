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
            <tr v-for="qqtcoin in 80" :key="qqtcoin">
              <th>1</th>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" @click="volver()">volver</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      items: [], // Tu lista de elementos a mostrar en la tabla
    };
  },
  methods: {
    // Función que redirige al usuario a la página anterior al hacer clic en el botón "volver"
    volver(){
        this.$router.push('/')
    },

    // Función que incrementa la página actual para cargar más elementos en la tabla
    loadMore() {
      this.page++;
    },
    // Función que se ejecuta cuando el usuario hace scroll en la tabla
    handleScroll() {
      const container = document.querySelector(".table-container");
      const distanceFromBottom =  container.scrollHeight - (container.scrollTop + container.clientHeight);
      // Imprime en la consola la distancia desde el final de la tabla hasta la posición actual del scroll
      console.log("🚀 ~ file: tabla_1.vue:49 ~ handleScroll ~ distanceFromBottom:", distanceFromBottom)
      // Si la distancia desde el final de la tabla hasta la posición actual del scroll es menor a 50px, carga más elementos
      if (distanceFromBottom < 50) {
        this.loadMore();
      }
    },
  },
};
</script>

<style lang="css" scoped></style>

