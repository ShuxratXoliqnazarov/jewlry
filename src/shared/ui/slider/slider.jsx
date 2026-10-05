import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Swiper wrapper. items — array of data, renderItem(item) — what to draw in a slide
// Any Swiper option can be passed as a prop (slidesPerView, loop, breakpoints ...)
// autoplay: true | { delay: 3000 }
export default function Slider({ items, renderItem, autoplay = false, className = '', ...options }) {
	const autoplayConfig = autoplay && {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
		...(typeof autoplay === 'object' ? autoplay : {}),
	}

	return (
		<Swiper
			modules={[Autoplay]}
			autoplay={autoplayConfig}
			grabCursor
			className={className}
			{...options}
		>
			{items.map((item, i) => (
				<SwiperSlide key={i}>{renderItem(item, i)}</SwiperSlide>
			))}
		</Swiper>
	)
}
