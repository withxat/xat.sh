import Image from "next/image"
import Link from "next/link"

import LogoSvg from "@/assets/svg/Logo.svg"
import { BaseHeader } from "@/components/base-header"

export function IndexHeader() {
	return (
		<BaseHeader>
			<Image
				alt="Logo"
				className="size-14"
				height={200}
				src={LogoSvg}
				width={200}
			/>
			<section className="flex flex-col gap-2">
				<h1 className="text-3xl font-bold leading-none">
					Xat
					<span className="ml-2 text-base font-normal leading-none text-gray-500">
						@withxat
					</span>
				</h1>
				<h2 className="leading-none text-gray-500">
					Developer, Designer & Creator
				</h2>
				<nav className="mt-2 flex gap-4">
					<Link className="flex items-center leading-none" href="x.com/withxat">
						<span className="i-mingcute-social-x-line text-xl" />
					</Link>
					<Link className="flex items-center leading-none" href="github.com/withxat">
						<span className="i-mingcute-github-line text-xl" />
					</Link>
					<Link className="flex items-center leading-none" href="mailto:i@xat.sh">
						<span className="i-mingcute-mail-line text-xl" />
					</Link>
				</nav>
			</section>
		</BaseHeader>
	)
}
