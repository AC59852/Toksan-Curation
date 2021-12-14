<template>
  <section id="anime">
      <h2>Choose an Anime</h2>
      <div class="anime__wrapper">
          <AnimeItem v-for="anime in animes" :anime="anime" :key="anime.id" class="anime__item"/>
      </div>
  </section>
</template>

<script>
import AnimeItem from './AnimeItem.vue';
export default {
    data() {
        return {
            animes: []
        }
    },

    components: {
        AnimeItem
    },
}
</script>

<style>

</style>