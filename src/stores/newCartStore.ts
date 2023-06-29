import { ShoesProps } from "@/types/shoes.models";
import { defineStore } from "pinia";

const CART_STORAGE_KEY = "@paqueta-store: shopping-cart-v1.0.0";

interface CartItem {
  product: ShoesProps;
  size: number;
  quantity: number;
}

const getCartFromLocalStorage = (): CartItem[] => {
  const savedItems = localStorage.getItem(CART_STORAGE_KEY);
  return savedItems ? JSON.parse(savedItems) : [];
};

export const useNewCartStore = defineStore("newCart", {
  state: () => ({
    cartItems: getCartFromLocalStorage(),
  }),
  getters: {
    itemsInCart: (state): number =>
      state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
  },
  actions: {
    addItem(item: CartItem) {
      const existingProduct = this.cartItems.find(
        (it) => it.product.id === item.product.id && it.size === item.size
      );

      if (existingProduct) {
        existingProduct.quantity += item.quantity;
      } else {
        this.cartItems.push(item);
      }

      this.saveItemsToLocalStorage();
      console.log("Produto adicionado ao carrinho", item);
      console.log("Lista de productos no carrinho ->", this.cartItems.length);
      console.log("Total de itens ->", this.itemsInCart);
    },
    removeItem(item: CartItem) {
      const index = this.cartItems.findIndex(
        (it) => it.product.id === item.product.id && it.size === item.size
      );
      if (index !== -1) this.cartItems.splice(index, 1);
      this.saveItemsToLocalStorage();
      console.log("Produto removido do carrinho", item);
      console.log(
        "Lista atualizada de productos no carrinho ->",
        this.cartItems.length
      );
      console.log("Total de itens ->", this.itemsInCart);
    },
    saveItemsToLocalStorage() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems));
    },
  },
});
