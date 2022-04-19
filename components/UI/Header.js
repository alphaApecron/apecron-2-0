/* Imports */
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
	return (
		<>
			<Grid
				container
				spacing={2}
				position='fixed'
				maxWidth='lg'
				sx={{
					display: `flex`,
					justifyContent: `space-between`,
				}}
			>
				<Logo />
				<Navigation />
			</Grid>
		</>
	);
};

export default Header;
