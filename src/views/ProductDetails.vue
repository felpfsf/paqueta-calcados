<script lang="ts">
import api from "@/services/api";
import { ShoesProps } from "@/types/shoes.models";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Product Details",
  setup() {
    const product = ref<ShoesProps | null>(null);
    const route = useRoute();

    const fetchProduct = async () => {
      try {
        const { id } = route.params;
        console.log(id);
        const response = await api.get(`/shoe/${id}`);
        console.log("Produto -> ", response.data[0]);
        product.value = response.data[0];
      } catch (error) {
        console.error(error);
      }
    };

    const formatCurrency = (value: number | undefined) => {
      if (value === undefined || value === null) {
        return "";
      }

      const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      return formatter.format(value);
    };

    const productDiscountCalc = (value: number | undefined) => {
      if (!value) return;
      return value * 100;
    };

    const discountedPrice = (value: number | undefined) => {
      const discount = product.value?.price.discount;
      if (!value || !discount) return;
      return value - value * discount;
    };

    const getInstallments = (value: number | undefined) => {
      const INSTALLMENTS = 9;
      if (!value) return;
      return value / INSTALLMENTS;
    };

    onMounted(fetchProduct);

    return {
      product,
      formatCurrency,
      productDiscountCalc,
      discountedPrice,
      getInstallments,
    };
  },
});
</script>

<template>
  <main class="content__wrapper" style="margin-block: 4rem">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr)">
      <img :src="product?.image" alt="" />
      <div style="display: flex; flex-direction: column; gap: 3rem">
        <div>
          <h1 class="text-4xl" style="font-weight: 600">{{ product?.name }}</h1>
          <span class="text-xs" style="opacity: 0.8">Código do produto: {{ product?.id }}</span>
        </div>
        <!-- Price container -->
        <div>
          <div style="display: flex; align-items: center; gap: 1rem">
            <h2 class="price__original">
              {{ formatCurrency(product?.price.value) }}
            </h2>
            <span class="discount--badge text-sm">
              {{ productDiscountCalc(product?.price.discount) }}% de desconto
            </span>
          </div>
          <div>
            <h2 class="price__main">
              {{ formatCurrency(discountedPrice(product?.price.value)) }}
            </h2>
            <p style="opacity: 0.6">
              ou 9x {{ formatCurrency(getInstallments(product?.price.value)) }}
            </p>
          </div>
        </div>
        <!-- Numbers -->
        <div>
          <h2>Escolha uma numeração</h2>
          <div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
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
</style>
