import Image from 'next/image'
import { Link } from '@/components/Link'
import DirectionRightIcon from '@/components/icons/DirectionRightIcon'

export const UseCasesListItem = (props: {
	color: string
	image?: string
	icon?: any
	title: string
	description: string
	items: string[]
	linkHref?: string
	soon?: boolean
}) => {
	return (
		<div className="py-4 pr-4">
			<div className="relative inline-flex">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="48" height="48" rx="16" fill={props.color} />
					<rect opacity="0.5" width="48" height="48" rx="16" fill="url(#paint0_radial_20252_65810)" />
					<defs>
						<radialGradient
							id="paint0_radial_20252_65810"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(1.74834 -9.52632) rotate(55.0103) scale(70.2178 69.915)"
						>
							<stop stopColor="white" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</radialGradient>
					</defs>
				</svg>
				{props.image ? (
					<div className="absolute inset-0 flex items-center justify-center">
						{props.linkHref ? (
							<Link href={props.linkHref}>
								<Image width={24} height={24} src={props.image} alt={props.title} />
							</Link>
						) : (
							<Image width={24} height={24} src={props.image} alt={props.title} />
						)}
					</div>
				) : null}
				{props.icon ? (
					<div className="absolute inset-0 flex items-center justify-center">{props.icon}</div>
				) : null}
			</div>
			{props.linkHref ? (
				<Link href={props.linkHref} className="no-underline">
					<h3 className="flex items-center m-0 mt-2 font-medium text-lg" style={{ color: props.color }}>
						{props.title}{' '}
						{props.soon ? (
							<div className="ml-2 inline flex items-center normal-case h-4 px-1 font-normal text-3xs text-white bg-gray-400 rounded-xl">
								Coming soon
							</div>
						) : null}
					</h3>
				</Link>
			) : (
				<h3 className="flex items-center m-0 mt-2 font-medium text-lg" style={{ color: props.color }}>
					{props.title}
					{props.soon ? (
						<div className="ml-2 inline flex items-center normal-case h-4 px-1 font-normal text-3xs text-white bg-gray-400 rounded-xl">
							Coming soon
						</div>
					) : null}
				</h3>
			)}
			<p className="m-0 mt-2 text-sm">{props.description}</p>
			{props.items.length > 0 ? (
				<ul className="flex flex-col gap-y-1 m-0 mt-5 p-0 list-none">
					{props.items.map((item, index) => (
						<li key={index} className="m-0 p-0 text-sm text-gray-500 leading-5">
							{item}
						</li>
					))}
				</ul>
			) : null}
			{props.linkHref ? (
				<Link
					className="inline-flex items-center gap-x-1 mt-2 text-accents-info-700 no-underline hover:text-accents-info-700/80"
					href={props.linkHref}
				>
					Learn more <DirectionRightIcon className="w-4 h-4" />
				</Link>
			) : null}
		</div>
	)
}
