import { FC } from 'react'
import { LuCode2 } from 'react-icons/lu'
import { CgDatabase } from 'react-icons/cg'
import { TbUserShield } from 'react-icons/tb'
import { UseCasesListItem } from '@/components/UseCasesListItem'
import { PiSignatureBold, PiUsersThreeBold } from 'react-icons/pi'

export const RegistryConceptsList: FC<{}> = () => {
	return (
		<div>
			{/* <h2 className="m-0 mt-16 font-bold text-sm text-gray-400 leading-4 uppercase">Core concepts</h2> */}

			<div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<UseCasesListItem
					color="#8080FF"
					icon={<LuCode2 size={20} color="white" />}
					title="Modules"
					description="Modules are smart contracts that hold self-contained features for smart accounts. These modules and their deployment metadata are stored on the Registry, allowing others to attest to them in order for users to find out whether a module is secure or not."
					items={[]}
					linkHref="/registry/module-registration"
				/>

				<UseCasesListItem
					color="#4940E0"
					icon={<PiSignatureBold size={20} color="white" />}
					title="Attestations"
					description="Attestations are onchain assertions made by an entity (attester) about the security of modules. Each attestation consists of two primary elements: the schema and the attestation data."
					items={[]}
					linkHref="/registry/attestations"
				/>

				<UseCasesListItem
					color="#487CA5"
					icon={<CgDatabase size={20} color="white" />}
					title="Schema"
					description="Schemas are predefined structures utilized for the creation and verification of attestation data. They allow attesters to use different attestation formats for different use cases, making the Registry unopinionated towards how attestation data needs to look."
					items={[]}
					linkHref="/registry/schema-registration"
				/>

				<UseCasesListItem
					color="#00C313"
					icon={<TbUserShield size={20} color="white" />}
					title="Attesters"
					description="Attesters are individuals or organizations responsible for creating and signing attestations. They publish the attestation on-chain to be stored on the Registry and queried by users."
					items={[]}
					linkHref="/registry/attestations"
				/>

				{/* <UseCasesListItem
					color="#B65FCF"
					// image="/images/docs/use-cases/icons/social-media.svg"
					icon={<PiUsersThreeBold size={20} color="white" />}
					title="Users"
					description="
          Users represent entities that utilize the information enclosed within the attestations to inform decisions or initiate actions. They trust the attestations based on the reputation and trustworthiness of the attester.
          "
					items={[]}
					linkHref="/registry/querying"
				/> */}
			</div>
		</div>
	)
}
