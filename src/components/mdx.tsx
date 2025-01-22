import Image from "next/image"

export function TypographyH1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="scroll-m-20 font-serif text-3xl font-black">
			{children}
		</h1>
	)
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="my-5 scroll-m-20 text-2xl font-bold tracking-tight first:mt-0">
			{children}
		</h2>
	)
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="mb-4 mt-0 scroll-m-20 text-lg font-semibold tracking-tight">
			{children}
		</h3>
	)
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
	return (
		<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
			{children}
		</h4>
	)
}

export function TypographyP({ children }: { children: React.ReactNode }) {
	return <p className="mb-2 mt-0 leading-7 [&:not(:last-child)]:mb-5">{children}</p>
}

export function TypographyBlockquote({ children }: { children: React.ReactNode }) {
	return <blockquote className="my-5 border-l-2 pl-6 font-normal italic text-gray-500">{children}</blockquote>
}

export function TypographyInlineCode({ children }: { children: React.ReactNode }) {
	return (
		<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
			{children}
		</code>
	)
}

export function TypographyImage({ alt, src }: { alt: string, src: string }) {
	return <Image alt={alt} height={500} src={src} width={500} />
}
