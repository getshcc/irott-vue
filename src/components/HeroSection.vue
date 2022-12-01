<template>
    <section class="flex flex-col gap-y-6 justify-center py-16 px-5 3xl:px-0">
        <!-- Main Text -->
        <div>
            <h1 class="bg-gradient-to-b text-transparent bg-clip-text from-[#FF6666] to-[#ff5656] leading-[90px] text-[4.7rem] min-w-[400px] w-auto text-center font-extrabold">
                <span>ورود به دنیای </span>
                <span>هک و امنیت </span>
                <span class="lg:block">با
                    <span class="font-black ">ایران 123</span>
                </span>
            </h1>

        </div>

        <!-- Signup and Newsletter form -->
        <div class="mt-10 flex justify-center">
            <form action="" class="w-[450px] flex flex-col items-center">
                <div class="relative w-[450px] block mx-auto">
                    <input class="block mx-auto py-3 px-5 w-full max-w-[450px] outline-none bg-zinc-50 border border-zinc-100 rounded-md"
                        type="email" placeholder="some@email.com" dir="ltr">
                    <button
                        class="absolute top-[6px] right-[6px] text-white bg-[#ff5656] transition-all ease-in duration-150 hover:scale-95 shadow-lg shadow-[#ff565667] px-[18px] py-[7px] font-bold rounded-md">ثبت
                        نام</button>
                </div>
                <!-- Optional Newsletter checkbox -->
                <div class="mt-5 flex gap-x-3">
                    <input type="checkbox" id="accept">
                    <label class="text-xs text-zinc-500" for="accept">
                        همچنین تمایل دارم عضو خبرنامه شوم و از جدیدترین اخبار و تخفیفات مطلع شوم
                    </label>
                </div>
            </form>
        </div>
    </section>
</template>