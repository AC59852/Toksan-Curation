<template>
  <section id="about" class="about">
      <div class="about__wrapper">
          <div v-for="item in aboutItems" :key="item.id" class="about__item">
              <img src="/" alt="" class="about__icon">
              <h2 class="about__title">{{ item.title }}</h2>
              <p class="about__text">{{ item.text }}</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            aboutItems: [
                {id: 0, title: "About Placeholder 1", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {id: 1, title: "About Placeholder 2", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {id: 2, title: "About Placeholder 3", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {id: 3, title: "About Placeholder 4", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {id: 4, title: "About Placeholder 5", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
                {id: 5, title: "About Placeholder 6", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            ]
        }
    }
}
</script>

<style>

</style>