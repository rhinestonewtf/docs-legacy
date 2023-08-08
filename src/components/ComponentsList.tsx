import { FC } from 'react'
import { TbSdk } from 'react-icons/tb'
import { CgDatabase } from 'react-icons/cg'
import { LuCode2, LuNetwork } from 'react-icons/lu'
import { UseCasesListItem } from '@/components/UseCasesListItem'

// ANCHOR: Main page component
export const ComponentsList: FC<{}> = () => {
	return (
		<div>
			{/* <h2 className="m-0 mt-16 font-bold text-sm text-gray-400 leading-4 uppercase">Components</h2> */}

			<div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<UseCasesListItem
					color="#4940E0"
					icon={<CgDatabase size={20} color="white" />}
					title="Module Registry"
					description="A registry that allows developers to register their modules and auditors to attest to their security."
					items={[]}
					linkHref="/registry"
				/>

				<UseCasesListItem
					color="#487CA5"
					icon={<LuNetwork size={20} color="white" />}
					title="Rhinestone Protocol"
					description="A series of smart contracts that a) connect smart accounts to the registry and allow users to easily install secure modules, and b) provides on-chain mechanisms for module monetisation and revenue sharing."
					items={[]}
				/>

				<UseCasesListItem
					color="#00C313"
					icon={<LuCode2 size={20} color="white" />}
					title="Developer Platform"
					description="Tooling to streamline the process of building, testing and deploying modules for different smart account implementations"
					items={[]}
				/>

				<UseCasesListItem
					color="#8080FF"
					icon={<TbSdk size={20} color="white" />}
					title="Wallet SDK"
					description="A wallet application and tooling that allows users to easily install third-party developer modules and custom UI (coming soon)"
					items={[]}
					soon
				/>
			</div>
		</div>
	)
}
