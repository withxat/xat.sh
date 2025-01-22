import type { Metadata } from "next"

import { Doto, Lexend, Noto_Sans_SC, Noto_Serif_SC, Vollkorn } from "next/font/google"

import Menu from "@/components/menu"

import "@/styles/globals.css"

export const metadata: Metadata = {
	authors: [{ name: "Xat" }],
	creator: "Xat",
	description: "✨ Coding with Love, Exploring the World.",
	keywords: [
		"Xat",
		"Blog",
		"Portfolio",
		"Frontend",
		"Design",
		"博客",
		"作品集",
		"前端",
		"设计",
	].join(", "),
	publisher: "Xat",
	title: "Hi, Xat!",
}

const lexend = Lexend({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-lexend",
})

const notoSansSC = Noto_Sans_SC({
	display: "swap",
	variable: "--font-noto-sans-sc",
})

const vollkorn = Vollkorn({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-vollkorn",
})

const notoSerifSC = Noto_Serif_SC({
	display: "swap",
	variable: "--font-noto-serif-sc",
})

const doto = Doto({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-doto",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={`${doto.variable} ${lexend.variable} ${notoSansSC.variable} ${notoSerifSC.variable} ${vollkorn.variable}`} lang="zh">
			<body
				className="flex min-h-screen flex-col items-center scroll-smooth bg-theme p-4 antialiased"
			>
				<Menu />
				{children}
				<footer className="pb-2 pt-4 text-center text-sm text-white">
					<span>Coding with Love, Exploring the World</span>
					<br />
					<span>
						{new Date().getFullYear()}
						{" "}
						© Xat, All Rights Reserved
					</span>
					<br />
					<a className="underline" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>
				</footer>
			</body>
		</html>
	)
}
