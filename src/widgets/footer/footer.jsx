// Footer — link columns (Get In Touch, About, Social, Policy, FAQs) + 'We Find Always in All Ways' + email form
import { useState } from 'react'
import { Button, Container, Input, LinkList } from '../../shared/ui'
import s from './footer.module.css'

const LEFT_COLUMNS = [
	{
		title: 'Get In Touch',
		links: [
			{ label: 'Contact' },
			{ label: 'Appointments' },
			{ label: 'Philadelphia Store' },
			{ label: 'NYC Store' },
			{ label: 'Wholesale' },
			{ label: 'Press' },
		],
	},
	{
		title: 'About',
		links: [
			{ label: 'Our Story' },
			{ label: 'Ethics' },
			{ label: 'Sustainability' },
			{ label: 'Careers' },
			{ label: 'Blog' },
		],
	},
	{
		title: 'Social',
		links: [
			{ label: 'Instagram', href: 'https://www.instagram.com/barioneal/' },
			{ label: 'Facebook' },
			{ label: 'Pinterest' },
			{ label: 'Twitter' },
		],
	},
]

const RIGHT_COLUMNS = [
	{
		title: 'Policy',
		links: [
			{ label: 'Shipping' },
			{ label: 'Returns' },
			{ label: 'Warranty' },
			{ label: 'Privacy' },
			{ label: 'Terms of Use' },
		],
	},
	{
		title: 'FAQs',
		links: [
			{ label: 'Ring Sizing' },
			{ label: 'Jewelry Care' },
			{ label: 'Financing' },
			{ label: 'Gift Cards' },
		],
	},
]

export default function Footer() {
	const [email, setEmail] = useState('')
	const [isSent, setIsSent] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSent(true)
		setEmail('')
	}

	return (
		<footer className={s.footer}>
			<Container className={s.inner}>
				<div className={s.columns}>
					{LEFT_COLUMNS.map((col) => (
						<LinkList key={col.title} title={col.title} links={col.links} />
					))}
				</div>

				<div className={s.center}>
					<h2 className={s.slogan}>
						We Find Always
						<br />
						in All Ways.
					</h2>

					{isSent ? (
						<p className={s.thanks}>Thank you for subscribing!</p>
					) : (
						<form className={s.form} onSubmit={handleSubmit}>
							<Input
								type="email"
								required
								placeholder="Email Address"
								aria-label="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Button type="submit" variant="outline">Sign Up</Button>
						</form>
					)}
				</div>

				<div className={`${s.columns} ${s.columnsRight}`}>
					{RIGHT_COLUMNS.map((col) => (
						<LinkList key={col.title} title={col.title} links={col.links} />
					))}
				</div>
			</Container>
		</footer>
	)
}
