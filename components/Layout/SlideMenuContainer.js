import React, { useState } from 'react';
import { Link, Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '../../public/images/social/telegram-color.svg';
import DiscordIcon from '../../public/images/social/discord-color.svg';
import TwitterIcon from '../../public/images/social/twitter-color.svg';
import MediumIcon from '../../public/images/social/medium-color.svg';
import InstagramIcon from '../../public/images/social/instagram-color.svg';
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
				<Grid
					container
					columns={10}
					direction='row'
					columnSpacing={3}
					justifyContent='center'
					alignItems='center'
					pt={2}
				>
					<Grid item xs='auto'>
						<Link
							href='https://telegram.me/apecron'
							underline='none'
							target='_blank'
						>
							<Image
								src={TelegramIcon}
								width='32'
								height='32'
								alt='Join Apecron on Telegram'
							/>
						</Link>
					</Grid>
					<Grid item xs='auto'>
						<Link
							href='https://discord.gg/TBHgPj7PHS'
							underline='none'
							target='_blank'
						>
							<Image
								src={DiscordIcon}
								width='32'
								height='32'
								alt='Join Apecron on Discord'
							/>
						</Link>
					</Grid>
					<Grid item xs='auto'>
						<Link
							href='https://twitter.com/apecronofficial'
							underline='none'
							target='_blank'
						>
							<Image
								src={TwitterIcon}
								width='32'
								height='32'
								alt='Join Apecron on Twitter'
							/>
						</Link>
					</Grid>
					<Grid item xs='auto'>
						<Link
							href='https://www.instagram.com/apecronofficial'
							underline='none'
							target='_blank'
						>
							<Image
								src={InstagramIcon}
								width='32'
								height='32'
								alt='Join Apecron on Instagram'
							/>
						</Link>
					</Grid>
					<Grid item xs='auto'>
						<Link
							href='https://apecronofficial.medium.com/'
							underline='none'
							target='_blank'
						>
							<Image
								src={MediumIcon}
								width='32'
								height='32'
								alt='Join Apecron on Medium'
							/>
						</Link>
					</Grid>
				</Grid>
				<Box>
					<Typography
						variant='p'
						component='p'
						fontSize={{ xs: 16 }}
						color='#fff'
						fontWeight='600'
						mt={3}
						mb={1}
					>
						Contract Address:
					</Typography>
					<Typography variant='p' component='p' fontSize={{ xs: 14 }}>
						0x09Aae6c66BC670016801e34d19B1775b038B6C43
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
