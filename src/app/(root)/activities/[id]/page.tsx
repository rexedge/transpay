import React from 'react';
import { ACTIVITIES } from '../../../../../data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { unslugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
export default function Activity({ params }: { params: { id: string } }) {
	const activity = ACTIVITIES.find(
		(activity) => activity.activity_id === params.id
	);
	if (!activity) return notFound();
	return (
		<div className='grid place-items-center w-full h-full'>
			<div className='flex flex-col items-center justify-center'>
				<div className='text-2xl mb-10'>
					Activity {unslugify(activity?.name)}
				</div>
				<div className=''>
					<div className=''>Activity: {activity?.name}</div>
					<div className=''>Activity ID: {activity?.id}</div>
					<div className=''>Activity Date: {activity?.date}</div>
					<div className=''>Activity Time: {activity?.time}</div>
				</div>
				<Button
					asChild
					className='w-full mt-10 uppercase'
				>
					<Link href='/activities'>Back To Activities</Link>
				</Button>
			</div>
		</div>
	);
}
