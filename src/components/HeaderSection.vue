<script setup lang="ts">
import { Headphones, MapPin } from "lucide-vue-next";
import ShoppingBtn from "./ShoppingBtn.vue";
import FavoriteBtn from "./FavoriteBtn.vue";
</script>

<template>
  <header>
    <div class="header__top">
      <div class="content__wrapper header__top-content">
        <h1 class="header__top-logo">Loja de Calçados e Moda Online</h1>
        <ul class="flex-list">
          <li class="list__item text-sm">
            <Headphones />
            <span>Fale conosco</span>
          </li>
          <li class="list__item text-sm">
            <MapPin />
            <span>Encontrar uma loja física</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content__wrapper header__bottom">
      <img src="../assets/images/logo.png" alt="" />
      <nav class="header__navigation">
        <ul class="flex-list">
          <li>
            <FavoriteBtn />
          </li>
          <li>
            <ShoppingBtn />
          </li>
        </ul>
      </nav>
    </div>
    <nav class="content__wrapper header__secondary-navigation">
      <ul class="header__secondary-menu">
        <li class="header__secondary-menu-item">Novidades</li>
        <li class="header__secondary-menu-item">Feminino</li>
        <li class="header__secondary-menu-item">Masculino</li>
        <li class="header__secondary-menu-item">Paquetá Esportes</li>
        <li class="header__secondary-menu-item">Outlet</li>
        <li class="header__secondary-menu-item">Cashback</li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header__top {
  color: var(--clr-neutral);
  background: linear-gradient(92.46deg, #ff8a29 31.2%, #cf5d00 71.97%);
  padding-block: .75rem;
  padding-inline: .5rem;
  display: none;
}
.header__top-logo {
  font-size: 0.875rem;
}
.header__top-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-list {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.header__bottom {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list__item {
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: .75rem;
}

.header__secondary-navigation {
  margin-top: 2.75rem;
}

.header__secondary-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 960px) {
  .header__top {
    display: block;
  }
}
</style>
