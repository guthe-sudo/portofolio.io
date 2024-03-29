const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("resources/js/app.js", "public/js", "tailwind.css")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .vue()
    .sass("resources/sass/app.scss", "public/css");
