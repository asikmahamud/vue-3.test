
<script setup>
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<template>
  <main class="min-h-screen w-full pt-10 pb-20 px-5 flex items-center justify-center bg-cyan-800">
    <!-- Shop wrapper -->
    <div class="w-full max-w-md relative">
      <RouterView/>
    </div>

    <ShoppingCart/>
  </main>
</template>