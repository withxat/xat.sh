import Image from "next/image"
import Link from "next/link"

import WritingSvg from "@/assets/svg/✍️.svg"
import { BaseHeader } from "@/components/base-header"

export const WritingHeader = () => {
	return (
		<BaseHeader>
			<Image
				alt="Logo"
				className="size-14"
				height={200}
				src={WritingSvg}
				width={200}
			/>
			<h1 className="text-2xl font-bold">
				Writing
				<span className="ml-2 text-base font-medium leading-none text-gray-500">
					寫作
				</span>
			</h1>
			<h2 className="leading-none text-gray-500">
				Sharing some Thoughts & Sparks
			</h2>
			<nav className="mt-2 flex gap-4">
				<Link className="flex items-center bg-theme p-1 leading-none text-white" href="x.com/withxat">
					<span className="i-mingcute-social-x-line text-xl" />
					<span className="ml-1 pr-1 text-sm">More on Twitter</span>
				</Link>
			</nav>
		</BaseHeader>
	)
}
