import s from './input.module.css'

// Text field. All native <input> props are passed through (type, value, onChange, placeholder ...)
export default function Input({ className = '', ...props }) {
	return <input className={`${s.input} ${className}`} {...props} />
}
