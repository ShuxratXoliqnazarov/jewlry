// About Us — beige block with big text 'Each Bario Neal piece is crafted...'
import img1 from '../../assets/images/IMAGE (4).svg'

export default function AboutUs() {
	return (
		<section className='about-us'>
			<div className=' bg-white p-[5px] flex flex-wrap gap-[30px] justify-center lg:justify-between w-[80%] m-auto'>
				<p className='text-[#373938] text-[12px] font-bold'>Traceable Gems</p>
				<p className='text-[#373938] text-[12px]  font-bold'>
					Reclaimed Metals
				</p>
				<p className='text-[#373938] text-[12px]  font-bold'>Fairmined Gold</p>
				<p className='text-[#373938] text-[12px]  font-bold'>
					Love in All Ways
				</p>
				<p className='text-[#373938] text-[12px]  font-bold'>Small Footprint</p>
			</div>
			<section className='text-center px-[16%] m-auto bg-[#E5DFD3] py-[50px] lg:py-25'>
				<h4 className='text-[14px] font-bold'>About Us</h4>
				<img
					src={img1}
					alt='photo'
					className='mx-auto py-[30px] lg:py-[50px]'
				/>
				<p className='text-[30px] lg:text-[50px]'>
					Each Bario Neal piece is crafted with ethically sourced precious
					metals to reflect our commitment to human rights and environmental
					sustainability.
				</p>
			</section>
		</section>
	)
}
