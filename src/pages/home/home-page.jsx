import Header from '../../widgets/header/header'
import Hero from '../../widgets/hero/hero'
import WeddingEngagement from '../../widgets/wedding-engagement/wedding-engagement'
import EthicalApproach from '../../widgets/ethical-approach/ethical-approach'
import AboutUs from '../../widgets/about-us/about-us'
import OurJewelry from '../../widgets/our-jewelry/our-jewelry'
import CustomDesign from '../../widgets/custom-design/custom-design'
import InstagramGallery from '../../widgets/instagram-gallery/instagram-gallery'
import Footer from '../../widgets/footer/footer'

export default function HomePage() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<WeddingEngagement />
				<EthicalApproach />
				<AboutUs />
				<OurJewelry />
				<CustomDesign />
				<InstagramGallery />
			</main>
			<Footer />
		</>
	)
}
