import { ShoesProps } from "@/types/shoes.models";
import { defineStore } from "pinia";

const CART_STORAGE_KEY = "@paqueta-store: shopping-cart-v1.0.0";

interface CartItem extends ShoesProps {
  quantity: number;
}

const getCartFromLocalStorage = (): CartItem[] => {
  const savedItems = localStorage.getItem(CART_STORAGE_KEY);
  return savedItems ? JSON.parse(savedItems) : [];
};

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: getCartFromLocalStorage(),
  }),
  getters: {
    items: (state): CartItem[] =>
      state.products.reduce((items, product) => {
        const existingProduct = items.find((it) => it.id === product.id);

        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          items.push({ ...product, quantity: 1 });
        }

        return items;
      }, [] as CartItem[]),
  },
  actions: {
    addItem(product: ShoesProps) {
      const cartItem = { ...product, quantity: 1 };
      this.products.push(cartItem);
      this.saveItemstoLocalStorage()
      console.log("Produto adicionado ao carrinho", product);
      console.log("Lista de productos no carrinho ->", this.items);
    },
    removeItem(product: ShoesProps) {
      // this.products.filter((it) => it.id !== product.id);
      const index = this.products.findIndex((item) => item.id === product.id);
      if (index !== -1) this.items.splice(index, 1);
      this.saveItemstoLocalStorage()
      console.log("Produto removido do carrinho", product);
      console.log("Lista atualizada de produtos no carrinho ->", this.items);
    },
    saveItemstoLocalStorage() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    },
  },
});
