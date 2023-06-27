import { ShoesProps } from "@/types/shoes.models";
import { defineStore } from "pinia";

const FAVORITE_STORAGE_KEY = "@paqueta-store: favorites-v1.0.0";

const getFavoritesFromLocalStorage = (): ShoesProps[] => {
  const savedFavorites = localStorage.getItem(FAVORITE_STORAGE_KEY);
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    favoriteItems: getFavoritesFromLocalStorage(),
  }),
  getters: {
    favoriteItemsCount: (state) => state.favoriteItems.length,
  },
  actions: {
    addToFavorites(product: ShoesProps) {
      this.favoriteItems.push(product);
      this.saveFavoritesToLocalStorage();
      console.log("Item adicionado aos favoritos", product.name);
      console.log("Lista Adicionados ->", this.favoriteItems);
      console.log("Total de favoritos ->", this.favoriteItemsCount);
    },
    removeFromFavorites(product: ShoesProps) {
      // this.products.filter((product) => product.id !== product.id);
      const index = this.favoriteItems.findIndex(
        (item: { id: string }) => item.id === product.id
      );
      if (index !== -1) this.favoriteItems.splice(index, 1);
      this.saveFavoritesToLocalStorage();
      console.log("Item removido dos favoritos", product.name);
      console.log("Lista Removidos ->", this.favoriteItems);
      console.log("Total de favoritos ->", this.favoriteItemsCount);
    },
    saveFavoritesToLocalStorage() {
      localStorage.setItem(
        FAVORITE_STORAGE_KEY,
        JSON.stringify(this.favoriteItems)
      );
    },
  },
});
