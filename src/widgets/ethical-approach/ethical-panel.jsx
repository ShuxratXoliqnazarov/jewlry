import { Button } from '../../shared/ui'

export default function EthicalPanel() {
	return (
		<div className='flex flex-col items-center justify-center px-6 py-16 text-center text-black md:px-12 md:py-0'>
			<p className='text-sm leading-[23px] tracking-[0.02em]'>Sustainability</p>
			<h2 className='text-[32px] leading-[48px] md:text-[43px] md:leading-[60px]'>
				An Ethical Approach
			</h2>
			<p className='mt-10 max-w-[449px] text-base leading-[26px]'>
				Making jewelry requires responsibility to the earth that creates our materials and
				respect for the people who inhabit it. From day one, we committed to creating designs
				of ethical origins from mine to market. Today, we’re a proud leader in sustainable
				sourcing and mindful production.
			</p>
			<Button href='#ethics' className='mt-8 min-w-[170px]'>
				Learn More
			</Button>
		</div>
	)
}
