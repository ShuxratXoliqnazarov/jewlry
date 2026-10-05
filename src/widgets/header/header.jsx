import { useState } from 'react'
import { Container } from '../../shared/ui'
import CartLink from './cart-link'
import MobileMenuButton from './mobile-menu-button'
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
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(prev => !prev)

	return (
		<header className='relative z-20 bg-[#f9f6f0]'>
			<TopBar />

			<Container className='relative flex h-[73px] items-center justify-between md:justify-center'>
				<MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />

				<NavMenu links={NAV_LINKS} className='hidden gap-12 md:flex' />

				<div className='md:absolute md:right-10'>
					<CartLink />
				</div>
			</Container>

			{isMenuOpen && (
				<NavMenu
					links={NAV_LINKS}
					className='flex flex-col items-center gap-5 border-t border-black/10 py-6 md:hidden'
				/>
			)}
		</header>
	)
}
