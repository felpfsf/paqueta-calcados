<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterSection from "./components/FooterSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
</script>

<template>
  <HeaderSection />
  <router-view v-slot="{Component}">
  <transition name="slide" mode="out-in">
    <component :is='Component' :key="$route.path"></component>  
  </transition></router-view>
  <FooterSection />
</template>

<style>
.slide-enter-active,
.slide-leave-active{
  transition: opacity .3s, transform .3s;
  /* transition: opacity .3s; */
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>