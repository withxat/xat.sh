import Link from "next/link"

import { WritingContainer } from "@/components/writing-container"
import { WritingHeader } from "@/components/writing-header"
import { getSlugs } from "@/utils/get-slugs"
import { groupPostsByYear } from "@/utils/group-posts-by-year"
import { readPost } from "@/utils/read-post"

export default async function Page() {
	const slugs = await getSlugs()
	const rawPosts = slugs.map(async slug => await readPost(slug))
	const posts = await Promise.all(rawPosts)
	const { postsByYear, sortedYears } = groupPostsByYear(posts)

	return (
		<div className="flex w-full max-w-screen-md grow flex-col">
			<WritingHeader />
			<WritingContainer>
				{sortedYears.map(year => (
					<div className="flex flex-col gap-2" key={year}>
						<h3 className="font-doto text-xl font-semibold leading-none tracking-widest">{year}</h3>
						{postsByYear[year].map(post => (
							<Link href={`/post/${post.slug}`} key={post.slug}>
								<h4 className="font-serif font-bold">{post.title}</h4>
							</Link>
						))}
					</div>
				))}
			</WritingContainer>
		</div>
	)
}
