<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
        <h2 class="ml-8 flex h-full items-center">
          Developed by {{ author.firstname }} {{ author.lastname }}
        </h2>
      </div>
    </div>
  </header>
</template>
//Header geralmente representa o conteudo inicial //Vue 2 method optionsAPI
<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Bobo Carrers",
      author: {
        firstname: "Vini",
        lastname: "dev",
      },
    };
  },
};
</script>
