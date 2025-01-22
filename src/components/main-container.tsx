export function MainContainer({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex grow flex-col gap-6 rounded-md bg-white p-4">
			{children}
		</main>
	)
}
