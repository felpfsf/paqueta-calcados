<script lang="ts">
import ProductSliderCard from "@/components/ProductSliderCard.vue";
import { useNewCartStore } from "@/stores/newCartStore";
import { useProductsStore } from "@/stores/product";
import {
calculateProductDiscount,
discountedPrice,
formatCurrency,
getInstallments,
} from "@/utils/price-helpers";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ProductDetails",
  setup() {
    const cartStore = useNewCartStore();
    const productsStore = useProductsStore();
    const { error, product, suggestedProducts } = storeToRefs(productsStore);
    const route = useRoute();
    // Form
    const selectedSize = ref<number | null>(null);
    const selectedQuantity = ref<number | null>(null);
    const quantityOptions = [1, 2, 3, 4, 5];

    const fetchProduct = async () => {
      const { id } = route.params;
      await productsStore.fetchProduct(id);
    };

    onMounted(fetchProduct);
    onMounted(productsStore.fetchProducts);

    const handlePurchase = () => {
      const data = {
        product: product.value,
        size: selectedSize.value,
        quantity: selectedQuantity.value,
      };
      if (data.product && data.size && data.quantity) {
        cartStore.addItem({
          product: data.product,
          quantity: data.quantity,
          size: data.size,
        });
        console.log(data);
      } else {
        console.error("Selecione um producto");
      }
    };

    const handleDeleteFromCart = () => {
      const data = {
        product: product.value,
        size: selectedSize.value,
        quantity: selectedQuantity.value,
      };
      if (data.product && data.quantity && data.size) {
        cartStore.removeItem({
          product: data.product,
          quantity: data.quantity,
          size: data.size,
        });
        console.log(data);
      } else {
        console.error("Não foi possível remover o produto");
      }
    };

    return {
      error,
      product,
      products:suggestedProducts,
      sizes: Array.from({ length: 7 }, (_, i) => i + 34),
      quantityOptions,
      selectedSize,
      selectedQuantity,
      formatCurrency,
      calculateProductDiscount,
      discountedPrice,
      getInstallments,
      handlePurchase,
      handleDeleteFromCart,
    };
  },
  components: { ProductSliderCard },
});
</script>

<template>
  <main class="content__wrapper" style="margin-block: 4rem">
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <div
        style="
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-bottom: 4rem;
        "
      >
        <img :src="product?.image" alt="" />
        <div style="display: flex; flex-direction: column; gap: 3rem">
          <div>
            <h1 class="text-4xl" style="font-weight: 600">
              {{ product?.name }}
            </h1>
            <span class="text-xs" style="opacity: 0.8"
              >Código do produto: {{ product?.id }}</span
            >
          </div>
          <!-- Price container -->
          <div>
            <div style="display: flex; align-items: center; gap: 1rem">
              <h2 class="price__original">
                {{ formatCurrency(product?.price.value) }}
              </h2>
              <span class="discount--badge text-sm">
                {{ calculateProductDiscount(product?.price.discount) }}% de
                desconto
              </span>
            </div>
            <div>
              <h2 class="price__main">
                {{
                  formatCurrency(
                    discountedPrice(
                      product?.price.value,
                      product?.price.discount
                    )
                  )
                }}
              </h2>
              <p style="opacity: 0.6">
                ou 9x
                {{ formatCurrency(getInstallments(product?.price.value)) }}
              </p>
            </div>
          </div>
          <!-- Size and Quantity selection -->
          <div style="display: flex; flex-direction: column; gap: 1.25rem">
            <h2>Escolha uma numeração:</h2>
            <div style="display: flex; align-items: center; gap: 0.75rem">
              <div
                v-for="(size, index) in sizes"
                :key="index"
                class="sizes--block"
                :class="{
                  'sizes--unavailable': !product?.sizes.includes(size),
                  'size--selected': selectedSize === size,
                }"
              >
                <input
                  type="radio"
                  :name="'size-radio' + index"
                  :id="'size-radio' + index"
                  :value="size"
                  :disabled="!product?.sizes.includes(size)"
                  :aria-label="
                    !product?.sizes.includes(size)
                      ? 'Produto indisponível'
                      : 'null'
                  "
                  v-model="selectedSize"
                  style="visibility: hidden; width: 0; height: 0"
                />
                <label :for="'size-radio' + index" style="cursor: pointer">
                  {{ size }}
                </label>
                <span
                  class="sizes--slash"
                  v-if="!product?.sizes.includes(size)"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <h3 style="opacity: 0.6">Guia de tamanhos</h3>
            <div>
              <label for="quantity">Escolha quantas unidades: </label>
              <select
                id="quantity"
                v-model="selectedQuantity"
                style="border: 1px solid; border-radius: 0.375rem"
              >
                <option
                  v-for="quantity in quantityOptions"
                  :key="quantity"
                  :value="quantity"
                >
                  {{ quantity }}
                </option>
              </select>
            </div>
          </div>
          <button class="button gradient--button" @click="handlePurchase">
            Comprar
          </button>
          <button class="button gradient--button" @click="handleDeleteFromCart">
            Remover do Carrinho(teste)
          </button>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <h1 class="description__title">DESCRIÇÃO DO PRODUTO</h1>
        <p class="text-xl">
          {{ product?.description }}
        </p>
      </div>
      <div class="divider" style="margin-block: 6.25rem" />
      <!-- Suggestions -->
      <div
        style="
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        "
      >
        <div v-for="product in products" :key="product.id">
          <ProductSliderCard :product="product" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.sizes--slash {
  width: 1px;
  height: 100%;
  background: #000;
  position: absolute;
  transform: rotate(45deg);
}
.sizes--block {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--clr-gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.sizes--unavailable {
  opacity: 0.6;
  cursor: not-allowed;
}
.size--selected {
  background: var(--clr-accent);
  color: var(--clr-neutral);
  border: transparent;
}
.discount--badge {
  color: var(--clr-neutral);
  font-weight: 600;
  text-transform: uppercase;
  padding-inline: 0.5rem;
  background: var(--clr-success);
  border-radius: 6px;
  display: flex;
  align-items: center;
}
.price__main {
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
  color: var(--clr-gray-900);
}
.price__original {
  text-decoration: line-through;
  opacity: 0.8;
}
.description__title {
  color: var(--clr-gray-900);
  font-size: 40px;
  font-weight: 600;
  line-height: 56px;
}
</style>
