import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

import { compileMDX } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

import { TypographyBlockquote, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyImage, TypographyInlineCode, TypographyP } from "@/components/mdx"

export async function readPost(slug: string) {
	const postPath = path.join(process.cwd(), "contents", "writing", `${slug}.mdx`)
	const page = await fs.readFile(postPath, "utf8")

	if (!page) {
		notFound()
	}

	const { content, frontmatter } = await compileMDX<Frontmatter>({
		components: {
			blockquote: TypographyBlockquote,
			code: TypographyInlineCode,
			h1: TypographyH1,
			h2: TypographyH2,
			h3: TypographyH3,
			h4: TypographyH4,
			img: TypographyImage,
			p: TypographyP,
		},
		options: {
			parseFrontmatter: true,
		},
		source: page,
	})

	return { content, frontmatter }
}
