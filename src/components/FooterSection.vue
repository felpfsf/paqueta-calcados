<script setup lang="ts">
import BottomNav from './BottomNav.vue';
</script>

<template>
  <BottomNav />
  <footer class="footer">
    <h1 class="footer__title">UMA EMPRESA DO GRUPO</h1>
    <img src="../assets/images/logo_footer.png" alt="" />
  </footer>
</template>

<style scoped>
.footer {
  padding: 1rem;
  background-color: var(--clr-gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.footer__title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--clr-neutral);
}
</style>
