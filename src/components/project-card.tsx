import Link from "next/link"

export function ProjectCard({
	description,
	icon,
	link,
	title,
}: ProjectCardProperties) {
	return (
		<Link href={link} target="_blank">
			<div className="flex gap-1.5">
				<div className="mt-1.5 h-2 w-1 rounded-full bg-theme" />
				<div className="flex flex-col gap-1">
					<h4 className="flex w-fit flex-wrap items-center gap-1 text-lg font-medium leading-none">
						<span className={icon} />
						{title}
					</h4>
					<p className="text-sm text-gray-500">{description}</p>
				</div>
			</div>
		</Link>
	)
}
