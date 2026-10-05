export default function NavMenu({ links, className = '' }) {
	return (
		<nav className={className}>
			{links.map(({ label, href }) => (
				<a
					key={label}
					href={href}
					className='text-sm tracking-[0.02em] text-black transition-opacity hover:opacity-60'
				>
					{label}
				</a>
			))}
		</nav>
	)
}
