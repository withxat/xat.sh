import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

export async function getSlugs() {
	const postsDirectory = path.join(process.cwd(), "contents", "writing")
	const files = await fs.readdir(postsDirectory)
	return files.map(file => file.replace(".mdx", ""))
}
