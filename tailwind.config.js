// File: tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-blue': '#007bff',
            }
        },
        // I have REMOVED the problematic "container" section.
        // This was causing your width issue.
    },
    plugins: [
        require('flowbite/plugin')
    ],
}