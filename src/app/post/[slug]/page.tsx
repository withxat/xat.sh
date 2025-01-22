import { PostContainer } from "@/components/post-container"
import { PostHeader } from "@/components/post-header"
import { getSlugs } from "@/utils/get-slugs"
import { readPost } from "@/utils/read-post"

export async function generateStaticParams() {
	const slugs = await getSlugs()
	return slugs.map(slug => ({ slug }))
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const { frontmatter } = await readPost(slug)
	return {
		title: `${frontmatter.title} | Xat's Writing`,
	}
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const { content, frontmatter } = await readPost(slug)

	return (
		<div className="flex max-w-screen-md grow flex-col">
			<PostHeader frontmatter={frontmatter} />
			<PostContainer>
				{content}
			</PostContainer>
		</div>
	)
}
