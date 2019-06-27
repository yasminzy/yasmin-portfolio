<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <div class="video" data-aos="fade-down-right">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yw6u6YkTgQ4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <ul>
        <li
          v-for="(item, index) in stat"
          v-bind:key="index"
          data-aos="fade-down-left"
        >
          <span :class="'typcn typcn-' + item.icon" />
          <p>
            {{ item.total }}<br />
            <span>{{ item.label }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stat: [
        {
          icon: "shopping-bag",
          total: 1,
          label: "Online store built"
        },
        {
          icon: "device-laptop",
          total: 6,
          label: "Websites built"
        },
        {
          icon: "document",
          total: 1,
          label: "Blog built"
        },
        {
          icon: "user",
          total: 3,
          label: "Happy client"
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.wrapper {
  background-color: var(--primary);
  text-align: center;
}

.content-wrapper {
  display: grid;
  grid-gap: calc(var(--space) * 2);

  @media (--lg) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.video {
  display: flex;
  align-items: center;
}

ul {
  display: grid;
  list-style-type: none;
  padding-left: 0;
  margin-top: calc(var(--space) * 2);
  max-width: 768px;
  margin-right: 0;

  @media (--sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

li {
  color: var(--white);
  font-size: 2rem;
  padding: var(--space);

  & > span {
    display: block;
    margin-bottom: var(--space);
  }

  & p {
    margin: 0;

    & span {
      font-size: initial;
    }
  }

  @media (--sm) {
    &:nth-child(1),
    &:nth-child(3) {
      border-right: 1px solid var(--white);
    }

    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid var(--white);
    }
  }
}
</style>
