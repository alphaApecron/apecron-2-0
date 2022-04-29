import { Grid, Link, Box, Typography } from '@mui/material';
import styles from './Layout.module.scss';
const preventDefault = (event) => event.preventDefault();

const scroll2El = (elID) => {
	window.scrollTo({
		top: document.getElementById(elID).offsetTop - 60,
		behavior: 'smooth',
	});
};

const onLinkClick = (e) => {
	e.preventDefault();
	const goto = e.target.getAttribute('goto');
	setTimeout(() => {
		scroll2El(goto);
	}, 100);
};

const Navigation = (props) => {
	const { isOpen, onChange } = props;
	return (
		<>
			{/* <Grid item xs={8} display={{ xs: 'flex', md: 'none' }}></Grid> */}
			<Grid
				display={{ xs: 'none', md: 'flex' }}
				flexDirection='column'
				justifyContent='center'
				alignItems='flex-end'
				item
				xs={12}
				md={8}
			>
				<Box
					mb={1}
					backgroundColor='rgba(255,255,255,0.1)'
					p='5px'
					borderRadius='4px'
				>
					<Typography variant='p' component='p' fontSize={{ xs: 10 }}>
						Contract Address:
						0X09AAE6C66BC670016801E34D19B1775B038B6C43
					</Typography>
				</Box>
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
				flexDirection='row'
				justifyContent='flex-end'
				alignItems='center'
				className={styles.navigation}
				component='nav'
				ariaLabel='Primary Navigation'
				sx={{
					typography: 'body1',
				}}
			>
				<Box className={styles['nav-item']} display='inline-block'>
					<Link
						href='#'
						goto='about'
						onClick={onLinkClick}
						underline='none'
					>
						About
					</Link>
				</Box>

				<Box
					className={styles['nav-item']}
					display='inline-block'
					ml={{ xs: '10px', md: '1.25rem' }}
				>
					<Link
						href='#'
						goto='platform'
						onClick={onLinkClick}
						underline='none'
					>
						Platform
					</Link>
				</Box>

				<Box
					className={styles['nav-item']}
					display='inline-block'
					ml={{ xs: '10px', md: '1.25rem' }}
				>
					<Link
						href='#'
						goto='launchpad'
						onClick={onLinkClick}
						underline='none'
					>
						Launchpad + Locker
					</Link>
				</Box>

				{/* <Box
					className={styles['nav-item']}
					display='inline-block'
					ml='1.25rem'
				>
					<Link href='#' underline='none'>
						Team
					</Link>
				</Box> */}

				<Box
					className={styles['nav-item']}
					display='inline-block'
					ml={{ xs: '10px', md: '1.25rem' }}
				>
					<Link
						href='#'
						goto='contact'
						onClick={onLinkClick}
						underline='none'
					>
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

const MobileNav = () => {};

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
