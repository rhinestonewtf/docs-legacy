import { FC } from 'react'
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

export const LandingButtons: FC<{}> = () => {
	return (
		<div>
			<div className="grid gap-y-2 mt-12">
				<h3 className="flex items-center uppercase text-2xs m-0 font-medium text-gray-500">
					Getting started
					{/* <div className="ml-2 inline flex items-center normal-case h-4 px-1 font-normal text-3xs text-white bg-gray-400 rounded">
						Coming soon
					</div> */}
				</h3>

				<div className="grid lg:grid-cols-3 gap-2">
					<LinkCard
						href="/overview"
						heading="Overview"
						description="Learn more about Rhinestone and modular smart accounts"
					/>

					<LinkCard
						href="/getting-started"
						heading="Start building"
						description="Using our getting started guide is the easiest way to start building a module"
					/>

					<LinkCard
						href="/tutorials"
						heading="Tutorials"
						description="Follow a tutorial to learn how to build and test a module from scratch"
					/>
				</div>
			</div>
		</div>
	)
}
