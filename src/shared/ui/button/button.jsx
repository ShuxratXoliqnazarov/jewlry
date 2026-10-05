import s from './button.module.css'
export default function Button({ children, href, variant = 'light', type = 'button', onClick, className = '' }) {
	const cls = `${s.button} ${s[variant]} ${className}`

	if (href) {
		return <a href={href} className={cls}>{children}</a>
	}

	return <button type={type} onClick={onClick} className={cls}>{children}</button>
}

