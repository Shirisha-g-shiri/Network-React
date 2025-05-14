/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
        'brand-blue': '#00E0FF',
        'brand-purple': '#8A2BE2',
        'brand-pink': '#FF00C7',
        'brand-cyan': '#00F2FF',
        'dark-1': '#0A0A10',
        'dark-2': '#10101A',
        'dark-3': '#1A1A2A',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
        sans: ['"Exo 2"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
        'aurora': {
          from: { backgroundPosition: '0% 50%' },
          to: { backgroundPosition: '100% 50%' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 5px #00E0FF, 0 0 10px #00E0FF, 0 0 15px #8A2BE2, 0 0 20px #8A2BE2' },
          '50%': { opacity: '1', boxShadow: '0 0 10px #00E0FF, 0 0 20px #00E0FF, 0 0 30px #8A2BE2, 0 0 40px #8A2BE2' },
        },
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'aurora': 'aurora 15s ease infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
			},
      boxShadow: {
        'glow-sm': '0 0 8px rgba(0, 224, 255, 0.5), 0 0 12px rgba(138, 43, 226, 0.3)',
        'glow-md': '0 0 15px rgba(0, 224, 255, 0.6), 0 0 25px rgba(138, 43, 226, 0.4)',
        'glow-lg': '0 0 25px rgba(0, 224, 255, 0.7), 0 0 40px rgba(138, 43, 226, 0.5)',
      }
		},
	},
	plugins: [require('tailwindcss-animate')],
};