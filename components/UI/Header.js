/* Imports */
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

import Logo from './Logo';
import Navigation from './Navigation';
import styles from './Layout.module.scss';
import SlideMenuToggle from './SlideMenuToggle';

const Header = (props) => {
	return (
		<>
			<Grid
				container
				className={styles.header}
				spacing={{ xs: 0, md: 2 }}
				columns={16}
				flexWrap='nowrap'
				maxWidth='false'
				sx={{
					backgroundColor: `rgba(0,0,0,0.6)`,
					display: `flex`,
					justifyContent: 'space-between',
					padding: `10px 20px`,
					flexDirection: 'row',
				}}
			>
				<Logo />
				<Navigation />
				<Box
					display={{ xs: 'flex', md: 'none' }}
					justifyContent='flex-end'
					alignItems='center'
					xs={12}
					md={6}
				>
					<SlideMenuToggle handleClick={props.handleClick} />
				</Box>
			</Grid>
		</>
	);
};

export default Header;
