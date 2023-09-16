import { QuestionMarkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

interface MANAGE_DETAILSI {
	title: string;
	link: string;
	description: string;
	className?: string;
}

export function ManageDetails({
	title,
	link,
	description,
	className,
}: MANAGE_DETAILSI) {
	return (
		<>
			<Link
				className={`w-full h-[254px] shadow-xl p-[30px] bg-primary-50 hover:bg-primary-900 hover:text-white
         rounded-[20px] ${className}`}
				href={link}
			>
				<h3 className='text-h4'>{title}</h3>
				<p className='text-title1 mt-5 line-clamp-3'>
					{description}
				</p>
			</Link>
		</>
	);
}