import { ThemeProvider } from '@/components/ui/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

const lato = Lato({
	weight: '300',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${lato.className} `}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					<div className='flex flex-col w-full'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
