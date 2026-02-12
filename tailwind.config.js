/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#E8EBF0',
                    100: '#C5CCD9',
                    200: '#9EAAC2',
                    300: '#7788AB',
                    400: '#5A6E9A',
                    500: '#3D5589',
                    600: '#2F4478',
                    700: '#1A2B4A',
                    800: '#0F1B2F',
                    900: '#0A1628',
                    950: '#050B14'
                },
                gold: {
                    50: '#FCF9F1',
                    100: '#F9F3E3',
                    200: '#F4E4C1',
                    300: '#E8D199',
                    400: '#DCBE71',
                    500: '#D4AF37',
                    600: '#C19B1F',
                    700: '#9A7C19',
                    800: '#735D13',
                    900: '#4D3E0D'
                }
            },
            fontFamily: {
                sans: ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
}
