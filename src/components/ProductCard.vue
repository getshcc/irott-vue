<script>
export default {
    props: {
        content: {
            required: true,
        }
    },
    data: () => ({

    }),
    computed: {
        toman() {
            return this.content.price.split('').reverse().slice(3).reverse().join('');
        },
        // mil() {
        //     if (this.content.price.split('').reverse().slice(3).reverse().join('').length >= 4) {
        //         let price = this.toman.split('')
        //         price.splice(1, 0, ',')
        //         return price
        //     }
        // }
    },
}
</script>

<template>
    <article>
        <a href="#post-2"><img class="rounded-md aspect-auto w-full" src="https://dummyimage.com/530x250/f5f5f5/bbb
" alt="rasberryPi"></a>
        <div class="details p-3">
            <div  class="split flex justify-between">
                <div >
                    <a v-for="category in content.category" class="text-xs text-blue-500" :href="category.path">
                        {{ category.title }} &nbsp;
                    </a>
                </div>
                <span class="text-sm font-bold text-green-500">
                    {{ toman }}
                    <span v-if="(toman.length <= 3)">
                        هزار تومان
                    </span>

                    &nbsp;
                    <span v-else-if="(toman.length >= 4)">
                        تومان
                    </span>

                </span>
            </div>
            <h4 class="font-extrabold py-2 text-slate-700"><a class="overflow-hidden" href="#post-1">
                    {{ content.title }}
                </a></h4>
            <div class="split flex justify-between"><a href="#"
                    class="text-xs flex text-slate-400 hover:text-slate-600">{{ content.teacher }}</a><button
                    class="text-xs font-bold flex items-center text-slate-400 hover:text-red-500"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
                    </svg> شرکت در دوره </button></div>
        </div>
    </article>
</template>

<style scoped>

</style>