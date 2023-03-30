<template>
  <div>
    <button type="button" class="btn btn-primary" @click="tabla_1"> tabla 1</button>&nbsp;
    <button type="button" class="btn btn-primary" @click="tabla_2"> tabla 2</button>&nbsp;
    <button type="button" class="btn btn-primary" @click="tabla_3"> tabla 3</button>&nbsp;
    <button type="button" class="btn btn-primary" @click="tabla_4"> tabla 4</button>&nbsp;
    <button type="button" class="btn btn-primary" @click="tabla_5"> tabla 5</button>&nbsp;
    <button type="button" class="btn btn-primary" @click="tabla_6"> tabla 6</button>&nbsp;
    <button type="button" class="btn btn-primary" @click="tabla_7"> tabla 7</button>&nbsp;
  </div>
</template>

<script>
export default {
  methods: {
    tabla_1() {
       this.$router.push('tabla_1')
    },
    tabla_2() {
       this.$router.push('tabla_2')
    },
    tabla_3() {
       this.$router.push('tabla_3')
    },
    tabla_4() {
       this.$router.push('tabla_4')
    },
    tabla_5() {
       this.$router.push('tabla_5')
    },
    tabla_6() {
       this.$router.push('tabla_6')
    },
    tabla_7() {
       this.$router.push('tabla_7')
    }
  },
};
</script>

<style lang="scss" scoped></style>
