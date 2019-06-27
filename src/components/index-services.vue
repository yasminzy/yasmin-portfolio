<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <h2 data-aos="fade">My Services</h2>

      <ul>
        <li
          v-for="(item, index) in services"
          v-bind:key="index"
          data-aos="flip-up"
        >
          <span :class="'typcn typcn-' + item.icon" />
          <h3 data-aos="fade">{{ item.name }}</h3>
          <p data-aos="fade">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "shopping-bag",
          name: "Ecommerce Development",
          description:
            "Fast, responsive, and SEO friendly online store. All tailored for your business."
        },
        {
          icon: "vendor-apple",
          name: "Restaurant Website",
          description:
            "Fresh and simple website with booking feature. No more downloadable pdf menu."
        },
        {
          icon: "device-laptop",
          name: "Company Profile",
          description:
            "Clean and professional looking website. A perfect reflection of your company."
        },
        {
          icon: "cog",
          name: "Site Maintenance",
          description:
            "Go responsive, update content, refresh design, or fix bugs in your existing website."
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

h2 {
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (--lg) {
    margin-right: 0;
    text-align: right;
  }
}

ul {
  display: grid;
  grid-gap: var(--space);
  list-style-type: none;
  padding-left: 0;
  margin-top: calc(var(--space) * 2);
  max-width: 768px;
  margin-right: 0;
  text-align: center;

  @media (--sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--md) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0;
  }

  @media (--lg) {
    text-align: left;
  }
}

li {
  color: var(--white);
  padding: calc(var(--space) / 2);
  display: grid;
  grid-row-gap: var(--space);
  background-color: var(--primary);
  box-shadow: var(--shadow);

  &:nth-child(even) {
    background-color: var(--secondary);
  }

  @media (--sm) {
    &:nth-child(3) {
      order: 1;
    }
  }

  @media (--md) {
    &:nth-child(odd) {
      margin-bottom: calc(var(--space) * 2);
      order: 0;
    }

    &:nth-child(even) {
      margin-top: calc(var(--space) * 2);
    }
  }
}

span {
  display: block;
  font-size: 3rem;
}
</style>
