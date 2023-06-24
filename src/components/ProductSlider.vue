<script lang="ts">
import api from "@/services/api";
import { ShoesProps } from "@/types/shoes.models";
import { onMounted, ref } from "vue";

import ProductSliderCard from "./ProductSliderCard.vue";
// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
// @ts-ignore
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "ProductSlider",
  setup() {
    const products = ref<ShoesProps[]>([]);
    const fetchProducts = async () => {
      try {
        const response = await api.get("/shoes");
        console.log(Math.ceil(response.data.length / 2));
        const limit = response.data.slice(
          0,
          Math.ceil(response.data.length / 2)
        );
        console.log(limit);
        products.value = limit;
      } catch (e) {
        console.error(e);
      }
    };
    onMounted(fetchProducts);

    return { modules: [Navigation, Pagination], products };
  },
  components: { ProductSliderCard, Swiper, SwiperSlide },
};
</script>

<template>
  <main class="content__wrapper">
    <div class="section__header">
      <h1 class="section__title text-4xl">Destaques</h1>
      <RouterLink to="/" class="link">CONFERIR TUDO</RouterLink>
    </div>
    <swiper
      :pagination="{ dynamicBullets: true }"
      :navigation="true"
      :modules="modules"
      :slides-per-view="3.8"
      :space-between="30"
      class="mainSlider mediaSlider"
    >
      <swiper-slide v-for="(product, index) in products" :key="index">
        <!-- Product card -->
        <ProductSliderCard :product="product" />
        <!-- Product card -->
      </swiper-slide>
    </swiper>
  </main>
</template>

<style scoped>
main {
  margin-bottom: 10rem;
}
.section__header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 3rem;
}
.section__title {
  font-weight: 600;
}
.link {
  align-self: flex-end;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-color: #cf5d00;
}
</style>
