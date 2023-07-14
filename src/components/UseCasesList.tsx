import useSWR from 'swr'
import Image from 'next/image'
import { Stats } from './Stats'
import { Button } from './Button'
import { FC, useState } from 'react'
import { Link } from '@/components/Link'
import RedirectIcon from './icons/RedirectIcon'
import { SoonUseCases } from '@/components/SoonUseCases'
import { UseCasesListItem } from '@/components/UseCasesListItem'

type Stats = {
	lastWeekCount: number
	totalCount: number
	totalSignups: number
	lastWeekSignups: number
	success: true
}

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

// ANCHOR: Main page component
export const UseCasesList: FC<{}> = () => {
	const fetcher = (url: string) => fetch(url, { method: 'GET' }).then(response => response.json())

	const { data, isLoading } = useSWR<
		{
			lastWeekCount: number
			totalCount: number
			totalSignups: number
			lastWeekSignups: number
			success: true
		},
		{ error: string }
	>(`${process.env.NEXT_PUBLIC_APP_URL}/api/world-id-stats/fetch-verifications`, fetcher)

	return (
		<div>
			<h2 className="m-0 mt-16 font-bold text-sm text-gray-400 leading-4 uppercase">Core concepts</h2>

			<div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<UseCasesListItem
					color="#4940E0"
					image="/images/docs/use-cases/icons/voting-platforms.svg"
					title="Attestations"
					description="Attestations are onchain assertions made by an entity (attestor) about the security of account abstraction modules, serving as a seal of authenticity for the associated data. Each attestation consists of two primary elements: the schema and the attestation data. The schema acts as a standardized structure for creating and validating attestations, while the attestation data represents the actual information subject to attestation."
					// items={['Assertions of security posture', 'Permissionless attestations']}
					items={[]}
					linkHref="architecture/attestations"
				/>

				<UseCasesListItem
					color="#487CA5"
					image="/images/docs/use-cases/icons/marketplaces.svg"
					title="Schema"
					description="Schemas are predefined structures utilized for the formation and verification of attestations. They establish a shared format and structure for attestation data, facilitating the creation and verification of various attestations in a trustless fashion."
					// items={[
					// 	'Predefined structures for attestation data',
					// 	'Permissionless schema creation',
					// 	'Extentibility through external Resolvers',
					// ]}
					items={[]}
					linkHref="architecture/schema-registration"
				/>

				{/* TODO: uncomment after the use case is ready  */}
				{/*<UseCasesListItem*/}
				{/*	color="#9D50FF"*/}
				{/*	image="/images/docs/use-cases/icons/defi-and-fintech.svg"*/}
				{/*	title="DeFi and Fintech"*/}
				{/*	description="Bring seamless compliance, privacy-preserving AML, enhanced fraud prevention, decentralized credit scores and even negative reputation."*/}
				{/*	items={[*/}
				{/*		'Undercollateralized lending & credit',*/}
				{/*		'Credit card chargeback protection',*/}
				{/*		'Zero-knowledge compliance with nationality, age and sanctions',*/}
				{/*		'Private transaction mixer with daily amount limits and ZK compliance for AML',*/}
				{/*		'Private decentralized credit score',*/}
				{/*	]}*/}
				{/*	linkHref="/use-cases/defi-and-fintech"*/}
				{/*/>*/}

				<UseCasesListItem
					color="#00C313"
					image="/images/docs/use-cases/icons/events.svg"
					title="Attestors"
					description="
          Attestors are individuals or organizations responsible for creating and signing attestations. They publish the attestation on-chain, making it universally accessible for verification.
          "
					// items={['Permissionless', 'Reputation', 'Trusted Entities']}
					items={[]}
					linkHref="architecture/attestations"
				/>

				<UseCasesListItem
					color="#8080FF"
					image="/images/docs/use-cases/icons/wealth-distribution.svg"
					title="Modules"
					description="
          Modules are smart contracts that act as modular components that can be added to smart accounts. These modules and their deployment metadata are stored in the registry. The registry maintains cross-chain consistency, ensuring that users experience the same level of security and functionality, irrespective of the chain they're on.
          "
					// items={['Vendor Agnostic', 'Ecosystem', 'Trusted Security Posture']}
					items={[]}
					linkHref="architecture/module-registration"
				/>

				<UseCasesListItem
					color="#B65FCF"
					image="/images/docs/use-cases/icons/social-media.svg"
					title="Users"
					description="
          Users represent entities that utilize the information enclosed within the attestations to inform decisions or initiate actions. They trust the attestations based on the reputation and trustworthiness of the attestor.
          "
					// items={['End Users', 'Smart Accounts', 'Vendor Agnostic']}
					items={[]}
					linkHref="architecture/querying"
				/>

				{/*<UseCasesListItem*/}
				{/*	color="#FFB11B"*/}
				{/*	image="/images/docs/use-cases/icons/token-airdrops.svg"*/}
				{/*	title="Token Airdrops"*/}
				{/*	description="Airdrop tokens or other goods in a fair and transparent manner. Prevent spam or farming. Reward your real users."*/}
				{/*	items={[*/}
				{/*		'One person one share crypto airdrops',*/}
				{/*		'Crypto airdrops with quadratic rewards / caps per person',*/}
				{/*		'Quests and learn-to-earn distributions',*/}
				{/*	]}*/}
				{/*	linkHref="/use-cases/token-airdrops"*/}
				{/*/>*/}

				{/* TODO: uncomment after the use case is ready  */}
				{/*<UseCasesListItem*/}
				{/*	color="#FF5A76"*/}
				{/*	image="/images/docs/use-cases/icons/nfts.svg"*/}
				{/*	title="NFTs"*/}
				{/*	description="Bring soul-bound tokens to life by enabling NFTs that are actually associated with a person, and prevent NFT farming."*/}
				{/*	items={[*/}
				{/*		'One person one PFP avatar collection',*/}
				{/*		'Soulbound NFTs you can transfer between addresses of the same person',*/}
				{/*		'POAP integration',*/}
				{/*	]}*/}
				{/*	linkHref="/use-cases/nfts"*/}
				{/*/>*/}

				{/* TODO: uncomment after the use case is ready  */}
				{/*<UseCasesListItem*/}
				{/*	color="#C4554D"*/}
				{/*	image="/images/docs/use-cases/icons/customer-incentives.svg"*/}
				{/*	title="Customer Incentives"*/}
				{/*	description="Build customer loyalty and acquire new customers efficiently. Ensure beneficiaries are real people while preserving their privacy."*/}
				{/*	items={[*/}
				{/*		'Abuse resistant coupons and loyalty programs for retail businesses',*/}
				{/*		'One-time software free trials',*/}
				{/*		'Fraud-proof referral programs',*/}
				{/*		'Fee subsidies with per-person limits',*/}
				{/*	]}*/}
				{/*	linkHref="/use-cases/customer-incentives"*/}
				{/*/>*/}

				{/* TODO: uncomment after the use case is ready  */}
				{/*<UseCasesListItem*/}
				{/*	color="#39B8A8"*/}
				{/*	image="/images/docs/use-cases/icons/marketplaces.svg"*/}
				{/*	title="Marketplaces"*/}
				{/*	description="Enhance marketplaces with a new level of trust and transparency. Real reviews that others can trust."*/}
				{/*	items={[*/}
				{/*		'Fake review and transaction prevention',*/}
				{/*		'True merchant & customer ratings',*/}
				{/*		'One person one item purchase',*/}
				{/*	]}*/}
				{/*	linkHref="/use-cases/marketplaces"*/}
				{/*/>*/}

				{/* TODO: uncomment after the use case is ready  */}
				{/*<UseCasesListItem*/}
				{/*	color="#8A67AB"*/}
				{/*	image="/images/docs/use-cases/icons/events.svg"*/}
				{/*	title="Events"*/}
				{/*	description="We've all missed a ticket to our favorite event because they magically disappeared in 5 minutes. With World ID only people, not bots, not scalpers can buy tickets."*/}
				{/*	items={['Ticket scalper protection', 'Private age verification', 'Free bandwidth capped WiFi']}*/}
				{/*	linkHref="/use-cases/events"*/}
				{/*/>*/}
			</div>

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
						description="The Quick Start is the easiest place to start"
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
