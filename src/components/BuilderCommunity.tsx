import { FC } from 'react'
import { Button } from './Button'
import { Link } from '@/components/Link'
import RedirectIcon from './icons/RedirectIcon'

// ANCHOR: LinkCard component for the links in the bottom of the page
const LinkCard: FC<{ href: string; heading: string; description: string; disabled?: boolean }> = ({
	href,
	heading,
	description,
	disabled = false,
}) => {
	return (
		<Link
			className={
				'grid gap-y-2 content-start py-6 px-5 bg-gray-50 border border-gray-100 rounded-xl relative no-underline transition-colors' +
				(disabled ? ' pointer-events-none hover:cursor-not-allowed' : ' hover:bg-gray-100/70')
			}
			href={href}
			disabled={disabled}
		>
			<span className="text-sm font-medium text-gray-900 !m-0 leading-none">{heading}</span>
			<p className="text-sm text-gray-900/80 m-0 leading-[1.3]">{description}</p>
			{disabled ? null : <RedirectIcon className="absolute top-4 right-4 h-5 w-5 text-gray-900" />}
		</Link>
	)
}

export const BuilderCommunity: FC<{}> = () => {
	return (
		<div>
			<h2 className="m-0 mt-16 font-bold text-xl text-black text-center">
				Join the rhinestone builder community
			</h2>

			{/* <Stats className="mt-6" /> */}

			{/* <div className="mt-6 text-2xs text-black/50 text-center"></div> */}

			<div className="flex justify-center mt-6">
				<Button href="https://forms.gle/gLBg7EKUaxx8DpLi7" target="_blank">
					Join the Waitlist
				</Button>
			</div>

			<div className="grid gap-y-2 mt-12">
				<h3 className="flex items-center uppercase text-2xs m-0 font-medium text-gray-500">
					More Resources
					<div className="ml-2 inline flex items-center normal-case h-4 px-1 font-normal text-3xs text-white bg-gray-400 rounded">
						Coming soon
					</div>
				</h3>

				<div className="grid lg:grid-cols-3 gap-2">
					<LinkCard
						href="/quick-start"
						heading="Start building"
						description="Our quick start is the easiest place to start building a module"
						disabled
					/>

					<LinkCard
						href="https://rhinestone.notion.site/Module-ideas-for-product-inspo-338100a2c99540f490472b8aa839da11"
						heading="Module ideas"
						description="Ideas for smart account modules you can build"
					/>

					<LinkCard
						href="/"
						heading="Join the developer community"
						description="Jam on ideas, see what others are building and ask questions"
						disabled
					/>
				</div>
			</div>
		</div>
	)
}
