import s from './link-list.module.css'

// Title + vertical list of links (footer columns, menus)
// links: [{ label: 'Contact', href: '/contact' }]
export default function LinkList({ title, links, className = '' }) {
	return (
		<div className={`${s.list} ${className}`}>
			{title && <h3 className={s.title}>{title}</h3>}
			<ul className={s.items}>
				{links.map(({ label, href = '#' }) => (
					<li key={label}>
						<a href={href} className={s.link}>{label}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
