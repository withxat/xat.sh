import Link from "next/link"

export default function Menu() {
	return (
		<aside className="flex w-full justify-between px-4 pb-4 font-semibold text-white sm:sticky sm:top-2 sm:mb-4 sm:w-fit sm:gap-4 sm:rounded-md sm:bg-theme/50 sm:p-4 sm:text-white sm:shadow-md sm:backdrop-blur-md">
			<Link href="/">Home</Link>
			<Link href="/post">Writing</Link>
			<Link href="/about">About</Link>
		</aside>
	)
}
