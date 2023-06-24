<script setup lang="ts">
import {
  BadgePercent,
  CreditCard,
  Gift,
  MapPin,
  Repeat,
} from "lucide-vue-next";
</script>

<template>
  <div
    style="
      background: linear-gradient(92.46deg, #ff8a29 31.2%, #cf5d00 71.97%);
      width: 100%;
      padding: 50px 0;
    "
  >
    <div class="content__wrapper">
      <ul class="hero__services-list">
        <li class="hero__services-list-item">
          <CreditCard />
          <span> PAGUE EM ATÉ 10X <strong>SEM JUROS</strong>* </span>
        </li>
        <li class="hero__services-list-item">
          <MapPin />
          <span>
            <strong>RETIRE GRÁTIS</strong><br />
            EM NOSSAS LOJAS
          </span>
        </li>
        <li class="hero__services-list-item">
          <BadgePercent />
          <span>
            <strong>GANHE 20% DE DESCONTO*</strong>
          </span>
        </li>
        <li class="hero__services-list-item">
          <Gift />
          <span>
            <strong>FRETE GRÁTIS</strong> PARA REGIÕES SUL E SUDESTE*
          </span>
        </li>
        <li class="hero__services-list-item">
          <Repeat />
          <span> PRIMEIRA TROCA GRÁTIS </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.hero__services-list {
  color: var(--clr-neutral);
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.hero__services-list-item {
  width: 14rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.hero__services-list-item svg {
  width: 2.875rem;
  height: 2.875rem;
}

.hero__services-list-item:last-of-type svg {
  width: 2.5rem;
  height: 2.5rem;
  transform: rotate(90deg);
}
</style>
