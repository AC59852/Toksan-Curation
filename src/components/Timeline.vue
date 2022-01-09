<template>
  <section>
      <h1>This is the Timeline Component</h1>
      <h2 v-for="(year, index) in content" :key="index" style="color: white">{{ year.year }}</h2>
      <p class="content">{{ content }}</p>
  </section>
</template>

<script>
export default {
    props: ["content"],

    mounted() {
        console.log(this.content)
    }
}
</script>

<style>
.content {
    color: white;
}
</style>