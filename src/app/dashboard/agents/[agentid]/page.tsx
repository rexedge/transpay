import ViewAgentDetails from '@/components/pages/agents/view-agent-details';
import { Button } from '@/components/ui/button';
import { agentsColumns } from '@/components/ui/table/columns';
import { DataTable } from '@/components/ui/table/data-table';
import { AGENT_TABLE } from '@/lib/consts';
import { addIcon } from '@/lib/icons';
import Link from 'next/link';
import React from 'react';

export default function SingularAgent() {
	return (
		<div className='p-5 gap-5 w-full h-full flex flex-col'>
			<div className='flex justify-between'>
				<div className='shrink-0 grow-0 text-title1Bold'>Agent Name</div>
				<div className='shrink-0 grow-0'>
					<Button
						className='justify-start text-white rounded-xl bg-primary-800'
						asChild
						variant={'default'}
					>
						<Link
							href={'/dashboard/agents/add-new'}
							className='shrink-0 whitespace-nowrap text-white'
						>
							<div className='mr-2 h-4 w-4 shrink-0'>
								{addIcon}
							</div>
							Make an Admin
						</Link>
					</Button>
				</div>
			</div>
			<div className='flex flex-col gap-5 overflow-y-scroll'>
				<div className='space-y-6'>
					<div>
						<h3 className='bg-primary-800 h-12 p-2  rounded-lg px-5 text-title1Bold'>
							Profile
						</h3>
					</div>
					<ViewAgentDetails />
				</div>
				<div className='flex flex-col gap-2 mb-20'>
					<div className='flex justify-between py-2'>
						<div className='shrink-0 grow-0 text-title1Bold'>
							Total Payments
						</div>
						<div className='shrink-0 grow-0 text-title1Bold'>N200,000</div>
					</div>
					<div className=''>
						<DataTable
							columns={agentsColumns}
							data={AGENT_TABLE}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
