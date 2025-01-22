import Link from "next/link"

export default function Menu() {
	return (
		<aside className="sticky top-2 z-50 flex w-full justify-start pb-4 text-white">
			<Link className="flex items-center gap-1 rounded-md bg-theme/50 p-2 pl-0.5 text-sm text-white backdrop-blur-md" href="/">
				<span className="i-mingcute-left-line text-base" />
				Go Home
			</Link>
		</aside>
	)
}
