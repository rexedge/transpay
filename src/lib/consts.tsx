import {
	agentdriverIcon,
	agentsIcon,
	dashboardIcon,
	driverIcon,
	finesIcon,
	heavyVehiclesIcon,
	peopleIcon,
	refundIcon,
	revenueIcon,
	scanIcon,
} from './icons';

export const SIDEBAR_LINKS = [
	{
		name: 'Dashboard',
		href: '/dashboard',
		icon: dashboardIcon,
	},
	{
		name: 'Agents',
		href: '/dashboard/agents',
		icon: agentsIcon,
	},
	{
		name: 'Drivers',
		href: '/dashboard/drivers',
		icon: driverIcon,
	},
	{
		name: 'Heavy Vehicles',
		href: '/dashboard/heavy-vehicles',
		icon: heavyVehiclesIcon,
	},
	{
		name: 'Fines & Penalties',
		href: '/dashboard/fines',
		icon: finesIcon,
	},
	{
		name: 'Revenue',
		href: '/dashboard/revenue',
		icon: revenueIcon,
	},
];
export const DRIVERS_CARD=[
	{
		name: 'Personal Information',
		description:'Edit Drivers information',
		href: '/dashboard/drivers',
		image: '/personalinfo.png',
	},
	{
		name: 'Payment',
		description:"Make Payment & Check Payment History",
		href: '/dashboard/revenue',
		image: '/payment.png',
	},
	{
		name: 'Fines & Penalties',
		description:"Fine Driver & Check Fine Payment",
		href: '/dashboard/fines',
		image: '/fineandpenal.png',
	}

]
export const DASHBOARD_CARD = [
	{
		name: 'Drivers',
		description: 'Drivers list & Update',
		icon: peopleIcon,
		number: '2,500',
		href: '/dashboard/drivers',
		image: '/tricycle.jpg',
	},
	{
		name: 'Agents',
		description: 'Agents List',
		icon: peopleIcon,
		number: '1,500',
		href: '/dashboard/agents',
		image: '/tricycle.jpg',
	},
	{
		name: 'Companies & trucks',
		description: 'Company Vehicle Registration & Heavy Vehicles',
		icon: '',
		number: '',
		href: '/dashboard/heavy-vehicles',
		image: '/tricycle.jpg' ,
	},
	{
		name: 'Fines & Penalties',
		description: 'Create fines & penalties',
		icon: '',
		number: '',
		href: '/dashboard/fines',
		image: '/tricycle.jpg',
	},
	{
		name: 'Revenue and Stats',
		description: 'View Money raised and submitted.',
		icon: '',
		number: '',
		href: '/dashboard/revenue',
		image: '/tricycle.jpg',
	},
];

export const AGENT_TABLE = [
	{
		name: 'Emeka Ignatius',
		area: 'Agege',
		phone: '08061719533',
		status: 'active',
	},
	{
		name: 'Emmanuel Ozigbo',
		area: 'Festac',
		phone: '08061719533',
		status: 'inactive',
	},
	{
		name: 'Agent 1',
		area: 'Agege',
		phone: '08065543210',
		status: 'active',
	},
	{
		name: 'Agent 2',
		area: 'Festac',
		phone: '08062345678',
		status: 'inactive',
	},
	{
		name: 'Agent 3',
		area: 'Ikeja',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 4',
		area: 'Surulere',
		phone: '08064321098',
		status: 'inactive',
	},
	{
		name: 'Agent 5',
		area: 'Lekki',
		phone: '08063456789',
		status: 'active',
	},
	{
		name: 'Agent 6',
		area: 'Ajao Estate',
		phone: '08060987654',
		status: 'inactive',
	},
	{
		name: 'Agent 7',
		area: 'Yaba',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 8',
		area: 'Oshodi',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 9',
		area: 'Ikoyi',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 10',
		area: 'Victoria Island',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 11',
		area: 'Maryland',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 12',
		area: 'Ikorodu',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 13',
		area: 'Gbagada',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 14',
		area: 'Magodo',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 15',
		area: 'Sangotedo',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 16',
		area: 'Egbeda',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 17',
		area: 'Apapa',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 18',
		area: 'Ijebu Ode',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 19',
		area: 'Akoka',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 20',
		area: 'Mushin',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 21',
		area: 'Ikeja',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 22',
		area: 'Ajao Estate',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 23',
		area: 'Yaba',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 24',
		area: 'Oshodi',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 25',
		area: 'Ikoyi',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 26',
		area: 'Victoria Island',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 27',
		area: 'Maryland',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 28',
		area: 'Ikorodu',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 29',
		area: 'Gbagada',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 30',
		area: 'Magodo',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 31',
		area: 'Sangotedo',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 32',
		area: 'Egbeda',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 33',
		area: 'Apapa',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 34',
		area: 'Ijebu Ode',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 35',
		area: 'Akoka',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 36',
		area: 'Mushin',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent 37',
		area: 'Festac',
		phone: '08064321987',
		status: 'active',
	},
	{
		name: 'Agent 38',
		area: 'Agege',
		phone: '08063456781',
		status: 'inactive',
	},
	{
		name: 'Agent 39',
		area: 'Lekki',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent 40',
		area: 'Surulere',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent A',
		area: 'Ikeja',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent B',
		area: 'Yaba',
		phone: '08064321987',
		status: 'inactive',
	},
	{
		name: 'Agent C',
		area: 'Surulere',
		phone: '08063456781',
		status: 'active',
	},
	{
		name: 'Agent D',
		area: 'Oshodi',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent E',
		area: 'Lekki',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent F',
		area: 'Ikoyi',
		phone: '08064321987',
		status: 'inactive',
	},
	{
		name: 'Agent G',
		area: 'Ajao Estate',
		phone: '08063456781',
		status: 'active',
	},
	{
		name: 'Agent H',
		area: 'Festac',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent I',
		area: 'Victoria Island',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent J',
		area: 'Agege',
		phone: '08064321987',
		status: 'inactive',
	},
	{
		name: 'Agent K',
		area: 'Ikorodu',
		phone: '08063456781',
		status: 'active',
	},
	{
		name: 'Agent L',
		area: 'Magodo',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent M',
		area: 'Maryland',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent N',
		area: 'Egbeda',
		phone: '08064321987',
		status: 'inactive',
	},
	{
		name: 'Agent O',
		area: 'Gbagada',
		phone: '08063456781',
		status: 'active',
	},
	{
		name: 'Agent P',
		area: 'Apapa',
		phone: '08067654321',
		status: 'inactive',
	},
	{
		name: 'Agent Q',
		area: 'Mushin',
		phone: '08061234567',
		status: 'active',
	},
	{
		name: 'Agent R',
		area: 'Akoka',
		phone: '08064321987',
		status: 'inactive',
	},
	{
		name: 'Agent S',
		area: 'Ijebu Ode',
		phone: '08063456781',
		status: 'active',
	},
	{
		name: 'Agent T',
		area: 'Sangotedo',
		phone: '08067654321',
		status: 'inactive',
	},
];

export const DRIVER_TABLE = [
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emeka Ignatius',
		plate: 'tfgh-ilt',
		status: 'active',
		category: 'cleared',
	},
	{
		name: 'Emmanuel Ozigbo',
		plate: 'trhb6-9jw',
		status: 'inactive',
		category: 'debtors',
	},
	{
		name: 'Divine Onyekachukwu',
		plate: 'gtw8-owg',
		status: 'waived',
		category: 'debtors',
	},
	{
		name: 'Oyeniran Ayobami',
		plate: '97yy-kjy',
		status: 'active',
		category: 'cleared',
	},
];
export const PAYMENT_TABLE = [
	{
		driver: 'Emeka Ignatius',
		amount: '1,500',
		date: '11/08/23',
		status: 'successful',
	},
	{
		driver: 'Emmanuel Ozigbo',
		amount: '3,000',
		date: '11/08/23',
		status: 'processing',
	},
	{
		driver: 'Divine Onyekachukwu',
		amount: '8,392',
		date: '11/08/23',
		status: 'pending',
	},
	{
		driver: 'Oyeniran Ayobami',
		amount: '6,793',
		date: '11/08/23',
		status: 'failed',
	},
];
export const VIEWDRIVER_TABLE = [
	{
		Date: '23-08-2023',
		amount_NGN: '15000',
		payment_type: 'Cash',
		handled_by: 'Agent john',
	},
	{
		Date: '22-08-2023',
		amount_NGN: '10000',
		payment_type: 'Bank Transfer',
		handled_by: 'Agent James',
	},
	{
		Date: '24-08-2023',
		amount_NGN: '25000',
		payment_type: 'Cash',
		handled_by: 'Agent Jane',
	},
	{
		Date: '21-08-2023',
		amount_NGN: '60,000',
		payment_type: 'Mobile Transfer',
		handled_by: 'Agent Janet',
	},
	{
		Date: '23-08-2023',
		amount_NGN: '5000',
		payment_type: 'Cash',
		handled_by: 'Agent Jonathan',
	},
	{
		Date: '25-08-2023',
		amount_NGN: '19000',
		payment_type: 'Cash',
		handled_by: 'Agent Helen',
	},

]

// WEB AGENT

export const WEBAGENTSIDEBAR_LINKS = [
	{
		name: 'Dashboard',
		href: '/web-agent',
		icon: dashboardIcon,
	},
	{
		name: 'Scan',
		href: '/web-agent/scan',
		icon: scanIcon,
	},
	{
		name: 'Driver',
		href: '/web-agent/driver',
		icon: agentdriverIcon,
	},
	{
		name: 'Refunds',
		href: '/web-agent/refunds',
		icon: refundIcon,
	},
];
export const WEBAGENT_CARD = [
	{
		name: 'Scan Plate',
		description: 'Scan Driver Plate to retrieve drivers information plate',
		icon: '',
		number: '',
		href: '/web-agent/scan',
		image: '/scanplate.png',
		
	},
	
	{
		name: 'Drivers',
		description: 'Drivers list & Update',
		icon: peopleIcon,
		number: '2,500',
		href: '/web-agent/driver',
		image: '/drivers.png',
		
	},
	{
		name: 'Refunds',
		description: 'Return Drivers Money',
		href: '/web-agent/refunds',
		image: '/refunds.png',
	},
];

export const FINE_CARDS: FinesCardP[] = [
	{
		title: 'Overload',
		description: 'Long description',
		type: 'fine',
		href: '/dashboard',
		amount: '7000'
	},{
		title: 'Overload',
		description: 'Long description',
		type: 'fine',
		href: '/dashboard',
		amount: '25000'
	},{
		title: 'Overload',
		description: 'Long description',
		type: 'fine',
		href: '/dashboard',
		amount: '50000'
	},{
		title: 'Overload',
		description: 'Long description',
		type: 'fine',
		href: '/dashboard',
		amount: '5000'
	},{
		title: 'Overload',
		description: 'Long description',
		type: 'fine',
		href: '/dashboard',
		amount: '5000'
	},{
		title: 'Overload',
		description: 'Long description',
		type: 'fine',
		href: '/dashboard',
		amount: '5000'
	}
]
