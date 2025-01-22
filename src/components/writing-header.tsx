import Image from "next/image"

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
			<h1 className="text-2xl font-bold">Writing</h1>
			<h2 className="leading-none text-gray-500">
				Sharing some Thoughts & Sparks
			</h2>
		</BaseHeader>
	)
}
