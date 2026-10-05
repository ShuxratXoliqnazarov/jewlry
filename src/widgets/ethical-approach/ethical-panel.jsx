import { Button, SectionHeading } from '../../shared/ui'

const DESCRIPTION =
	'Making jewelry requires responsibility to the earth that creates our materials and respect for the people who inhabit it. From day one, we committed to creating designs of ethical origins from mine to market. Today, we’re a proud leader in sustainable sourcing and mindful production.'

export default function EthicalPanel() {
	return (
		<div className='flex flex-col items-center justify-center px-6 py-16 text-center text-black md:px-12 md:py-0'>
			<SectionHeading eyebrow='Sustainability' title='An Ethical Approach' />

			<p className='mt-10 max-w-[449px] text-base leading-[26px]'>{DESCRIPTION}</p>

			<Button href='#ethics' className='mt-8 min-w-[170px]'>
				Learn More
			</Button>
		</div>
	)
}
