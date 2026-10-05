import s from './image-link.module.css'

// Clickable image with zoom on hover. Without `image` shows a beige placeholder
// ratio — CSS aspect-ratio, e.g. '1 / 1', '4 / 5'
export default function ImageLink({ image, alt = '', href = '#', ratio = '1 / 1', className = '' }) {
	return (
		<a href={href} className={`${s.link} ${className}`} style={{ aspectRatio: ratio }}>
			{image ? <img src={image} alt={alt} className={s.image} /> : <span className={s.placeholder} aria-label={alt} />}
		</a>
	)
}
