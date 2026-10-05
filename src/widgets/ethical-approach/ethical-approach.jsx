import ethicalImage from '../../assets/ethical-approach.png'
import { Marquee } from '../../shared/ui'
import EthicalPanel from './ethical-panel'

const MARQUEE_ITEMS = [
	'Traceable Gems',
	'Reclaimed Metals',
	'Fairmined Gold',
	'Love in All Ways',
	'Small Footprint',
]

export default function EthicalApproach() {
	return (
		<section id='ethics'>
			<div className='grid bg-[#98b7a4] md:min-h-[570px] md:grid-cols-2'>
				<img
					src={ethicalImage}
					alt='Hands holding a handcrafted gold ring'
					className='h-full max-h-[570px] w-full object-cover md:max-h-none'
				/>
				<EthicalPanel />
			</div>

			<Marquee items={MARQUEE_ITEMS} className='bg-[#f9f6f0] text-[#373938]' />
		</section>
	)
}
