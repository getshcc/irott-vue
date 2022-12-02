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
            <div class="flex items-center justify-between pb-2">
                <a class="text-xs font-medium text-blue-500" href="#">{{ content.category }}</a>
                <div class="flex gap-x-2">
                    <!-- Comment -->
                    <span class="flex items-center px-2 py-1 rounded-sm gap-x-2">
                        <p class="text-xs font-bold ">{{ content.comments }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                            <path fill-rule="evenodd"
                                d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.102 41.102 0 01-3.55.414c-.28.02-.521.18-.643.413l-1.712 3.293a.75.75 0 01-1.33 0l-1.713-3.293a.783.783 0 00-.642-.413 41.108 41.108 0 01-3.55-.414C1.993 13.245 1 11.986 1 10.574V5.426c0-1.413.993-2.67 2.43-2.902z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    <!-- View -->
                    <span class="flex items-center px-2 py-1 rounded-sm gap-x-2">
                        <p class="text-xs font-bold ">{{ content.views }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                            <path fill-rule="evenodd"
                                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>

                </div>
            </div>
            <div>
                <div>
                    <img class="w-full" src="https://dummyimage.com/400x220/f5f5f5/bbb" alt="">
                </div>
                <div class="px-3">
                    <h3 class="font-bold pt-3 pb-2">
                        <a href="">{{ content.title }}</a>
                    </h3>
                    <a class="text-xs font-medium flex items-center gap-x-1 text-zinc-400" href="#">
                        <span class="hover:text-zinc-700">{{ content.author }}</span>
                    </a>
                </div>
            </div>
        </article>
</template>

<style scoped>

</style>