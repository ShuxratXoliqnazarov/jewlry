export default function TopBar() {
	return (
		<div className='flex h-10 items-center justify-center gap-1 bg-[#cfe1e7] text-xs'>
			<span className='text-[#111]'>Read our</span>
			<a href='#reviews' className='text-black underline-offset-2 hover:underline'>
				Customer Reviews
			</a>
		</div>
	)
}
