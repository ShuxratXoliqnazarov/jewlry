import { useState } from 'react'
import CartLink from './cart-link'
import NavMenu from './nav-menu'
import TopBar from './top-bar'

const NAV_LINKS = [
	{ label: 'Engagement', href: '#engagement' },
	{ label: 'Wedding', href: '#wedding' },
	{ label: 'Custom', href: '#custom' },
	{ label: 'Fine Jewelry', href: '#fine-jewelry' },
	{ label: 'Ethics', href: '#ethics' },
	{ label: 'About', href: '#about' },
]

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='relative z-20 bg-[#f9f6f0]'>
			<TopBar />

			<div className='relative flex h-[73px] items-center justify-between px-4 md:justify-center md:px-10'>
				<button
					type='button'
					aria-label='Menu'
					aria-expanded={isOpen}
					onClick={() => setIsOpen(prev => !prev)}
					className='flex h-8 w-8 flex-col items-center justify-center gap-1 md:hidden'
				>
					<span className='h-px w-5 bg-black' />
					<span className='h-px w-5 bg-black' />
					<span className='h-px w-5 bg-black' />
				</button>

				<NavMenu links={NAV_LINKS} className='hidden gap-12 md:flex' />

				<div className='md:absolute md:right-10'>
					<CartLink />
				</div>
			</div>

			{isOpen && (
				<NavMenu
					links={NAV_LINKS}
					className='flex flex-col items-center gap-5 border-t border-black/10 py-6 md:hidden'
				/>
			)}
		</header>
	)
}
