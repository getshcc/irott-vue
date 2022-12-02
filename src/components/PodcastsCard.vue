<script setup>
import { defineProps } from 'vue';

defineProps({
    content: {
        required: true,
        type: Object
    }
})

</script>

<template>
    <article>
        <div>
            <a href="/podcast/white-hat">
              <img class="aspect-square rounded-md" src="https://dummyimage.com/300x300/f5f5f5/bbb" alt="podcast cover">
            </a>
        </div>
        <div>
        <a class="text-xs" :href="speaker.path" v-for="speaker in content.speaker">{{ speaker.name }}</a>
          <h3 class="font-bold text-sm pt-2">
            <a href="/podcast/white-hat">{{ content.title }}</a>
          </h3>
        </div>
      </article>
</template>

<style scoped>

</style>