import { Link } from './Link'
import Image from 'next/image'
import cn, { clsx } from 'clsx'
import ArrowIcon from './icons/ArrowIcon'
import { Button } from '@/components/Button'
import LogoIcon from '@/components/icons/LogoIcon'
import GitHubIcon from '@/components/icons/GitHubIcon'
import appList from '../pages/resources/resourceList.json'
import { AllHTMLAttributes, FC, PropsWithChildren, useCallback, useState } from 'react'

type Props = PropsWithChildren<{ className?: string } & AllHTMLAttributes<HTMLElement>>

const sortedApps = appList.apps.sort((a, b) => a.title.localeCompare(b.title))

// ANCHOR: Apps component
export const Resources: FC<Props> = props => {
	const [filter, setFilter] = useState<Array<string>>([])

	const isTagSelected = useCallback(
		(tag: string) => {
			if (filter.length === 0) {
				return false
			}

			if (filter.some(filterTag => filterTag === tag)) {
				return true
			}

			return false
		},
		[filter]
	)

	const toggleFilter = useCallback(
		(tag: string) => {
			if (filter.length === 0) {
				return setFilter([tag])
			}

			if (isTagSelected(tag)) {
				return setFilter(filter.filter(filterTag => filterTag !== tag))
			}

			setFilter([...filter, tag])
		},
		[filter, isTagSelected]
	)

	const bookmarkedApps: Array<AppConfig> = sortedApps.filter(app => app.bookmark)

	return (
		<div className={clsx('relative', props.className)}>
			{bookmarkedApps.length > 0 && (
				<div>
					<h1 className="text-xl font-bold text-zinc-900 dark:text-white mt-5"> Highlights </h1>

					<div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
						{bookmarkedApps.map((app, id) => {
							return <Card key={id} app={app as AppConfig} />
						})}
					</div>
				</div>
			)}

			<hr className="my-10" />
			<h1 className="text-xl font-bold text-zinc-900 dark:text-white mt-5"> All Resources </h1>

			<div className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 mt-5 mb-10">
				<Tag selected={filter.length === 0} onClick={() => setFilter([])}>
					All Resources
				</Tag>

				{tags.map((tag, id) => (
					<Tag key={id} selected={isTagSelected(tag)} onClick={() => toggleFilter(tag)}>
						{tag}
					</Tag>
				))}
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{sortedApps.map((example, id) => {
					if (filter.length === 0 || example.tags.some(tag => isTagSelected(tag))) {
						return (
							<Item
								key={id}
								image={example.image}
								title={example.title}
								subtitle={example.subtitle}
								url={example.url}
								githubUrl={example.githubUrl}
								description={example.description}
								tags={example.tags}
								bookmark={example.bookmark}
								worldcoin={example.worldcoin}
								onToggleFilter={toggleFilter}
							/>
						)
					}
					return null
				})}
			</div>
		</div>
	)
}

// ANCHOR: Card component for the cards on the top
export const Card: FC<{ app: AppConfig }> = ({ app }) => {
	return (
		<div
			className="rounded-lg shadow-card hover:cursor-pointer hover:scale-105 transition-all"
			onClick={() => (location.href = app.url)}
		>
			<div className="flex relative aspect-card">
				<Image className="absolute inset-0 m-0" src={app.image.lg!} alt={app.title} fill />
			</div>

			<div className="flex items-center gap-x-6 px-6 py-7">
				<div className="flex flex-col grow">
					<div className="font-bold text-base leading-4 text-gray-700">{app.title}</div>
					<div className="mt-1 text-base text-gray-500 leading-4">{app.subtitle}</div>
				</div>

				<div className="flex gap-x-2">
					<div className="flex items-center justify-center w-9 h-9 bg-gray-900 hover:bg-gray-900/80 transition-colors rounded-full">
						<ArrowIcon className="text-gray-100 h-" />
					</div>
				</div>
			</div>
		</div>
	)
}

// ANCHOR: Tag component for the tags inside app card
export const Tag = (props: { selected: boolean; onClick: () => void; children: string }) => {
	return (
		<button
			className={cn('px-4 py-2 font-medium text-base leading-5 border rounded-lg', {
				'border-gray-100 hover:bg-gray-100/60': !props.selected,
				'text-white bg-gray-900 border-transparent hover:bg-zinc-700': props.selected,
			})}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

// ANCHOR: Card component for the list of the apps
const Item = (props: {
	image: {
		sm: string
		lg?: string
	}
	title: string
	subtitle: string
	description: string
	tags: string[]
	url: string
	githubUrl?: string
	bookmark?: boolean
	worldcoin?: boolean
	onToggleFilter: (tag: string) => void
}) => {
	return (
		<div className="relative p-6 border border-gray-100 rounded-lg">
			<div className="flex gap-x-4">
				<div className="relative h-[80px] w-[80px]">
					<Image className="m-0" src={props.image.sm} alt={props.title} layout="fill" objectFit="cover" />
				</div>
				<div className="relative grow flex flex-col">
					<div className="flex flex-col gap-y-1.5">
						<div className="font-bold text-base leading-4">{props.title}</div>
						<div className="text-14 text-gray-500 leading-3">{props.subtitle}</div>
					</div>
					<div className="grow flex items-end gap-x-2">
						<Button
							variant="primary"
							className="items-center h-8 px-4 gap-x-1 no-underline !rounded-lg"
							href={props.githubUrl}
						>
							<GitHubIcon className="w-4 h-4 invert" />
							<div className="font-medium text-14 tracking-[-0.01em]">GITHUB</div>
						</Button>
						<Button
							variant="neutral"
							className="items-center h-8 px-4 gap-x-1 no-underline !rounded-lg"
							href={props.url}
						>
							<div className="font-medium text-14 tracking-[-0.01em]">VISIT</div>
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4.37068 2.57227L9.05067 2.57227C9.37376 2.57227 9.63567 2.83418 9.63567 3.15727L9.63568 7.83726C9.63568 8.16035 9.37377 8.42226 9.05068 8.42226C8.72759 8.42226 8.46568 8.16035 8.46568 7.83726L8.46568 4.56958L2.71295 10.1127C2.48449 10.3412 2.11409 10.3412 1.88564 10.1127C1.65718 9.88429 1.65718 9.51389 1.88564 9.28543L7.63836 3.74227L4.37068 3.74227C4.04759 3.74227 3.78568 3.48035 3.78568 3.15727C3.78568 2.83418 4.04759 2.57227 4.37068 2.57227Z"
									fill="#191C20"
								/>
							</svg>
						</Button>
					</div>
				</div>
			</div>
			<div className="mt-4 text-14 text-gray-500 leading-5 line-clamp-2">{props.description}</div>
			<div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-14 text-primary leading-5 cursor-pointer">
				{props.tags.map((tag, i) => (
					<div key={i} onClick={() => props.onToggleFilter(tag)}>
						{tag}
					</div>
				))}
			</div>
		</div>
	)
}
// ANCHOR: tags handling
const tags = sortedApps.reduce((accumulator: Array<string>, example) => {
	if (accumulator.length === 0) {
		return example.tags.sort()
	}

	const tagsToAdd = example.tags.filter(tag => !accumulator.some(existingTag => existingTag === tag))

	return accumulator.concat(tagsToAdd).sort()
}, [])

export type AppConfig = {
	url: string
	githubUrl?: string
	image: {
		sm: string
		lg?: string
	}
	title: string
	subtitle: string
	description: string
	tags: string[]
	body?: string
	bookmark?: boolean
	worldcoin?: boolean
	legacy?: boolean
}
