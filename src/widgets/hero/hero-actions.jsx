import { Button } from '../../shared/ui'

export default function HeroActions() {
	return (
		<div className='flex flex-col gap-3 md:absolute md:inset-x-0 md:bottom-[120px] md:flex-row md:justify-between md:px-[12.9%]'>
			<Button href='#rings' variant='blue' className='min-w-[170px] text-center'>
				Shop Rings
			</Button>
			<Button href='#appointment' variant='blue' className='min-w-[170px] text-center'>
				Book Appointment
			</Button>
		</div>
	)
}
