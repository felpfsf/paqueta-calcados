<template>
  <div class="content__wrapper">
    <h1>Details</h1>
  </div>
</template>

<script lang="ts">
import api from '@/services/api';
import { ShoesProps } from '@/types/shoes.models';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name:"Product Details",
  setup() {
    const product = ref<ShoesProps | null>(null)
    const route = useRoute()

    const fetchProduct = async () => {
      try {
        const { id } = route.params
        console.log(id)
        const response = await api.get(`/shoe/${id}`)
        console.log('Produto -> ', response.data[0])
        product.value = response.data[0]
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(fetchProduct)

    return { product }

  }
})
</script>
