// tailwind.config.js
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                "2xs": "0.5rem",
            },

            margin: {
                4.5: "-1.125rem",
            },
            // custom colors
            colors: {
                darkModeMain: "#15294D",
                darkModeHeadFoot: "#355069",
                divideLine: "#27435c",
            },
            blur: {
                xs: "2px",
            },

            opacity: {
                91: ".91",
                99: ".99",
            },

            backgroundColor: {
                darkMessage: "#26252A",
            },

            textColor: {
                darkMessage: "#26252A",
            },

            // https://devdojo.com/tnylea/custom-animations-in-tailwindcss
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-out-down": {
                    from: {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                    to: {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-out-up": {
                    from: {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                    to: {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.5s ease-out",
                "fade-out-down": "fade-out-down 0.5s ease-out",
                "fade-in-up": "fade-in-up 0.5s ease-out",
                "fade-out-up": "fade-out-up 0.5s ease-out",
                lightDarkToggle: "spin 1s",
                customOnlinePing: "ping 1.25s infinite",
                customMyMessagePulse: "pulse 1.5s",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["disabled"],
            ringOffsetColor: ["disabled"],
            animation: ["disabled"],
            ringWidth: ["disabled"],
            ringOffsetWidth: ["disabled"],
            opacity: ["dark"],
            width: ["focus"],
        },
    },
    plugins: [],
};
