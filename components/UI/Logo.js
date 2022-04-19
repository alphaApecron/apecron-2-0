import {Grid, Link} from '@mui/material';
// import Link from '@mui/material/Link';
// import Link from 'next/link';
import logo from '../../public/images/site/apecron-logo-white-hz.svg';
import Image from 'next/image';
import React from 'react';

const Logo = () => (
	<>
		<Grid item xs={10} md={10}>
			<Link href='/'>
				<Image
					src={logo}
					width='200'
					height='84'
					alt='Apecron - Fastest and Secure Trading Platform for Cronos'
				/>
			</Link>
		</Grid>
	</>
);

export default Logo;
