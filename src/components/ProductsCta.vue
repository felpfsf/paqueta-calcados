<template>
  <section class="content__wrapper section__wrapper">
    <div class="section__row">
      <div class="section__image section__image-fem">
        <h1>CALÇADOS FEMININOS</h1>
      </div>
      <div class="section__cta section__cta-fem">
        <p>
          Escolher o seu sapato favorito entre nossa
          <strong>variedade de modelos e cores</strong> não será uma tarefa fácil, mas o que uma
          mulher não consegue fazer?
        </p>
        <a href="#" class="button gradient--button link-section">Conferir</a>
      </div>
    </div>
    <!-- 2 -->
    <div class="section__row section__row-masc">
      <div class="section__image section__image-masc">
        <h1>CALÇADOS MASCULINOS</h1>
      </div>
      <div class="section__cta section__cta-masc">
        <p>
          Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho
          e até mesmo para praticar esportes!
        </p>
        <a href="#" class="button gradient--button link-section">Conferir</a>
      </div>
    </div>
  </section>
</template>


<style scoped>
.section__wrapper {
  margin-block: 8rem;
  display: flex;
  flex-direction: column;
  gap: 6.5rem;
}
.section__row {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
}
.section__row-masc {
  flex-direction: row-reverse;
}
.section__cta {
  width: 36rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}
.section__cta-fem {
  font-size: 22px;
  text-align: end;
  align-items: end;
}
.section__cta-masc {
  font-size: 22px;
  text-align: start;
  align-items: start;
}
.section__image {
  position: relative;
  width: 40rem;
  height: 39rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 6px;
  padding: 4rem;
  display: flex;
  align-items: end;
}
.section__image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.section__image h1 {
  color: var(--clr-neutral);
  z-index: 10;
  font-size: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.section__image-fem {
  background: url(../assets/images/woman_shoes.png);
}
.section__image-fem::before {
  background: linear-gradient(90deg, #f57002 3.3%, rgba(245, 112, 2, 0) 56.06%);
}
.section__image-masc {
  background: url(../assets/images/man_shoes.png);
}
.section__image-masc::before {
  background: linear-gradient(-90deg, #f57002 3.3%, rgba(245, 112, 2, 0) 56.06%);
}
.section__image-masc h1 {
  text-align: end;
}
</style>