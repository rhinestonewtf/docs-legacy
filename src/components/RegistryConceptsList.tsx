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
					color="#4940E0"
					// image="/images/docs/use-cases/icons/voting-platforms.svg"
					icon={<PiSignatureBold size={20} color="white" />}
					title="Attestations"
					description="Attestations are onchain assertions made by an entity (attester) about the security of Account Abstraction modules, serving as a seal of authenticity for the associated data. Each attestation consists of two primary elements: the schema and the attestation data."
					items={[]}
					linkHref="/registry/attestations"
				/>

				<UseCasesListItem
					color="#487CA5"
					// image="/images/docs/use-cases/icons/marketplaces.svg"
					icon={<CgDatabase size={20} color="white" />}
					title="Schema"
					description="Schemas are predefined structures utilized for the formation and verification of attestations. They establish a shared format and structure for attestation data, facilitating the creation and verification of various attestations in a trustless fashion."
					items={[]}
					linkHref="/registry/schema-registration"
				/>

				<UseCasesListItem
					color="#00C313"
					// image="/images/docs/use-cases/icons/events.svg"
					icon={<TbUserShield size={20} color="white" />}
					title="Attesters"
					description="
          Attesters are individuals or organizations responsible for creating and signing attestations. They publish the attestation on-chain, making it universally accessible for verification.
          "
					items={[]}
					linkHref="/registry/attestations"
				/>

				<UseCasesListItem
					color="#8080FF"
					// image="/images/docs/use-cases/icons/wealth-distribution.svg"
					icon={<LuCode2 size={20} color="white" />}
					title="Modules"
					description="
          Modules are smart contracts that act as modular components that can be added to smart accounts. These modules and their deployment metadata are stored in the registry. The registry maintains cross-chain consistency, ensuring that users experience the same level of security and functionality, irrespective of the chain they're on.
          "
					items={[]}
					linkHref="/registry/module-registration"
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
