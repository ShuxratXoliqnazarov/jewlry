import s from './container.module.css'

// Centers content and adds side paddings (use inside any section)
export default function Container({ children, className = '' }) {
	return <div className={`${s.container} ${className}`}>{children}</div>
}
