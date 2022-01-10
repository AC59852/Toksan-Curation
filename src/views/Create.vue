<template>
  <section class="create">
      <div v-if="error == null" class="create__loading">
            <div class="loadingio-spinner-eclipse-1a4jg7jojej"><div class="ldio-qbz0aidmxz">
            <div></div>
            </div></div>
            <h1 class="create__title create__title--loading">Loading</h1>
        </div>
    <div class="create__wrapper">
        <div v-if="error == false">
          <h1 class="create__title">Choose an Anime</h1>
          <div class="create__animeWrapper">
            <router-link :to="anime.name" v-for="anime in anime" :key="anime.id" class="create__anime" :style="{ background: `url('${anime.bck}')`}">
              <img :src="anime.logo" :alt="'Logo for ' + anime.name">
            </router-link>
          </div>
        </div>
        <div class="create__error" v-if="error == true">
            <h2 class="create__title create__title--error">There was an Error Loading the Content</h2>
            <h2 class="create__title create__title--error" @click="reload()">Reload</h2>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            error: null,

            anime: []
        }
    },

    created() {
        this.getAnime()
        console.log("loaded")
    },

    methods: {
        async fetchWithTimeout(resource, options = {}) {
            const { timeout = 8000 } = options;
            
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            const response = await fetch(resource, {
                ...options,
                signal: controller.signal  
            });
            clearTimeout(id);
            return response;
        },

        async getAnime() {
            try {
                const response = await this.fetchWithTimeout('https://api.npoint.io/34186d399f51e08bcb6a', {
                timeout: 6000,
                });
                const data = await response.json();
                this.error = false
                this.anime = data.anime
            } catch (error) {
                this.error = true
            }
        },

        reload() {
            if (this.error == true) {
                this.error = null
                this.getAnime()
            }
        }

    }
}
</script>

<style>
</style>