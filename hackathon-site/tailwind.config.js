/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0B0E',
                card: '#111318',
                surface: '#1A1D26',
                primary: '#00BFFF',
                'primary-dark': '#0090cc',
                border: '#1E2433',
                muted: '#6B7280',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(rgba(0,191,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.03) 1px, transparent 1px)",
            },
            backgroundSize: {
                'grid': '40px 40px',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
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
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(0,191,255,0.4)' },
                    '50%': { boxShadow: '0 0 20px rgba(0,191,255,0.8)' },
                },
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(0,191,255,0.4)',
                'glow': '0 0 20px rgba(0,191,255,0.6)',
                'glow-lg': '0 0 30px rgba(0,191,255,0.7)',
                'card': '0 4px 24px rgba(0,0,0,0.4)',
            },
        },
    },
    plugins: [],
};
