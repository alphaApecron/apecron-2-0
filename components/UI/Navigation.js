import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/system';

const Navigation = () => {
	return (
		<>
			{/* <Grid item xs={8} display={{ xs: 'flex', md: 'none' }}></Grid> */}
			<Grid item xs={8}>
				<DesktopNav />
			</Grid>
		</>
	);
};

const DesktopNav = () => {
	return <>Test</>;
};

const DesktopSubNav = ({ label, href, subLabel }) => {
	return <></>;
};

const MobileNav = () => {
	return <></>;
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return <></>;
};

const NAV_ITEMS = [
	{
		label: 'About',
		children: [
			{
				label: 'Meet our team',
				subLabel: 'Learn about who we are!',
				href: '#',
			},
			{
				label: 'Whitepaper',
				subLabel: 'Extra, extra, read all about it!',
				href: '#',
			},
		],
	},
	{
		label: 'Features',
		children: [
			{
				label: 'The Platform',
				subLabel:
					'Learn about the most secure and fastest trading platform, portfolio manager, and core features',
				href: '#',
			},
			{
				label: 'The Launchpad',
				subLabel: 'An exclusive list for contract work',
				href: '#',
			},
		],
	},
	{
		label: 'Roadmap',
		href: '#',
	},
	{
		label: 'FAQs',
		href: '#',
	},
	{
		label: 'Contact',
		href: '#',
	},
];

export default Navigation;
