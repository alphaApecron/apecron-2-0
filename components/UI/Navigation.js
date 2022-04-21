import {
	Grid,
	Link,
	Box,
	List,
	ListItem,
	ListItemBVutton,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/system';
import styles from './Layout.module.scss';
const preventDefault = (event) => event.preventDefault();
const Navigation = () => {
	return (
		<>
			{/* <Grid item xs={8} display={{ xs: 'flex', md: 'none' }}></Grid> */}
			<Grid
				display='flex'
				justifyContent='flex-end'
				alignItems='center'
				item
				xs={6}
				md={6}
			>
				<DesktopNav />
			</Grid>
		</>
	);
};

const DesktopNav = () => {
	return (
		<>
			<Box
				container
				direction='row'
				justifyContent='flex-end'
				alignItems='center'
				className={styles.navigation}
				component='nav'
				ariaLabel='Primary Navigation'
				sx={{
					typography: 'body1',
				}}
				onClick={preventDefault}
			>
				<Box className={styles['nav-item']} display='inline-block'>
					<Link href='#' underline='none'>
						About
					</Link>
				</Box>

				<Box
					className={styles['nav-item']}
					display='inline-block'
					ml='1.25rem'
				>
					<Link href='#' underline='none'>
						Platform
					</Link>
				</Box>

				<Box
					className={styles['nav-item']}
					display='inline-block'
					ml='1.25rem'
				>
					<Link href='#' underline='none'>
						Launchpad + Locker
					</Link>
				</Box>

				<Box
					className={styles['nav-item']}
					display='inline-block'
					ml='1.25rem'
				>
					<Link href='#' underline='none'>
						Team
					</Link>
				</Box>

				<Box
					className={styles['nav-item']}
					display='inline-block'
					ml='1.25rem'
				>
					<Link href='#' underline='none'>
						Contact
					</Link>
				</Box>
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
