import RSS from "rss"

import { getSlugs } from "@/utils/get-slugs"
import { readPost } from "@/utils/read-post"

export async function GET() {
	const feed = new RSS({
		copyright: `${new Date().getFullYear()} © Xat`,
		description: "Coding with Love, Exploring the World",
		feed_url: "https://xat.sh/feed.xml",
		language: "zh",
		pubDate: new Date(),
		site_url: "https://xat.sh",
		title: "Hi, Xat!",
	})

	const slugs = await getSlugs()
	const rawPosts = slugs.map(async slug => await readPost(slug))
	const posts = await Promise.all(rawPosts)

	for (const post of posts) {
		feed.item({
			author: "Xat",
			categories: [post.frontmatter.category],
			date: new Date(post.frontmatter.publishedAt),
			description: post.frontmatter.summary,
			guid: `https://xat.sh/post/${post.frontmatter.slug}`,
			title: post.frontmatter.title,
			url: `https://xat.sh/post/${post.frontmatter.slug}`,
		})
	}

	return new Response(feed.xml({ indent: true }), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	})
}
