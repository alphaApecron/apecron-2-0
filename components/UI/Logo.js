import { Grid, Link } from '@mui/material';
// import Link from '@mui/material/Link';
// import Link from 'next/link';
import logo from '../../public/images/site/apecron-logo-gradient-website.svg';
import Image from 'next/image';
import React from 'react';
const scroll2El = (elID) => {
	window.scrollTo({
		top: 0,
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

const Logo = () => {
	return (
		<Grid item xs={12} md={10}>
			<Link
				href='#'
				goto='masthead'
				onClick={onLinkClick}
				sx={{
					transition: 'opacity 0.3s ease',
					':hover': {
						opacity: '0.8',
					},
				}}
			>
				<Image
					src={logo}
					width='215'
					height='65'
					alt='Apecron - Fastest and Most Secure Trading Platform for Cronos'
				/>
			</Link>
		</Grid>
	);
};

export default Logo;
