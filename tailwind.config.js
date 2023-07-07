/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "jpic-yellow": "#FFC55B",
                "jpic-yellower": "#FFba46",
                "jpic-blue": "#0372FF",
                "jpic-pink": "#FF93C7",
                "jpic-orange": "#FF6900",
                "jpic-aqua": "#32CAE6",
                "jpic-less-aqua": "#27BAEC",
                "jpic-bluer": "#0037FF"
            },
            letterSpacing: {
                widerer: "0.075em",
                widestest: "0.15em",
            },
            blur: { xs: "0.5px" },
            scale: {
                35: "0.35",
                102: "1.02"
            },
            spacing: {
                "5/6": "83.3333333%",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    /* IE and Edge */
                    "-ms-overflow-style": "none",

                    /* Firefox */
                    "scrollbar-width": "none",

                    /* Safari and Chrome */
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        }),
    ],
};
