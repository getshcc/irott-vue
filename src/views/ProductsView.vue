<script>
import ProductCard from '../components/ProductCard.vue';
export default {
    components: { ProductCard },
    data: () => ({
        products: [],
        moreFilterView: false,
    }),
    computed: {
        moreFilterViewText() {
            return this.moreFilterView ? 'نمایش کمتر...' : 'نمایش بیشتر...'
        }
    },
    methods: {
        toggleMoreFilter() {
            this.moreFilterView = !this.moreFilterView
        }
    },
    mounted() {
        fetch("http://localhost:3000/courses")
            .then(res => res.json())
            .then(data => this.products = data)
            .catch(err => console.log(err))
    }
}
</script>

<template>
    <section class="container mx-auto py-5 flex flex-col px-5">
    <section class=" grid grid-cols-8 gap-5 min-h-[80vh]">
        <div class="col-span-2 px-2 flex flex-col gap-y-3">
            <header>
                <p class="font-extrabold">فیلتر محصولات</p>
            </header>
            <div>
                <form action="">
                    <div class="relative">
                        <input class="w-full border-none focus:ring-0 px-3 py-2 rounded-sm bg-zinc-50 border placeholder:text-xs outline-none" type="text" placeholder="عنوان دوره، نام مدرس و...">
                        <button class="absolute top-[10px] left-3 opacity-70 hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                          </button>
                    </div>
                </form>
            </div>
            <div class="px-1 pb-3 border-b-2">
                <Transition name="fade">
                    <ul class="flex flex-col gap-y-2 py-2">
                        <li class="pt-2 flex items-center justify-between">
                            <span class="text-sm font-bold">همه دوره ها</span>
                            <span>
                                <label class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked>
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </span>
                        </li>
                        <li v-show="moreFilterView" class="pt-2 flex items-center justify-between">
                            <span class="text-sm font-bold">دوره های پولی</span>
                            <span>
                                <label class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </span>
                        </li>
                        <li v-show="moreFilterView" class="pt-2 flex items-center justify-between">
                            <span class="text-sm font-bold">دوره های رایگان</span>
                            <span>
                                <label class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </span>
                        </li>
                        <li v-show="moreFilterView" class="pt-2 flex items-center justify-between">
                            <span class="text-sm font-bold"> مخصوص اعضای ویژه</span>
                            <span>
                                <label class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </span>
                        </li>
                        <button @click="toggleMoreFilter" class="text-xs font-medium text-zinc-400">
                            {{ moreFilterViewText }}
                        </button>
                    </ul>
                </Transition>
            </div>
            <div>
                <div>
                    <span>دسته بندی</span>
                </div>
            </div>
        </div>
        <div class="col-span-6 grid grid-cols-3 gap-6">
            <product-card v-for="product in products" :key="product.id" :content="product"></product-card>
        </div>
    </section>
</section>

</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>