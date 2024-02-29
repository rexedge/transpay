import { UserNav } from '@/components/shared/user-nav-bar';
import { Button } from '@/components/ui/button';
import Searchbar from '@/components/ui/searchbar';
import { getAdminMe } from '@/lib/controllers/admin-controller';
import { getAgentMe } from '@/lib/controllers/agent-controller';
import { getSSession } from '@/lib/get-data';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
	const { role } = await getSSession();
	const user =
		role?.toLowerCase() === 'agent'
			? await getAgentMe()
			: await getAdminMe();
	return (
		<main className='gap-5 h-[100svh] relative'>
			<div className='h-16 w-full pr-5 shrink-0 fixed z-50 '>
				<div className='flex items-center justify-end h-full gap-1'>
					<Button
						asChild
						className='rounded'
						variant={'link'}
					>
						<Link href={'/scan'}>Scan QR</Link>
					</Button>
					<div className='flex gap-3 items-center text-primary-700'>
						{user ? (
							<>
								<Button
									asChild
									className='rounded'
								>
									<Link href={'/dashboard'}>
										Dashboard
									</Link>
								</Button>
								<UserNav user={user} />
							</>
						) : (
							<Button
								asChild
								className='rounded'
							>
								<Link href='/sign-in'>Login</Link>
							</Button>
						)}
					</div>
				</div>
			</div>

			<div className='h-full grid p-3 lg:p-20'>
				<div className='w-full max-w-xl mx-auto flex flex-col items-center px-5 pt-24 gap-10 '>
					<div className='w-60 h-18 shrink-0 px-5'>
						<Image
							src={'/logo.png'}
							height={60}
							width={150}
							className='h-full w-full'
							alt='Transpay Logo'
						/>
					</div>
					<Searchbar
						placeholder='Search Vehicle'
						variant='secondary'
					/>
				</div>
			</div>

			<div className='bg-secondary w-full shrink-0 fixed bottom-0 z-50 '>
				<div className='w-full h-10 bg-primary/20 flex justify-between items-center px-3 lg:px-9 '>
					<div className=''>Anambra</div>
					<div className=''>Nigeria</div>
				</div>
				<div className='flex lg:flex-row items-center justify-between gap-1 px-5'>
					<div className='flex justify-between'>
						<Button
							asChild
							className='rounded'
							variant={'link'}
						>
							<Link href={'/about'}>About</Link>
						</Button>
						<Button
							asChild
							className='rounded'
							variant={'link'}
						>
							<Link href={'/faq'}>FAQ</Link>
						</Button>
					</div>
					<div className='text-sm hidden lg:flex'>
						Solution is here!!!
					</div>
					<div className='flex'>
						<Button
							asChild
							className='rounded'
							variant={'link'}
						>
							<Link href={'/privacy'}>Privacy</Link>
						</Button>
						<Button
							asChild
							className='rounded'
							variant={'link'}
						>
							<Link href={'/terms'}>Terms</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
