import ethicalImage from '../../assets/ethical-approach.png'
import EthicalPanel from './ethical-panel'

export default function EthicalApproach() {
	return (
		<section id='ethics' className='grid bg-[#98b7a4] md:min-h-[570px] md:grid-cols-2'>
			<img
				src={ethicalImage}
				alt='Hands holding a handcrafted gold ring'
				className='h-full max-h-[570px] w-full object-cover md:max-h-none'
			/>
			<EthicalPanel />
		</section>
	)
}
