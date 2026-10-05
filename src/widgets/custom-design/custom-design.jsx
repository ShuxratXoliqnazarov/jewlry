import { Button } from '../../shared/ui'
import Card from '../../shared/ui/card/Card'
import img from '../../assets/images/IMAGE (5).svg'


// Custom Design — green block + buttons 'Get Inspired', 'Get an Estimate' + Marquee 'Check Out Our Blog'
export default function CustomDesign() {
	return (
		<section className='custom-design py-10 lg:py-18 px-5 lg:px-[8%] bg-[rgb(152,183,164)] flex justify-between items-center gap-40'>
			<div>
				<Card
					miniTitle='Tradition in the Making'
					title='Custom Design'
					
				/>
				<p className='text-[20px] text-center '>Whether you want to create a future heirloom that can be passed down or re-envision a current heirloom while maintaining its sentiment, our Custom process brings meaningful designs to life.</p>
				<div className='flex items-center justify-center gap-7 pt-[35px]'>
					<Button>Get Inspired</Button>
					<Button>Get an Estimate</Button>
				</div>
			</div>
			<img src={img} alt="photo" />
		</section>
	)
}
