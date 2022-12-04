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
          <div class="flex justify-between items-center pt-3">
            <a class="text-xs" :href="speaker.path" v-for="speaker in content.speaker">{{ speaker.name }}</a>
            <span class="bg-zinc-200/50 text-xxs text-zinc-800 font-extrabold px-2 py-1 inline-block items-center font-mono rounded-full">{{ content.length }}</span>
          </div>
          <h3 class="font-bold text-sm pt-2">
            <a href="/podcast/white-hat">{{ content.title }}</a>
          </h3>
        </div>
      </article>
</template>

<style scoped>

</style>