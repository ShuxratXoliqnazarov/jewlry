import bandsImage from '../../assets/bands.png'
import clusterRingsImage from '../../assets/cluster-rings.png'
import customDesignImage from '../../assets/custom-design.png'
import ringsImage from '../../assets/rings.png'
import { CategoryCard, Container, SectionHeading } from '../../shared/ui'

const CARDS = [
	{ title: 'Cluster Rings', image: clusterRingsImage, href: '#cluster-rings' },
	{ title: 'Bands', image: bandsImage, href: '#bands' },
	{ title: 'Rings', image: ringsImage, href: '#rings' },
	{ title: 'Custom Design', image: customDesignImage, href: '#custom' },
]

export default function WeddingEngagement() {
	return (
		<section id='wedding' className='bg-white py-16 md:pb-24 md:pt-[70px]'>
			<Container>
				<SectionHeading eyebrow='Handcrafted Jewelry' title='Wedding & Engagement' />

				<ul className='mx-auto mt-10 grid max-w-[1080px] grid-cols-2 gap-5 md:grid-cols-4'>
					{CARDS.map(card => (
						<li key={card.title}>
							<CategoryCard {...card} />
						</li>
					))}
				</ul>
			</Container>
		</section>
	)
}
