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
					color="#00C313"
					icon={<LuCode2 size={20} color="white" />}
					title="ModuleKit"
					description="Development framework to streamline the process of building, testing and deploying modules for different smart account implementations"
					items={[]}
					linkHref="/modulekit"
				/>

				<UseCasesListItem
					color="#8080FF"
					icon={<TbSdk size={20} color="white" />}
					title="WalletKit"
					description="Integration kit that allows wallets to use third-party modular components in their UI"
					items={[]}
					linkHref="/walletkit"
					soon
				/>

				<UseCasesListItem
					color="#4940E0"
					icon={<CgDatabase size={20} color="white" />}
					title="Module Registry"
					description="A registry that allows developers to register their modules and auditors to attest to their security."
					items={[]}
					linkHref="/registry"
				/>
			</div>
		</div>
	)
}
