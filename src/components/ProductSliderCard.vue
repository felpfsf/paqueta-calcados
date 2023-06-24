<script lang="ts">
import { ShoesProps } from "@/types/shoes.models";

import { Heart } from "lucide-vue-next";
export default {
  name: "ProductSliderCard",
  props: {
    product: {
      type: Object as () => ShoesProps,
      required: true,
    },
  },
  components: { Heart },
};
</script>

<template>
  <div class="product__card">
    <img :src="product.image" :alt="product.name" />
    <h1 class="product__name text-sm">{{ product.name }}</h1>
    <div class="product__price-container">
      <h2 class="text-xl product__value">R$ {{ product.price.value }}</h2>
      <h4 class="text-xs product__sub">OU 9X R$ 16,66</h4>
    </div>
    <button class="button">Comprar</button>
    <button class="favorite">
      <Heart />
    </button>
  </div>
</template>

<style scoped>
.product__card {
  position: relative;
  max-width: 19rem;
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.1);
}
.product__name {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product__price-container {
  margin-block: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.product__value {
  font-weight: 700;
}
.product__sub {
  opacity: 0.6;
}
.favorite {
  position: absolute;
  top: 5%;
  right: 10%;
}
.favorite:hover svg {
  fill: red;
  color: transparent;
  transition: all 0.2s ease-in-out;
}
</style>
