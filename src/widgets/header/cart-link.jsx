export default function CartLink({ count = 0 }) {
	return (
		<a href='#cart' aria-label='Cart' className='flex items-center gap-1 text-xs text-black'>
			<svg width='16' height='18' viewBox='0 0 16 18' fill='none' aria-hidden='true'>
				<path
					d='M2 5.5h12l-1 11H3l-1-11Z M5.5 5.5V4a2.5 2.5 0 0 1 5 0v1.5'
					stroke='currentColor'
					strokeWidth='1.2'
					strokeLinejoin='round'
				/>
			</svg>
			<span>{count}</span>
		</a>
	)
}
