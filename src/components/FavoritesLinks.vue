<script lang="ts">
import { useFavoriteStore } from "@/stores/favoriteStore";
import { Heart } from "lucide-vue-next";
import { storeToRefs } from "pinia";

export default {
  name: "FavoritesLinks",
  setup() {
    const favoriteStore = useFavoriteStore();
    const { favoriteItemsCount } = storeToRefs(favoriteStore);

    return { favoriteItemsCount };
  },
  components: { Heart },
};
</script>

<template>
  <div class="main__wrapper">
    <div class="icon__wrapper">
      <Heart :class="{'favorite--active': favoriteItemsCount > 0}"/>
      <p class="item__tooltip text-xs" v-if="favoriteItemsCount > 0">
        {{ favoriteItemsCount }}
      </p>
    </div>
    <p class="label text-sm">Lista de desejos</p>
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
.favorite--active {
  fill: var(--clr-accent);
  color: var(--clr-accent);
}
.item__tooltip {
  font-weight: 600;
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
