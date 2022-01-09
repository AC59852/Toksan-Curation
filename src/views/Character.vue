<template>
  <section class="character">
      <h1 class="character__name">{{ character.name }}</h1>
      <nav class="character__navigation">
          <ul class="character__nav">
              <li v-for="component in components" :key="component.id"><h2 @click="selectComponent($event)">{{ component.name }}</h2></li>
          </ul>
      </nav>
      <component :is="currentComponent" :content="content"></component>
  </section>
</template>

<script>
import timeline from '@/components/timeline.vue';
import relationships from '@/components/relationships.vue';
import key_moments from '@/components/key moments.vue';
import skills from '@/components/skills.vue';
import more from '@/components/more.vue';
export default {
    data() {
        return {
            error: null,

            character: [],

            currentComponent: null,
            content: null,

            components: [
                {id: 0, name: 'timeline'},
                {id: 1, name: 'relationships'},
                {id: 2, name: 'key moments'},
                {id: 3, name: 'more'},
            ]
        }
    },

    created() {
        this.getCharacter()
        console.log(this.$route.params)
    },

    mounted() {
        // window.onbeforeunload = function() {
        //     return "Are you sure you want to leave?";
        // };
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

        async getCharacter() {
            try {
                const response = await this.fetchWithTimeout(`https://api.npoint.io/34186d399f51e08bcb6a/${this.$route.params.anime}/characters/${this.$route.params.character}`, {
                timeout: 6000,
                });
                const data = await response.json();
                this.error = false
                this.character = data
                console.log(this.character)
            } catch (error) {
                this.error = true
            }
        },

        reload() {
            if (this.error == true) {
                this.error = null
                this.getcharacter()
            }
        },

        selectComponent(event) {
            let componentContent = this.character.content[event.target.innerText]
            this.currentComponent = event.target.innerText
            this.content = componentContent
        }

    },

    components: {
        timeline,
        relationships,
        key_moments,
        skills,
        more
    },
}
</script>
<style>
    .character__nav {
        color: white;
        margin-top: 5%;
    }
</style>