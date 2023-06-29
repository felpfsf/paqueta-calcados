<script lang="ts">
import { useNewCartStore } from "@/stores/newCartStore";
import { ShoppingBag } from "lucide-vue-next";
import { storeToRefs } from "pinia";
export default {
  name: "ShoppingCart",
  setup() {
    const cartStore = useNewCartStore()
    const {itemsInCart} = storeToRefs(cartStore)

    return { itemsInCart }
  },
  components: { ShoppingBag },
};
</script>

<template>
  <div class="main__wrapper">
    <div class="icon__wrapper">
      <ShoppingBag :class="{'cart--active': itemsInCart > 0}"/>
      <span class="item__tooltip text-xs" v-if="itemsInCart > 0">{{itemsInCart}}</span>
    </div>
    <p class="label text-sm">Sacola</p>
  </div>
</template>

<style scoped>
.main__wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart--active{
  color: var(--clr-accent);
}
.item__tooltip {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(139deg, #f99500 0%, #ffcd29 100%);
  border-radius: 100%;
  width: 1rem;
  height: 1rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}
.label {
  line-height: 0;
  font-weight: 500;
}
</style>
