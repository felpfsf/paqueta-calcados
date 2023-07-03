<script lang="ts">
import { useNewCartStore } from "@/stores/newCartStore";
import { discountedPrice, formatCurrency } from "@/utils/price-helpers";
import { ShoppingBag, Trash2, X } from "lucide-vue-next";
import { storeToRefs } from "pinia";
import { ref } from "vue";
export default {
  name: "ShoppingCart",
  setup() {
    const cartStore = useNewCartStore();
    const { itemsInCart, cartItems } = storeToRefs(cartStore);
    let isMenuActive = ref(false);
    let subTotal = ref<number>(0);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
      console.log(isMenuActive.value);
    };

    subTotal.value = cartItems.value.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          discountedPrice(
            item.product.price.value,
            item.product.price.discount
          )!,
      0
    );

    return {
      isMenuActive,
      itemsInCart,
      cartItems,
      cartStore,
      subTotal,
      toggleMenu,
      discountedPrice,
      formatCurrency,
    };
  },
  components: { ShoppingBag, X, Trash2 },
};
</script>

<template>
  <button class="main__wrapper" @click="toggleMenu">
    <div class="icon__wrapper">
      <ShoppingBag :class="{ 'cart--active': itemsInCart > 0 }" />
      <span class="item__tooltip text-xs" v-if="itemsInCart > 0">{{
        itemsInCart
      }}</span>
    </div>
    <p class="label text-sm">Sacola</p>
  </button>
  <div class="cart__menu" :class="{ 'is-active': isMenuActive }">
    <button class="cart__close-btn" @click="toggleMenu">
      <X />
    </button>
    <div>
      <h1 class="cart__title text-lg">Seu carrinho:</h1>
      <div v-if="cartItems.length <= 0" class="cart__empty">
        <img src="../assets/images/shopping_bag.png" alt="" />
        <h1>Sem itens no carrinho</h1>
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.product.id">
          <div class="cart__product-card">
            <img :src="item.product.image" :alt="item.product.name" />
            <div>
              <h1 class="text-xl">{{ item.product.name }}</h1>
              <p class="text-xs">Código do produto: {{ item.product.id }}</p>
              <ul class="product__info-list">
                <li><span>Numeração:</span> {{ item.size }}</li>
                <li><span>Quantidade:</span> {{ item.quantity }}</li>
                <li>
                  <span>Preço:</span>
                  {{
                    formatCurrency(
                      discountedPrice(
                        item.product.price.value,
                        item.product.price.discount
                      )
                    )
                  }}
                </li>
              </ul>
            </div>
            <button class="text-sm" @click="cartStore.removeItem(item)">
              <Trash2 />
              <span>Remover</span>
            </button>
          </div>
        </div>
        <div class="cart__subtotal">
          <h2 class="text-2xl">Subtotal: {{ formatCurrency(subTotal) }}</h2>
        </div>
      </div>
    </div>
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
.cart--active {
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
.cart__menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  max-width: 50%;
  width: 100%;
  background: var(--clr-neutral);
  z-index: 10;
  padding: 2rem 1rem;
  box-shadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px";
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  overflow: auto;
}
.cart__menu.is-active {
  animation-name: slideInRight;
}
.cart__menu:not(.is-active) {
  animation-name: slideOutRight;
  pointer-events: none;
}
.cart__close-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.cart__title {
  position: relative;
}
.cart__title::after {
  content: "";
  background: red;
  position: absolute;
  bottom: 0;
  left: -1rem;
  height: 1px;
  width: 15%;
}
.cart__product-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.25fr;
  border-bottom: 1px solid rgba(207, 93, 0, 0.5);
  margin-bottom: 2rem;
}
.cart__product-card > img {
  max-width: 256px;
}
.cart__product-card h1 {
  font-weight: 700;
}
.product__info-list {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.product__info-list > li > span {
  font-weight: 700;
}
.cart__product-card button {
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 0.75rem;
}
.cart__subtotal {
  text-align: right;
  font-weight: 700;
}
.cart__empty {
  margin-top: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cart__empty img {
  max-width: 8rem;
}
</style>
