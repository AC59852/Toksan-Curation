<template>
  <section id="about" class="about">
      <div class="about__wrapper">
          <div v-for="item in aboutItems" :key="item.id" class="about__item">
              <img :src="item.icon" alt="" class="about__icon">
              <h2 class="about__title">{{ item.title }}</h2>
              <p class="about__text">{{ item.text }}</p>
          </div>
      </div>
  </section>
</template>

<script>
import aboutIcon1 from '@/assets/info.svg';
import aboutIcon2 from '@/assets/info.svg';
import aboutIcon3 from '@/assets/info.svg';
import aboutIcon4 from '@/assets/info.svg';
import aboutIcon5 from '@/assets/info.svg';
import aboutIcon6 from '@/assets/info.svg';

export default {
    data() {
        return {
            aboutItems: [
                {id: 0, icon: aboutIcon1, title: "About Placeholder 1", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
                {id: 1, icon: aboutIcon2, title: "About Placeholder 2", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
                {id: 2, icon: aboutIcon3, title: "About Placeholder 3", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
                {id: 3, icon: aboutIcon4, title: "About Placeholder 4", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
                {id: 4, icon: aboutIcon5, title: "About Placeholder 5", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
                {id: 5, icon: aboutIcon6, title: "About Placeholder 6", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
            ]
        }
    }
}
</script>

<style>

</style>