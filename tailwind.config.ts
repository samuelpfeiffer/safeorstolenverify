
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
				'2xl': '1400px'
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
					DEFAULT: 'hsl(0 0% 5%)', // Deep black background
					dark: 'hsl(0 0% 7%)',    // Near black
					light: 'hsl(0 0% 98%)',   // White for text
					orange: {
						DEFAULT: 'hsl(28 100% 50%)', // #FF8000 - Brand Orange
						50: 'hsl(28 100% 95%)',
						100: 'hsl(28 100% 90%)',
						200: 'hsl(28 100% 80%)',
						300: 'hsl(28 100% 70%)',
						400: 'hsl(28 100% 60%)',
						500: 'hsl(28 100% 50%)',
						600: 'hsl(28 100% 45%)',
						700: 'hsl(28 100% 40%)',
						800: 'hsl(28 100% 35%)',
						900: 'hsl(28 100% 30%)'
					},
					lime: {
						DEFAULT: 'hsl(82 84% 55%)', // #B8FF2D - Brand Lime
						50: 'hsl(82 84% 95%)',
						100: 'hsl(82 84% 90%)',
						200: 'hsl(82 84% 80%)',
						300: 'hsl(82 84% 70%)',
						400: 'hsl(82 84% 60%)',
						500: 'hsl(82 84% 55%)',
						600: 'hsl(82 84% 50%)',
						700: 'hsl(82 84% 45%)',
						800: 'hsl(82 84% 40%)',
						900: 'hsl(82 84% 35%)'
					},
					gray: {
						50: 'hsl(0 0% 98%)',
						100: 'hsl(0 0% 95%)',
						200: 'hsl(0 0% 85%)',
						300: 'hsl(0 0% 75%)',
						400: 'hsl(0 0% 65%)',
						500: 'hsl(0 0% 50%)',
						600: 'hsl(0 0% 40%)',
						700: 'hsl(0 0% 30%)',
						800: 'hsl(0 0% 20%)',
						900: 'hsl(0 0% 10%)'
					}
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.16' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'7xl': ['4.5rem', { lineHeight: '1.05' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
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
				'glow': '0 0 20px rgba(255, 128, 0, 0.2)',
				'glow-lg': '0 0 40px rgba(255, 128, 0, 0.3)',
				'orange': '0 4px 20px -4px rgba(255, 128, 0, 0.3)',
				'lime': '0 4px 20px -4px rgba(184, 255, 45, 0.3)',
				'elegant': '0 8px 32px rgba(255, 128, 0, 0.2)',
				'elegant-lg': '0 10px 40px -8px rgba(255, 128, 0, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
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
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
