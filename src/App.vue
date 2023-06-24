<script setup lang="ts">
import { RouterView } from "vue-router";
import FooterSection from "./components/FooterSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
</script>

<template>
  <HeaderSection />
  <RouterView />
  <FooterSection />
</template>
