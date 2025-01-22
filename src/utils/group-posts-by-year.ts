export function groupPostsByYear(posts: { frontmatter: Frontmatter }[]) {
	// Group posts by year
	const postsByYear: PostsByYear = {}
	for (const { frontmatter } of posts) {
		const year = new Date(frontmatter.publishedAt).getFullYear()
		if (!postsByYear[year]) {
			postsByYear[year] = []
		}
		postsByYear[year].push(frontmatter)
	}

	// Sort years in descending order
	const sortedYears = Object.keys(postsByYear)
		.map(Number)
		.sort((a, b) => b - a)

	return {
		postsByYear,
		sortedYears,
	}
}
