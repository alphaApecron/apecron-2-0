import NavItem from '../../components/UI/NavItem';
export const navLinks = [
	{ name: 'Home', path: '/' },
	{
		name: 'Product',
		path: '/product',
	},
	{
		name: 'Features',
		path: '/features',
	},
	{
		name: 'About',
		path: '/about',
	},
	{
		name: <NavItem item='Contact Us' />,
		path: '#contact',
	},
];

export const appLinks = [{ name: 'Launch App', path: '/' }];

export const wpLinks = [
	{ name: 'Whitepaper', path: '../docs/apecron-whitepaper-v1-release.pdf' },
];
