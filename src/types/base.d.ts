interface Frontmatter {
	category: WritingCategory
	publishedAt: string
	slug: string
	summary: string
	tags: string[]
	title: string
}

type WritingCategory = keyof typeof import("@/types/common").WritingCategoryIcon
