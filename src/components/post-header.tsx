import { BaseHeader } from "@/components/base-header"
import { TypographyH1 } from "@/components/mdx"
import { WritingCategoryIcon } from "@/types/common"
import { cn } from "@/utils/cn"

export function PostHeader({ frontmatter }: PostHeaderProperties) {
	return (
		<BaseHeader>
			<div className="mb-4 flex items-start justify-between gap-1">
				<span className={cn("text-2xl text-gray-500/60", WritingCategoryIcon[frontmatter.category])} />
				<div className="flex flex-col items-end">
					<span className="font-doto text-xl font-medium uppercase tracking-widest">
						{frontmatter.category}
					</span>
					<span className="font-doto text-base font-medium tracking-widest">
						{frontmatter.publishedAt}
					</span>
				</div>
			</div>
			<TypographyH1>{frontmatter.title}</TypographyH1>
			<p className="font-serif text-sm font-semibold text-gray-500">{frontmatter.summary}</p>
		</BaseHeader>
	)
}
