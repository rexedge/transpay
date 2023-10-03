import { UpdateAdminForm } from '@/components/forms/update-admin-form';
import { Button } from '@/components/ui/button';
import { agentPaymentColumns } from '@/components/ui/table/columns';
import { DataTable } from '@/components/ui/table/data-table';
import { getAdminById } from '@/lib/controllers/admin-controller';
import { PAYMENT_TABLE } from '@/lib/consts';
import { addIcon } from '@/lib/icons';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateMetadata({ params }: { params: { id: string } }) {
	const admin = await getAdminById(params.id);
	return {
		title: admin?.name.toLocaleUpperCase(),
	};
}

export default async function SingularAdmin({
	params,
}: {
	params: { id: string };
}) {
	const admin = await getAdminById(params.id);
	if (!admin) return notFound();
	else
		return (
			<div className='p-3 xs:p-5 gap-5 w-full h-full flex flex-col'>
				<div className='flex flex-col gap-3 xs:gap-5 '>
					<div className='space-y-6'>
						<div className='h-12 shrink-0 bg-primary w-full rounded-2xl flex overflow-hidden text-white items-center'>
							<div className='h-12 w-12 bg-black p-3'>
								{addIcon}
							</div>
							<div className='pl-1'>
								PERSONAL INFORMATION
							</div>
						</div>
						<UpdateAdminForm admin={admin} />
					</div>
					<div className='flex flex-col gap-2 mb-20'>
						<div className='flex justify-between py-2'>
							<div className='shrink-0 grow-0 text-title1Bold'>
								Total Payments
							</div>
							<div className='shrink-0 grow-0'>
								₦200,000
							</div>
						</div>
						<div>
							<DataTable
								columns={agentPaymentColumns}
								data={PAYMENT_TABLE.slice(0, 5)}
							/>

							<Button
								variant='outline'
								asChild
								className=' justify-center items-center shrink-0 grow-0 w-1/5 rounded-xl flex'
							>
								{/* <Link href={"/admins/[adminid]/payment"}>See More</Link> */}
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
}
