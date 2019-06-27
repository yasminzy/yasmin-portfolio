<template>
  <div class="content-wrapper">
    <ul>
      <li
        v-for="(item, index) in projects"
        v-bind:key="index"
        data-aos="zoom-in"
      >
        <img
          v-lazy="require('../assets/img/logos/' + item.img)"
          v-bind:alt="item.name"
        />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.getters.projects;
    }
  }
};
</script>

<style lang="postcss" scoped>
.wrapper {
  background-color: var(--grey-100);
}

ul {
  display: grid;
  grid-gap: var(--space);
  grid-template-columns: repeat(2, 1fr);
  list-style-type: none;
  margin-top: calc(var(--space) * 2);
  padding-left: 0;

  @media (--sm) {
    grid-template-columns: repeat(4, 1fr);
  }
}

li {
  display: grid;
  grid-gap: calc(var(--space) / 2);
  text-align: center;
}

img {
  filter: grayscale(1);
  margin: 0 auto;
  max-height: 3rem;
}

p {
  color: var(--grey);
}
</style>
