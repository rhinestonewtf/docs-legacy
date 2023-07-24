import { FC } from 'react'
import { UseCasesListItem } from '@/components/UseCasesListItem'

// ANCHOR: Main page component
export const ComponentsList: FC<{}> = () => {
	return (
		<div>
			<h2 className="m-0 mt-16 font-bold text-sm text-gray-400 leading-4 uppercase">Components</h2>

			<div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<UseCasesListItem
					color="#4940E0"
					image="/images/docs/use-cases/icons/voting-platforms.svg"
					title="[Rhinestone Registry]"
					description="The [Rhinestone Registry] aims to solve the security concerns of modular smart accounts by facilitating an open and permissionless platform for registering, verifying, and propagating the security attestations of smart account modules across various EVM chains."
					items={[]}
					linkHref="/registry"
				/>
			</div>
		</div>
	)
}
