export function PostContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="prose max-w-none rounded-md bg-white p-4">
			{children}
		</div>
	)
}
