import Link from "next/link"

export function SectionTitle({ button, href, title }: SectionTitleProperties) {
	return (
		<div className="flex items-center gap-2">
			<h3 className="font-doto text-xl font-medium uppercase leading-none tracking-widest">{title}</h3>
			<div className="h-[2px] grow bg-gray-200" />
			<Link className="bg-theme px-2 py-1 text-xs text-gray-200" href={href}>
				<button>{button}</button>
			</Link>
		</div>
	)
}
