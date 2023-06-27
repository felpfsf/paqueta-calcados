<script lang="ts">
import { useCartStore } from "@/stores/cartStore";
import { useFavoriteStore } from "@/stores/favoriteStore";
import { ShoesProps } from "@/types/shoes.models";

import { Heart } from "lucide-vue-next";
import { computed } from "vue";

export default {
  name: "ProductSliderCard",
  props: {
    product: {
      type: Object as () => ShoesProps,
      required: true,
    },
  },
  components: { Heart },
  setup(props) {
    const product = props.product;
    const cartStore = useCartStore();
    const favoriteStore = useFavoriteStore();

    const addProductToFavorite = () => {
      favoriteStore.addToFavorites(product);
    };

    const toggleFavorite = () => {
      if (isFavorited.value) {
        favoriteStore.removeFromFavorites(product);
      } else {
        favoriteStore.addToFavorites(product);
      }
    };

    const addItemToCart = () => {
      cartStore.addItem(product);
    };

    const isFavorited = computed(() => {
      const favoriteItem = favoriteStore.favoriteItems;
      return favoriteItem.some((item) => item.id === product.id);
    });

    return { addItemToCart, addProductToFavorite, isFavorited, toggleFavorite };
  },
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
    <RouterLink
      class="button"
      :class="{ 'sold--out': product.soldout, 'gradient--button': !product.soldout }"
      :to="`/product/${product.id}`"
    >
      {{ product.soldout ? "Me Avise Quando Chegar" : "Comprar" }}
    </RouterLink>
    <button class="favorite" @click="toggleFavorite">
      <Heart :class="{ 'favorite--active': isFavorited }" />
    </button>
    <span v-if="product.soldout" class="is-soldout text-sm"
      >Produto Esgotado</span
    >
  </div>
</template>

<style scoped>
.product__card {
  position: relative;
  max-width: 19rem;
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  top: 10%;
  right: 8%;
}
.favorite:hover svg {
  fill: var(--clr-danger);
  color: var(--clr-danger);
}
.favorite--active {
  fill: var(--clr-danger);
  color: var(--clr-danger);
}
.is-soldout {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  background: var(--clr-accent);
  color: var(--clr-neutral);
  /* font-size: 14px; */
  padding: 8px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
