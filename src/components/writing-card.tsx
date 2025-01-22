import Link from "next/link"

export function WritingCard({
	description,
	publishedAt,
	slug,
	title,
}: WritingCategoryProperties) {
	return (
		<Link href={`/post/${slug}`}>
			<div className="flex gap-1.5">
				<div className="mt-1.5 h-2 w-1 rounded-full bg-theme" />
				<div>
					<h4 className="font-serif text-lg font-bold leading-none">
						{title}
					</h4>
					<span className="text-xs text-gray-500">
						{publishedAt}
					</span>
					<p className="text-sm text-gray-500">
						{description}
					</p>
				</div>
			</div>
		</Link>
	)
}
