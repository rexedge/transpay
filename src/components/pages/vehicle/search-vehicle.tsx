import DashboardCard from '@/components/layout/dashboard-card';
import { Button } from '@/components/ui/button';
import {
	driversColumns,
	viewDriversColumns,
} from '@/components/ui/table/columns';
import { DataTable } from '@/components/ui/table/data-table';
import { VIEW_DRIVER_TABLE } from '@/lib/consts';
import { searchVehicle } from '@/lib/controllers/vehicle-controller';
import { getSSession } from '@/lib/get-data';
import { failureIcon, successIcon } from '@/lib/icons';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function SearchVehicle({ id }: { id: string }) {
	const { role } = await getSSession();
	const vehicle = await searchVehicle(id);
	const onWaiver = false;
	const isOwing = true;
	if (!vehicle) {
		notFound();
	}
	return (
		<div className='h-full w-full p-6 flex flex-col gap-6 '>
			<div className='flex items-center justify-between'>
				<div className='text-title1Bold'>
					{`Owner's Name: `}
					{vehicle.owners_name || 'No current driver'}
				</div>
				{/* {role && role.toLowerCase() !== 'agent' && (
					<Button
						className='justify-start  text-white rounded-xl bg-primary-800'
						asChild
						variant={'default'}
					>
						<Link
							href={`/vehicles/${id}/fines`}
							className='shrink-0 whitespace-nowrap'
						>
							<div className='mr-2 h-4 w-4 shrink-0'>
								{addIcon}
							</div>
							Add 
						</Link>
					</Button>
				)} */}
			</div>
			<div className='overflow-y-scroll  w-full'>
				{onWaiver ? (
					<div className='flex flex-col p-3 w-full items-center gap-2 mb-20'>
						<div className=' text-green-500'>
							{successIcon}
						</div>
						<div className='flex py-2'>
							<div className='shrink-0 grow-0 text-title1Bold'>
								Vehicle is on Waiver!
							</div>
						</div>
						<Button asChild>
							<Link
								href={'waiver/history'}
								className='uppercase'
							>
								View Waiver History
							</Link>
						</Button>
					</div>
				) : isOwing ? (
					<div className='flex flex-col p-3 w-full items-center gap-2 mb-20'>
						<div className=' text-red-500'>{failureIcon}</div>
						<div className='flex py-2'>
							<div className='shrink-0 grow-0 text-title1Bold'>
								Vehicle is Owing!
							</div>
						</div>
					</div>
				) : (
					<div className='flex flex-col p-3 w-full items-center gap-2 mb-20'>
						<div className=' text-green-500'>
							{successIcon}
						</div>
						<div className='flex py-2'>
							<div className='shrink-0 grow-0 text-title1Bold'>
								Vehicle is clear!
							</div>
						</div>
					</div>
				)}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full'>
					{role && (
						<>
							<DashboardCard
								name='Vehicle Information'
								href={`/vehicles/${vehicle.vehicle_id}/vehicle-info`}
								image={'/personalinfo.png'}
								description={'View Vehicle information'}
							/>

							{role?.toLowerCase() !== 'agent' && (
								<>
									<DashboardCard
										name='Payment'
										href={`/vehicles/${vehicle.vehicle_id}/payments`}
										image={'/payment.png'}
										description={
											'Make Payment & Check Payment History'
										}
									/>

									<DashboardCard
										name='Fines & Penalties'
										href={`/vehicles/${vehicle.vehicle_id}/fines`}
										image={'/fineandpenal.png'}
										description='Fine Driver & Check Fine Payment'
									/>
								</>
							)}
							<DashboardCard
								name='Waiver Form'
								href={`/vehicles/${vehicle.vehicle_id}/waiver`}
								image={'/fineandpenal.png'}
								description='Fill waiver form to process driver grace period'
							/>
						</>
					)}
				</div>
				{role && (
					<div className='flex flex-col gap-5'>
						{role?.toLowerCase() !== 'agent' && (
							<>
								<div className='flex flex-col gap-2'>
									<div className='flex justify-between py-2'>
										<div className='shrink-0 grow-0 text-title1Bold'>
											Fine History
										</div>
										<div className='shrink-0 grow-0 text-title1Bold'>
											<Button
												asChild
												variant='link'
											>
												<Link
													href={`/vehicles/${vehicle.vehicle_id}/fines`}
												>
													See all
												</Link>
											</Button>
										</div>
									</div>
									<div className=''>
										<DataTable
											columns={
												viewDriversColumns
											}
											data={VIEW_DRIVER_TABLE.slice(
												0,
												3
											)}
										/>
									</div>
								</div>
								<div className='flex flex-col gap-2 '>
									<div className='flex justify-between py-2'>
										<div className='shrink-0 grow-0 text-title1Bold'>
											Payment History
										</div>
										<div className='shrink-0 grow-0 text-title1Bold'>
											<Button
												asChild
												variant='link'
											>
												<Link
													href={`/vehicles/${vehicle.vehicle_id}/payments`}
												>
													See all
												</Link>
											</Button>
										</div>
									</div>
									<div className=''>
										<DataTable
											columns={
												viewDriversColumns
											}
											data={VIEW_DRIVER_TABLE.slice(
												0,
												3
											)}
										/>
									</div>
								</div>
							</>
						)}

						<div className='flex flex-col gap-2 mb-20'>
							<div className='flex justify-between py-2'>
								<div className='shrink-0 grow-0 text-title1Bold'>
									Drivers
								</div>
								<div className='shrink-0 grow-0 text-title1Bold'>
									<Button
										asChild
										variant='link'
									>
										<Link
											href={`/vehicles/${vehicle.vehicle_id}/drivers`}
										>
											See all
										</Link>
									</Button>
								</div>
							</div>
							<div className=''>
								<DataTable
									columns={driversColumns}
									data={vehicle.Drivers.slice(0, 3)}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}