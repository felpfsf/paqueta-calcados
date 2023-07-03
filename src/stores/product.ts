import api from "@/services/api";
import { ShoesProps } from "@/types/shoes.models";
import { AxiosError } from "axios";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    suggestedProducts: [] as ShoesProps[],
    sliderProducts: [] as ShoesProps[],
    product: null as ShoesProps | null,
    error: "",
  }),
  actions: {
    async fetchProducts() {
      try {
        this.error = "";
        const response = await api.get("/shoes");
        const productData = response.data;

        const sliderProducts = productData
          .slice()
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.ceil(productData.length / 2));
          
          const suggestedProducts = productData
          .slice()
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

        this.sliderProducts = sliderProducts;
        this.suggestedProducts = suggestedProducts;
      } catch (e) {
        const error = e as AxiosError;
        console.error(error);
        this.error = `Erro ao carregar os produtos - ${error.message}`;
      }
    },
    async fetchProduct(id: string | string[]) {
      try {
        this.error = "";
        const response = await api.get(`/shoe/${id}`);
        const productData = response.data[0];
        const randomSizes = this.generateRandomSizes();
        productData.sizes = randomSizes;
        this.product = productData;
      } catch (e) {
        const error = e as AxiosError;
        console.error(error);
        this.error = `Erro ao carregar os produtos - ${error.message}`;
      }
    },
    generateRandomSizes() {
      const randomLength = Math.floor(Math.random() * 7) + 1;
      return Array.from({ length: randomLength }, (_, i) => i + 34);
    },
  },
});
