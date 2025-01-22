export function WritingContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-4 rounded-md bg-white p-4">
			{children}
		</div>
	)
}
