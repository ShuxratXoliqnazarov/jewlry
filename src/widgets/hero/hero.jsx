import heroBg from '../../assets/hero-bg.png'
import { Button } from '../../shared/ui'
import HeroContent from './hero-content'
import ReviewsTab from './reviews-tab'

export default function Hero() {
	return (
		<section
			className='relative flex min-h-[560px] flex-col justify-end gap-6 bg-cover bg-[position:70%_center] px-4 pb-10 md:h-[727px] md:px-0 md:pb-0'
			style={{ backgroundImage: `url(${heroBg})` }}
		>
			<ReviewsTab />

			<div className='md:absolute md:left-[11%] md:top-[412px]'>
				<HeroContent />
			</div>

			<div className='flex flex-col gap-3 md:absolute md:inset-x-0 md:bottom-[120px] md:flex-row md:justify-between md:px-[12.9%]'>
				<Button href='#rings' variant='blue' className='min-w-[170px] text-center'>
					Shop Rings
				</Button>
				<Button href='#appointment' variant='blue' className='min-w-[170px] text-center'>
					Book Appointment
				</Button>
			</div>
		</section>
	)
}
