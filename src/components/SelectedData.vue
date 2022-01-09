<template>
  <section class="anime__selected" v-if="selecting == false">
    <h2 class="anime__title">Choose a Character</h2>
    <div class="anime__selectedWrapper">
      <router-link 
        :to="'/' + this.$route.params.anime + '/' + item.id" 
        v-for="item in info" :key="item.id" 
        :style="{ background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${item.img}')`}" 
        class="anime__card"
        >
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
    props: ['info', 'selecting'],

    mounted() {
      // when a prop updates console.log selecting
      this.$watch('selecting', (newVal, oldVal) => {
        console.log(oldVal)
      })

      console.log(this.$route.params)
    }
}
</script>

<style>

</style>