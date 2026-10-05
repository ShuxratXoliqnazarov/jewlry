export default function SectionHeading({ eyebrow, title }) {
	return (
		<div className='text-center text-black'>
			<p className='text-sm leading-[23px] tracking-[0.02em]'>{eyebrow}</p>
			<h2 className='text-[32px] leading-[48px] md:text-[43px] md:leading-[60px]'>{title}</h2>
		</div>
	)
}
