import {
	Container,
	Typography,
	Box,
	Grid,
	Item,
	Link,
	Button,
	Tooltip,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import FooterLogo from '../../public/images/site/apecron-logo-footer-icon.svg';
import styles from './Layout.module.scss';

const Footer = () => {
	return (
		<>
			<Box
				className={styles.footer}
				width='100%'
				sx={{
					px: { xs: 2, md: 8 },
					py: { xs: 4, md: 8 },
					flexGrow: 1,
				}}
			>
				<Container maxWidth='lg'>
					<Grid
						className={styles.lead}
						container
						spacing={{ md: 6 }}
						columns={12}
						direction={{ xs: 'column', md: 'row' }}
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						{/*  Footer About */}
						<Grid
							item
							className={styles['footer-about']}
							xs={12}
							md={7}
							spacing={2}
							display={{ xs: 'none', md: 'flex' }}
							flexDirection='row'
						>
							<Grid item xs='auto' mr={3}>
								<Image
									src={FooterLogo}
									width='72'
									alt='Apecron is a revolutionary ecosystem of DeFi products built for Cronos'
								/>
							</Grid>
							<Grid item xs>
								<Typography
									variant='h4'
									component='h3'
									fontSize={24}
									mb={2}
								>
									Apecron - The Future Of DEX on Cronos
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
									lineHeight={{ xs: 1.4, md: 1.6 }}
								>
									Apecron is innovating and delivering DeFi
									solutions on Cronos Chain that includes a
									Dex and portfolio / trading management
									platform, secure project launchpad,
									liquidity locker, and NFT products to bring
									new value to the crypto space and bring
									safer investment tools. Apecron is
									developing new technologies to improve the
									way users can learn and interact with crypto
									in a safe environment and reducing the
									outcome of scams.
								</Typography>
							</Grid>
						</Grid>
						{/*  Footer About */}

						{/*  Footer Links/Resources */}
						<Grid
							item
							className={styles['footer-about']}
							xs={2}
							mb={{ xs: 2, md: 0 }}
							spacing={2}
							display='flex'
							flexDirection='column'
						>
							<Typography
								variant='h4'
								component='h3'
								fontSize={20}
								mb={1}
							>
								Quick Links
							</Typography>
							<Box display='flex' flexDirection='column'>
								<Link
									href='/docs/apecron.pdf'
									target='_blank'
									underline='none'
									color='#fff'
									mb={0.75}
								>
									Whitepaper
								</Link>
								<Link
									href='https://twitter.com/apecronofficial'
									target='_blank'
									underline='none'
									color='#fff'
									mb={0.75}
								>
									Twitter
								</Link>
								<Link
									href='https://telegram.me/apecron'
									target='_blank'
									underline='none'
									color='#fff'
									mb={0.75}
								>
									Telegram
								</Link>
								<Link
									href='https://discord.gg/TBHgPj7PHS'
									target='_blank'
									underline='none'
									color='#fff'
									mb={0.75}
								>
									Discord
								</Link>
								<Link
									href='https://www.instagram.com/apecronofficial/'
									target='_blank'
									underline='none'
									color='#fff'
									mb={0.75}
								>
									Instagram
								</Link>
								<Link
									href='https://apecronofficial.medium.com/'
									target='_blank'
									underline='none'
									color='#fff'
								>
									Medium
								</Link>
							</Box>
						</Grid>
						{/*  Footer Links/Resources */}

						{/*  Footer Contact */}
						<Grid
							item
							className={styles['footer-about']}
							xs={3}
							spacing={2}
							display='flex'
							flexDirection='column'
						>
							<Typography
								variant='h4'
								component='h3'
								fontSize={20}
								mb={1}
							>
								Contact Us
							</Typography>
							<Box display='flex' flexDirection='column' mb={1}>
								<Link
									href='mailto:info@apecron.com'
									underline='none'
									color='#fff'
									mb={0.5}
								>
									info@apecron.com
								</Link>
							</Box>
							<Typography
								variant='p'
								component='p'
								fontSize={{ xs: 12 }}
								lineHeight={1.6}
							>
								&copy;2022 Blockchain Innovations LLC. <br />
								All rights reserved
							</Typography>
						</Grid>
						{/*  Footer Contact */}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
