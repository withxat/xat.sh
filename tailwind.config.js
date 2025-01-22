import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons"
import tailwindcssTypography from "@tailwindcss/typography"
import tailwindcssAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/types/common.ts",
		"./contents/projects.json",
	],
	darkMode: ["class"],
	plugins: [
		tailwindcssAnimate,
		tailwindcssTypography,
		iconsPlugin({ collections: getIconCollections(["mingcute"]) }),
	],
	theme: {
		extend: {
			animation: {
				gradient: "gradient 8s linear infinite",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				background: "hsl(var(--background))",
				border: "hsl(var(--border))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				foreground: "hsl(var(--foreground))",
				input: "hsl(var(--input))",
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				ring: "hsl(var(--ring))",
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				theme: {
					DEFAULT: "#122427",
				},
			},
			fontFamily: {
				doto: ["var(--font-doto)"],
				sans: ["var(--font-lexend)", "var(--font-noto-sans-sc)"],
				serif: ["var(--font-vollkorn)", "var(--font-noto-serif-sc)"],
			},
			keyframes: {
				gradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
		},
	},
}

export default config
