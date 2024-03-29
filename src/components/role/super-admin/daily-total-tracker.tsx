import React from 'react';
import DashboardCard from './dashboard-card';
import { getDashboard, getDashboardTotalDailyRevenue } from '@/lib/get-data';

export default async function DailyTotalTracker() {
	const dailyRevenueTotal = await getDashboardTotalDailyRevenue(
		'TRACKER_FEES'
	);
	return (
		<DashboardCard
			type='positive'
			title='Daily Total Tracker'
			amount={dailyRevenueTotal || 0}
			percent={0}
			desc='Today'
		/>
	);
}
