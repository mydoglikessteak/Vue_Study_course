<template>
  <main-nav />
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
<!--
  
  */scoped significa que os estilos serao encapsulados somente neste componente
  nao se espalahando aos demais \* */ Sempre usar o scooped em todos os
  componentes recomendado pelo proprio vue *\
<style scoped>
  h1 {
    color: purple;
  }
  </style>

-->
