import Menu from "@/components/menu"

export default function PostLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Menu />
			{children}
		</>
	)
}
