<script setup lang="ts">
import HeroServices from './HeroServices.vue';
</script>
<template>
  <section class="hero">
      <div class="hero__content">
        <div class="hero__title">
          <h1 class="hero__main-title">Tênis Casual</h1>
          <h2 class="hero__subtitle text-6xl">Masculino</h2>
        </div>
        <div class="hero__price">
          <h6 class="hero__price-label">A partir de </h6>
          <h3 class="hero__price-value text-5xl">R$ 79,99</h3>
        </div>
        <a class="hero__cta" href="#">APROVEITE</a>
      </div>
    </section>
    <HeroServices />
</template>

<style scoped>
section.hero {
  width: 100%;
  height: 622px;
  padding: 4rem;
  background: url(../assets/images/hero_01.png) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: end;
}

.hero__content {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.hero__title {
  display: flex;
  flex-direction: column;
}
.hero__main-title {
  font-size: 5rem;
  font-weight: 600;
  line-height: 1;
}
.hero__subtitle {
  color: var(--clr-accent);
}
.hero__price {
  display: flex;
  flex-direction: column;
}
.hero__price-label {
  opacity: 0.6;
}
.hero__price-value {
  font-weight: 700;
}
.hero__cta {
  color: white;
  background: linear-gradient(122.71deg, #f99500 53.34%, #ffcd29 133.06%);
  border-radius: 6px;
  padding: 1rem 6rem;
  text-align: center;
  align-self: flex-start;
}
</style>