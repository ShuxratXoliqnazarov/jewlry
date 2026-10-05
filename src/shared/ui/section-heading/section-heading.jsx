import s from './section-heading.module.css'

export default function SectionHeading({ eyebrow, title, className = '' }) {
	return (
		<div className={`${s.heading} ${className}`}>
			<p className={s.eyebrow}>{eyebrow}</p>
			<h2 className={s.title}>{title}</h2>
		</div>
	)
}
