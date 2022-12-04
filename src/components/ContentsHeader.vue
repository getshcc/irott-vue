<script setup>
</script>

<template>

    <header class="flex justify-between items-center">
        <div class="flex items-center gap-x-2">
                <!-- slot title -->
                <slot name="title"></slot>
        </div>
        <div>
          <form class="flex items-center gap-x-1" action="">
            <div class="flex items-center">
              <span class="pr-4">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg> -->
              </span>
            <select class="focus:outline-none focus:ring-0 ring-0 border appearance-none border-zinc-200 focus:border-zinc-300 w-36 py-2 flex justify-center text-center rounded-md outline-none text-sm">
              <!-- slot default -->
                <slot>

                </slot>
              <!-- slot -->
            </select>
            </div>
          </form>
        </div>
      </header>

</template>

<style scoped>
select{
  appearance: none;
}
</style>