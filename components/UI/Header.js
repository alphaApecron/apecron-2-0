/* Imports */
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

import Logo from './Logo';
import Navigation from './Navigation';
import styles from './Layout.module.scss';

const Header = () => {
	return (
		<>
			<Grid
				container
				className={styles.header}
				spacing={{ xs: 0, md: 2 }}
				columns={16}
				maxWidth='false'
				sx={{
					backgroundColor: `rgba(0,0,0,0.6)`,
					display: `flex`,
					justifyContent: { xs: 'center', md: 'space-between' },
					padding: `10px 20px`,
					flexDirection: { xs: 'column', md: 'row' },
				}}
			>
				<Logo />
				<Navigation />
			</Grid>
		</>
	);
};

export default Header;
