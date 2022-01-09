<template>
  <section class="anime">
      <div v-if="selecting" class="anime__selectionWrapper">
        <div class="anime__selection anime__selection--character" @click="setCharacter()">
          <h2>Character</h2>
        </div>
        <div class="anime__selection anime__selection--episode" @click="setEpisode()">
          <h2>Episode</h2>
        </div>
      </div>
      <SelectedData :info="info" :selecting="selecting"/>
  </section>
</template>

<script>
import SelectedData from '@/components/SelectedData.vue'
export default {
  data() {
    return {
      selecting: true,
      info: null
    }
  },

  mounted() {
  },

  methods: {
        async setCharacter() {
            try {
                const response = await fetch(`https://api.npoint.io/34186d399f51e08bcb6a/${this.$route.params.anime}/characters`)
                const data = await response.json();
                if (response.status !== 200) {
                    alert("Data not Found")
                }
                this.info = data
                this.selecting = false
            } catch (error) {
                console.log(error)
            }
        },

        async setEpisode() {
            try {
                const response = await fetch(`https://api.npoint.io/34186d399f51e08bcb6a/${this.$route.params.anime}/episodes`)
                if (response.status !== 200) {
                    alert("Data not Found")
                }
                const data = await response.json();
                this.info = data
                this.selecting = false
            } catch (error) {
                console.log(error)
            }
        }
  },

  components: {
    SelectedData
  },
}
</script>

<style>
</style>