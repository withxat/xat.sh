import type { MetadataRoute } from "next"

import { getSlugs } from "@/utils/get-slugs"
import { readPost } from "@/utils/read-post"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const links = [
		{ lastModified: new Date(), url: "https://xat.sh" },
		{ lastModified: new Date(), url: "https://xat.sh/post" },
	]

	const slugs = await getSlugs()
	const rawPosts = slugs.map(async slug => await readPost(slug))
	const posts = await Promise.all(rawPosts)

	for (const post of posts) {
		links.push({ lastModified: new Date(post.frontmatter.publishedAt), url: `https://xat.sh/post/${post.frontmatter.slug}` })
	}

	return links
}
