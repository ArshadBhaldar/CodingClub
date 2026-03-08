/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0D0900',
                card: '#1A1000',
                surface: '#221500',
                border: '#4A3000',
                muted: '#A08040',
                // HP theme tokens
                gold: '#FFD700',
                'gold-dark': '#B8860B',
                'gold-light': '#FFF0A0',
                parchment: '#F5E6C8',
                'parchment-dark': '#C8A96E',
                inkDark: '#1a0e00',
                velvetRed: '#6B0000',
                velvetGreen: '#003D1A',
                velvetBlue: '#001A4D',
                primary: '#FFD700',
                'primary-dark': '#B8860B',
            },
            fontFamily: {
                cinzel: ['Cinzel', 'Georgia', 'serif'],
                serif: ['"IM Fell English"', 'Georgia', 'serif'],
                mono: ['"Courier New"', 'Courier', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'flicker': 'flicker 3s ease-in-out infinite',
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                flicker: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.85' },
                    '75%': { opacity: '0.95' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
            boxShadow: {
                'glow-gold': '0 0 15px rgba(255,215,0,0.5)',
                'glow-gold-lg': '0 0 30px rgba(255,215,0,0.7)',
                'parchment': '0 4px 24px rgba(0,0,0,0.6), inset 0 0 40px rgba(200,169,110,0.08)',
                'velvet': '0 8px 32px rgba(0,0,0,0.8)',
                'card': '0 4px 24px rgba(0,0,0,0.6)',
            },
        },
    },
    plugins: [],
};
