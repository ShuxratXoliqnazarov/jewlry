export default function MobileMenuButton({ isOpen, onToggle }) {
	return (
		<button
			type='button'
			aria-label='Menu'
			aria-expanded={isOpen}
			onClick={onToggle}
			className='flex h-8 w-8 flex-col items-center justify-center gap-1 md:hidden'
		>
			<span className='h-px w-5 bg-black' />
			<span className='h-px w-5 bg-black' />
			<span className='h-px w-5 bg-black' />
		</button>
	)
}
