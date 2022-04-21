import { Container, Grid, Link, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/system';
const preventDefault = (event) => event.preventDefault();
const Navigation = () => {
	return (
		<>
			{/* <Grid item xs={8} display={{ xs: 'flex', md: 'none' }}></Grid> */}
			<Grid item xs={6} md={6}>
				<DesktopNav />
			</Grid>
		</>
	);
};

const DesktopNav = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					typography: 'body1',
					'& > :not(style) + :not(style)': {
						ml: 2,
					},
				}}
				onClick={preventDefault}
			>
				<Link href='#' underline='none'>
					About
				</Link>
				<Link href='#' underline='none'>
					Platform
				</Link>
				<Link href='#' underline='none'>
					Launchpad + Locker
				</Link>
				<Link href='#' underline='none'>
					Team
				</Link>
				<Link href='#' underline='none'>
					Contact
				</Link>
			</Box>
		</>
	);
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
