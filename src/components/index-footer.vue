<template>
  <div class="wrapper">
    <div class="content-wrapper" data-aos="zoom-out">
      <h3>Yasmin ZY</h3>

      <ul>
        <li v-for="(item, index) in social" v-bind:key="index">
          <a v-bind:href="item.link">
            <span :class="'typcn typcn-' + item.icon" />
          </a>
        </li>
      </ul>

      <p>&copy; 2018-2019</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icon: "social-github",
          link: "https://github.com/yasminzy"
        },
        {
          icon: "social-instagram",
          link: "https://www.instagram.com/yzyusrina/"
        },
        {
          icon: "social-youtube",
          link: "https://www.youtube.com/c/YasminZulfatiYusrina"
        }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.wrapper {
  background-color: var(--grey-100);
}

.content-wrapper {
  @media (--sm) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

h3,
ul,
p {
  flex: 1;
  margin-bottom: calc(var(--space) / 2);
  width: 100%;
  text-align: center;

  @media (--sm) {
    margin-bottom: 0;
  }
}

h3 {
  @media (--sm) {
    text-align: left;
  }
}

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding-left: 0;

  & a {
    padding: calc(var(--space) / 2);
  }
}

span {
  display: block;
  font-size: 1.5rem;
}

p {
  color: var(--grey);

  @media (--sm) {
    text-align: right;
  }
}
</style>
