import s from './category-card.module.css'

// Image + caption below (Cluster Rings, Bands, Rings, Necklaces ...)
export default function CategoryCard({ image, title, href = '#' }) {
	return (
		<a href={href} className={s.card}>
			<img src={image} alt={title} className={s.image} />
			<p className={s.title}>{title}</p>
		</a>
	)
}
