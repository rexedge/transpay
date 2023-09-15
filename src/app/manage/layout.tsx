import Footer from '@/components/layout/footer';
import SideBar from '@/components/layout/manage-side-bar';
import Navbar from '@/components/layout/navbar';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Transpay - Dashboard',
	description: 'Payment system for the government',
};

export default function ManageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <div className="h-full">
      <Navbar />
      <div className="flex h-full">
        <SideBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
