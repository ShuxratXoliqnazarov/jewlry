import s from './marquee.module.css'

export default function Marquee({ items, className = '', duration = 30 }) {
	return (
		<div className={`${s.marquee} ${className}`}>
			<div className={s.track} style={{ animationDuration: `${duration}s` }}>
				{[0, 1].map(copy => (
					<ul key={copy} className={s.group} aria-hidden={copy === 1}>
						{items.map(item => (
							<li key={item} className={s.item}>
								{item}
							</li>
						))}
					</ul>
				))}
			</div>
		</div>
	)
}
