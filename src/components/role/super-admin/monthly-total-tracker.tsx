import { getDashboardTotalMonthlyRevenue } from '@/lib/get-data';
import DashboardCard from './dashboard-card';

export default async function MonthlyTotalTracker() {
	const monthlyRevenueTotal = await getDashboardTotalMonthlyRevenue(
		'TRACKER_FEES'
	);
	return (
		<DashboardCard
			type='positive'
			title='Monthly Total Tracker'
			amount={monthlyRevenueTotal || 0}
			percent={0}
			desc='Month Till Date'
		/>
	);
}
