import { viewDriversColumns } from '@/components/ui/table/columns';
import { DataTable } from '@/components/ui/table/data-table';
import { VIEW_DRIVER_TABLE } from '@/lib/consts';
import { getVehicleById } from '@/lib/controllers/vehicle-controller';
import React from 'react';

export default async function Payments({ params }: { params: { id: string } }) {
	const vehicle = await getVehicleById(params.id);
	return (
		<div className='w-full flex flex-col gap-3 mb-8 p-2 xs:p-5 overflow-y-scroll'>
			<div className=' text-title1Bold py-2 '>
				All payment for vehicle owned by {vehicle?.owners_name}
			</div>

			<div className='flex flex-col gap-2 mb-20'>
				<div className=''>
					<DataTable
						columns={viewDriversColumns}
						data={VIEW_DRIVER_TABLE}
					/>
				</div>
			</div>
		</div>
	);
}
