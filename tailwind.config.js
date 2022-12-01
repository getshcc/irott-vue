/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {
            fontFamily: {
                yekan: ["IRANYekan"],
            },
            fontSize:{
                xxs: '11px',
                
            }
        },
    },
    plugins: [],
};
