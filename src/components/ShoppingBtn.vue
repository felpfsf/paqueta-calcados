<script setup lang="ts">
import { ShoppingBag } from "lucide-vue-next";
</script>

<template>
  <div class="main__wrapper">
    <div class="icon__wrapper">
      <ShoppingBag />
      <span class="item__tooltip text-xs">1</span>
    </div>
    <p class="label text-sm">Sacola</p>
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
  font-weight:500;
}

</style>
