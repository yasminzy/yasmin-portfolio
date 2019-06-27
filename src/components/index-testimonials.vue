<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <div>
        <h2 data-aos="fade">3 happy clients</h2>

        <p data-aos="slide-down">
          <strong>Lorem ipsum dolor sit amet consectetur.</strong>
        </p>

        <blockquote>
          <p data-aos="slide-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, corporis. Expedita numquam minus enim placeat
            reprehenderit, nulla magnam fugit, similique facere voluptatum
            accusantium illum, animi repudiandae assumenda itaque! Sunt,
            delectus!
          </p>

          <footer class="blockquote-footer" data-aos="slide-right">
            <cite>Source Title</cite> / Lorem, ipsum.
          </footer>
        </blockquote>
      </div>

      <div>
        <img
          v-lazy="require('../assets/img/testimonials/daenerys-targaryen.jpeg')"
          alt="Daenerys Targaryen"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  background-color: var(--grey-100);
}

.content-wrapper {
  display: grid;
  grid-gap: calc(var(--space) * 2);

  @media (--lg) {
    grid-template-columns: 2fr 1fr;
  }
}

blockquote {
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  & p {
    color: var(--grey);
  }
}

cite {
  font-style: normal;
  font-weight: bold;
}
</style>
