/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: '#0A0A0A', // Deep Obsidian
                cobalt: '#2D5BFF',   // Electric Cobalt
                slate: '#1F2937',    // Slate Gray for cards
            },
            fontFamily: {
                sans: ['Inter', 'Montserrat', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
