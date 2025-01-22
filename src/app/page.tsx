import projects from "#/projects.json"
import { IndexHeader } from "@/components/index-header"
import { ItemList } from "@/components/item-list"
import { MainContainer } from "@/components/main-container"
import { ProjectCard } from "@/components/project-card"
import { SectionContainer } from "@/components/section-container"
import { SectionTitle } from "@/components/section-title"
import { WritingCard } from "@/components/writing-card"
import { getSlugs } from "@/utils/get-slugs"
import { readPost } from "@/utils/read-post"

export default async function Home() {
	const slugs = await getSlugs()
	const posts = await Promise.all(slugs.map(async slug => await readPost(slug)))
	const frontmatters = posts.map(post => post.frontmatter)

	return (
		<div className="flex w-full max-w-screen-md grow flex-col">
			<IndexHeader />
			<MainContainer>
				<SectionContainer>
					<SectionTitle
						button="View all"
						href="/post"
						title="Writing"
					/>
					<ItemList>
						{frontmatters.map(frontmatter => (
							<WritingCard
								description={frontmatter.summary}
								key={frontmatter.slug}
								publishedAt={frontmatter.publishedAt}
								slug={frontmatter.slug}
								title={frontmatter.title}
							/>
						))}
					</ItemList>
				</SectionContainer>
				<SectionContainer>
					<SectionTitle
						button="GitHub"
						href="https://github.com/withxat"
						title="Project"
					/>
					<ItemList>
						{projects.map(project => (
							<ProjectCard
								description={project.description}
								icon={project.icon}
								key={project.title}
								link={project.link}
								title={project.title}
							/>
						))}
					</ItemList>
				</SectionContainer>
			</MainContainer>
		</div>
	)
}
