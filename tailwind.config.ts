
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1200px'
			}
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
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				sos: {
					DEFAULT: 'hsl(var(--sos))',
					dark: 'hsl(var(--sos-dark))',
					light: 'hsl(var(--sos-light))',
					primary: {
						DEFAULT: 'hsl(207 89% 28%)',
						50: 'hsl(207 60% 96%)',
						100: 'hsl(207 60% 92%)',
						200: 'hsl(207 70% 80%)',
						300: 'hsl(207 80% 65%)',
						400: 'hsl(207 85% 50%)',
						500: 'hsl(207 89% 40%)',
						600: 'hsl(207 89% 28%)',
						700: 'hsl(207 70% 21%)',
						800: 'hsl(207 60% 15%)',
						900: 'hsl(207 50% 10%)'
					},
					orange: {
						DEFAULT: 'hsl(32 95% 44%)',
						50: 'hsl(32 95% 95%)',
						100: 'hsl(32 95% 90%)',
						200: 'hsl(32 95% 80%)',
						300: 'hsl(32 95% 70%)',
						400: 'hsl(32 95% 55%)',
						500: 'hsl(32 95% 44%)',
						600: 'hsl(32 95% 38%)',
						700: 'hsl(32 95% 30%)',
						800: 'hsl(32 95% 22%)',
						900: 'hsl(32 95% 15%)'
					},
					lime: {
						DEFAULT: 'hsl(160 84% 18%)',
						50: 'hsl(160 84% 96%)',
						100: 'hsl(160 84% 90%)',
						200: 'hsl(160 84% 75%)',
						300: 'hsl(160 84% 55%)',
						400: 'hsl(160 84% 35%)',
						500: 'hsl(160 84% 25%)',
						600: 'hsl(160 84% 18%)',
						700: 'hsl(160 84% 15%)',
						800: 'hsl(160 84% 12%)',
						900: 'hsl(160 84% 8%)'
					},
					gray: {
						50: 'hsl(210 40% 98%)',
						100: 'hsl(210 40% 96%)',
						200: 'hsl(214 32% 91%)',
						300: 'hsl(214 32% 80%)',
						400: 'hsl(215 16% 65%)',
						500: 'hsl(215 16% 47%)',
						600: 'hsl(217 19% 35%)',
						700: 'hsl(217 19% 27%)',
						800: 'hsl(222 47% 11%)',
						900: 'hsl(222 47% 8%)'
					}
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.7' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.2' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'DEFAULT': 'var(--shadow-md)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
				'elegant': 'var(--shadow-elegant)',
				'primary': 'var(--shadow-primary)',
				'success': 'var(--shadow-success)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fadeIn': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slideUp': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slideInLeft': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slideInRight': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fadeIn': 'fadeIn 0.6s ease-out',
				'slideUp': 'slideUp 0.7s ease-out',
				'slideInLeft': 'slideInLeft 0.6s ease-out',
				'slideInRight': 'slideInRight 0.6s ease-out',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 3s ease-in-out infinite',
				'gradient': 'gradient 8s ease infinite',
				'gradient-slow': 'gradient 15s ease infinite'
			},
			backgroundSize: {
				'200': '200% 200%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;