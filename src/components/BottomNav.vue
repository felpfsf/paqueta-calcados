<template>
  <section class="content__wrapper section__wrapper">
    <!-- 1 -->
    <div class="section__column section__column-institucional">
      <h1 class="section__title">Institucional</h1>
      <ul class="section__list">
        <li>Quem Somos</li>
        <li>Nossas Lojas</li>
        <li>Soluções Corporativas</li>
        <li>Política de Privacidade</li>
        <li>Contrato de Compra e Venda</li>
        <li>Crédito Pessoal</li>
      </ul>
    </div>
    <!-- 2 -->
    <div class="section__column section__column-ajuda">
      <h1 class="section__title">Ajuda e Suporte</h1>
      <ul class="section__list">
        <li>Troca e Devolução</li>
        <li>2ª Via do Boleto</li>
        <li>Detalhamento de Fatura</li>
        <li>Entregas</li>
        <li>Meus Pedidos</li>
        <li>Dúvidas Frequentes</li>
        <li>Status do Pedido</li>
      </ul>
    </div>
    <!-- 3 -->
    <div class="section__column section__column-space">
      <div>
        <h1 class="section__title">Atendimento</h1>
        <p style="font-size: 0.875rem; opacity: 0.6">Fale Conosco</p>
      </div>
      <div>
        <h1 class="section__title">Endereço</h1>
        <p style="font-size: 0.875rem; opacity: 0.6">
          Rua Antonio Frederico Ozanan, 2601 <br />Canoas - RS | CNPJ:
          01.098.983/0175-02
        </p>
      </div>
      <div>
        <h1 class="section__title">Trabalhe Conosco</h1>
        <p style="font-size: 0.875rem; opacity: 0.6">
          Venha crescer com a Paquetá!
        </p>
      </div>
    </div>
    <!-- 4 -->
    <div class="section__column section__column-space">
      <div style="">
        <h1 class="section__title">Formas de Pagamento</h1>
        <div
          class="section__payment-grid"
          style="display: grid; grid-template-columns: repeat(3, 1fr)"
        >
          <span>Card</span>
          <span>Card</span>
          <span>Card</span>
          <span>Card</span>
          <span>Card</span>
          <span>Card</span>
          <span>Card</span>
          <span>Card</span>
          <span>Card</span>
        </div>
      </div>
      <div>
        <h1 class="section__title">Redes Sociais</h1>
        <div class="section__social-media" style="display: flex; gap: 1rem">
          <span class="ball"></span>
          <span class="ball"></span>
          <span class="ball"></span>
          <span class="ball"></span>
          <span class="ball"></span>
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div
      class="section__column section__column-premios"
      style="
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <h1 class="section__title">Prêmios e Certificações</h1>
      <h1 class="section__title">Segurança</h1>
    </div>
  </section>
</template>

<style scoped>
.section__wrapper {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  /* justify-content: space-between; */
  height: 272px;
}
.section__title {
  font-size: 1.125rem;
  font-weight: 700;
}
.section__column {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.section__list {
  font-size: 0.875rem;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.section__column-space {
  justify-content: space-between;
}
.ball {
  width: 1.5rem;
  height: 1.5rem;
  background-color: red;
  border-radius: 1.5rem;
}
</style>
