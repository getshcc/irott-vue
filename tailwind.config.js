/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {
            fontFamily: {
                yekan: ["IRANYekan"],
            },
            fontSize: {
                xxs: "11px",
            },
            backgroundImage: {
                guide: "url('/guide-section.svg')",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                red: "#FF5656",
            },
        },
    },
    plugins: [],
};
