import s from './our-jewelry.module.css'

import img1 from '../../assets/images/IMAGE (1).png'
import img2 from '../../assets/images/IMAGE (2).png'
import img3 from '../../assets/images/IMAGE (3).png'
import img4 from '../../assets/images/IMAGE (4).png'

import { Slider } from '../../shared/ui'

// Our Jewelry — 4 cards: Rings, Bracelets, Necklaces, Earrings

export default function OurJewelry() {
	const PHOTOS = [
		{ image: img1, alt: 'Rings', text: 'Rings' },
		{ image: img2, alt: 'Bracelets', text: 'Bracelets' },
		{ image: img3, alt: 'Necklaces', text: 'Necklaces' },
		{ image: img4, alt: 'Earrings', text: 'Earrings' },
	]

	const SLIDES = [...PHOTOS, ...PHOTOS, ...PHOTOS]

	return (
		<section className='our-jewelry py-5 lg:py-13'>
			<div>
				<div className='text-center'>
					<h3 className='text-[16px]'>Consciously Made</h3>
					<h2 className='text-[42px]'>Our Jewelry</h2>
				</div>
				<section className={s.gallery}>
					<Slider
						items={SLIDES}
						renderItem={photo => (
							<div className={s.card}>
								<img src={photo.image} alt={photo.alt} className={s.image} />

								<p className={s.text}>{photo.text}</p>
							</div>
						)}
						autoplay
						loop
						speed={700}
						slidesPerView={1.5}
						spaceBetween={4}
						breakpoints={{
							640: { slidesPerView: 2.5 },
							1024: { slidesPerView: 4 },
						}}
					/>
				</section>
			</div>
		</section>
	)
}
