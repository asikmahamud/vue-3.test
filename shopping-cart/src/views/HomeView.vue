<script setup>
  import { defineStore } from 'pinia'
import {ref} from 'vue'
  import {useStore} from '../stores/counter.js'
import ProductCart from '../components/productCart.vue';

  const store = useStore()
 </script>

 <template>
  <h1 class="text-white font-semibold text-2xl mb-5 text-center">
    Car Shop
  </h1>

  <!-- shop grid -->
  <div class="grid grid-cols-2 gap-5">
        
    <!-- single product end -->

    <!-- single product -->
      <ProductCart v-for="product in store.produtcs" :key="product.id" :product = "product"/>
    <!-- single product end -->
  </div>
  <!-- shop grid end -->
</template>
