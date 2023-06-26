import { ShoesProps } from "@/types/shoes.models";
import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    products: [] as ShoesProps[],
  }),
  getters: {
    items: (state): ShoesProps[] => state.products,
  },
  actions: {
    addToFavorites(product: ShoesProps) {
      this.items.push(product);
      console.log("Item adicionado aos favoritos", product.name);
      console.log("Lista Adicionados ->", this.items);
    },
    removeFromFavorites(product: ShoesProps) {
      // this.products.filter((product) => product.id !== product.id);
      const index = this.items.findIndex((item) => item.id === product.id);
      if (index !== -1) this.items.splice(index, 1);
      console.log("Item removido dos favoritos", product.name);
      console.log("Lista Removidos ->", this.items);
    },
  },
});
