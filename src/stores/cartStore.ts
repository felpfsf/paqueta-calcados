import { ShoesProps } from "@/types/shoes.models";
import { defineStore } from "pinia";

interface CartState {
  products: ShoesProps[];
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [] as ShoesProps[],
  }),
  getters: {
    items: (state): ShoesProps[] =>
      state.products.reduce((items, product) => {
        const existingProduct = items.find((it) => it.id === product.id);

        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          items.push({ ...product, quantity: 1 });
        }

        return items;
      }, [] as ShoesProps[]),
  },
  actions: {
    addItem(product: ShoesProps) {
      this.products.push(product);
      console.log("Produto adicionado ao carrinho", product);
      console.log("Lista de productos no carrinho ->", this.items)
    },
    removeItem(product: ShoesProps) {
      // this.products.filter((it) => it.id !== product.id);
      const index = this.products.findIndex(item => item.id === product.id)
      if(index !== -1) this.items.splice(index, 1);
      console.log("Produto removido do carrinho", product);
      console.log("Lista atualizada de produtos no carrinho ->", this.items)
    },
  },
});
