import React, { useState } from 'react';
import { Link, Box, Container, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../UI/Layout.module.scss';

const SlideMenuContainer = (props) => {
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
			props.handleClick();
		}, 100);
	};
	return (
		<>
			<Container
				className={
					props.isOpen
						? 'slide-menu-container open'
						: 'slide-menu-container'
				}
			>
				<Box
					container
					className={styles.navigationmobile}
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
				<Box>
					<Typography
						variant='p'
						component='p'
						fontSize={{ xs: 16 }}
						color='#fff'
						fontWeight='600'
						mt={5}
						mb={1}
					>
						Contract Address:
					</Typography>
					<Typography variant='p' component='p' fontSize={{ xs: 14 }}>
						0X09AAE6C66BC670016801E34D19B1775B038B6C43
					</Typography>
				</Box>
				<Box position='absolute' top='10px' right='10px'>
					<Link
						to='#'
						className={styles['close-menu']}
						onClick={props.handleClick}
					>
						<CloseIcon />
					</Link>
				</Box>
			</Container>
		</>
	);
};

export default SlideMenuContainer;
