import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react';

export default function DashboardCard({ title, amount, type, percent }: ADBCI) {
	return (
		<div className='h-32 rounded-2xl shadow-md w-full bg-secondary p-3 flex flex-col justify-between'>
			<div className=''>
				<div className='text-primary text-sm'>{title}</div>
				<div className='text-2xl'>₦{amount.toLocaleString()}</div>
			</div>
			<div className='flex flex-col justify-end items-end'>
				{type === 'positive' ? (
					<div className='text-2xl flex items-center text-awesome-foreground'>
						+{percent}% <ArrowUp className='h-5 w-5' />
					</div>
				) : (
					<div className='text-2xl flex items-center text-destructive-foreground'>
						-{percent}% <ArrowDown className='h-5 w-5' />
					</div>
				)}
				<div className='text-sm text-gray-400'>
					previous 30 days
				</div>
			</div>
		</div>
	);
}
