// Instagram Gallery — photo slider (swiper) + @barioneal
import photo1 from '../../assets/instagram/photo-1.jpg'
import photo2 from '../../assets/instagram/photo-2.jpg'
import photo3 from '../../assets/instagram/photo-3.jpg'
import photo4 from '../../assets/instagram/photo-4.jpg'
import { ImageLink, Slider } from '../../shared/ui'
import s from './instagram-gallery.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/barioneal/'

const PHOTOS = [
	{ image: photo1, alt: 'Custom cluster ring with blue sapphires' },
	{ image: photo2, alt: 'Stacked gold rings with pink sapphires' },
	{ image: photo3, alt: 'Loose sapphires and gemstones' },
	{ image: photo4, alt: 'Gold ring set with emerald on hand' },
]

const SLIDES = [...PHOTOS, ...PHOTOS, ...PHOTOS]

export default function InstagramGallery() {
	return (
		<section className={s.gallery}>
			<Slider
				items={SLIDES}
				renderItem={photo => (
					<ImageLink
						image={photo.image}
						alt={photo.alt}
						href={INSTAGRAM_URL}
						ratio='278 / 296'
					/>
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
	)
}
