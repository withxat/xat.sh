export function BaseHeader({ children }: { children: React.ReactNode }) {
	return (
		<header className="flex flex-col gap-2 rounded-md border-b-2 border-dashed border-gray-200 bg-white p-4">
			{children}
		</header>
	)
}
