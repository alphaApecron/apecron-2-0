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
import EmailIcon from '../../../public/images/icons/email-icon.png';
import TelegramIcon from '../../../public/images/social/telegram-color.svg';
import DiscordIcon from '../../../public/images/social/discord-color.svg';
import TwitterIcon from '../../../public/images/social/twitter-color.svg';

//Styles
import styles from './Contact.module.scss';
const Contact = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				id='contact'
				className={styles['contact-wrapper']}
				width='100%'
				sx={{
					px: { xs: 2, md: 8 },
					py: { xs: 4, md: 8 },
					borderTop: '1px solid rgba(0,0,0,0.1)',
				}}
			>
				<Container maxWidth='sm'>
					{/* Contact Leading Header */}
					<Box
						textAlign='center'
						className={styles['contact-header']}
						pb={{ xs: 4, md: 8 }}
						mb={{ xs: 5, md: 0 }}
					>
						<Typography
							variant='h2'
							component='h2'
							fontSize={{ xs: 30, md: 48 }}
							lineHeight={{ xs: 1.375, md: 1.5 }}
							color='#010007'
							fontWeight='300'
						>
							Core Ecosystem
						</Typography>
						<Box pt={5}>
							<Typography
								variant='h4'
								component='h3'
								color='#010007'
								fontWeight='600'
								fontSize={{ xs: 24, md: 30 }}
							>
								We would love to hear from you!
							</Typography>
							<Typography
								variant='p'
								component='p'
								fontSize={{ xs: 16 }}
								mt={1}
								mb={3}
								lineHeight={1.5}
							>
								Have any question? Would you like to share some
								feedback? Shoot us an email and we'll get back
								to you shortly. In the meantime, be sure to join
								our community on Telegram and Discord!
							</Typography>
						</Box>
						<Grid
							item
							className={styles['about-item']}
							pt={0}
							mt={0}
							columns={12}
							display='flex'
							justifyContent='center'
							flexDirection='row'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['email-icon']}
							>
								<Image
									src={EmailIcon}
									width='36'
									height='25'
									alt='Email Apecron'
								/>
							</Grid>
							<Grid item xs={8}>
								<Link
									href='mailto:info@apecron.com'
									underline='none'
									fontSize={{ xs: 18 }}
									fontWeight='600'
									color='#010007'
								>
									info@apecron.com
								</Link>
							</Grid>
						</Grid>
					</Box>
					<Box
						borderTop='1px solid rgba(0,0,0,.1)'
						pt={4}
						textAlign='center'
					>
						<Typography
							variant='h4'
							component='h3'
							color='#010007'
							fontWeight='600'
							fontSize={{ xs: 20, md: 24 }}
						>
							Join our online communities!
						</Typography>
					</Box>
					<Grid
						container
						columns={12}
						pt={3}
						direction={{ xs: 'column', sm: 'row' }}
					>
						<Link
							className={styles['social-item']}
							href='https://telegram.me/apecron'
							underline='none'
							fontSize={{ xs: 18 }}
							fontWeight='600'
							color='#010007'
							target='_blank'
							pt={0}
							mt={0}
							sx={{
								width: { xs: '100%', sm: '33.333337%' },
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'row',
								justifyContent: {
									xs: 'flex-start',
									sm: 'center',
								},
								borderBottom: {
									xs: '1px solid rgba(0,0,0,.1)',
									sm: 'none',
								},
								paddingBottom: {
									xs: '5px',
									md: '0',
								},
								marginBottom: {
									xs: '5px',
									md: '0',
								},
							}}
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['social-icon']}
								component='span'
							>
								<Image
									src={TelegramIcon}
									width='32'
									height='32'
									alt='Join Apecron on Telegram'
								/>
							</Grid>
							<Grid item xs={8} component='span'>
								Telegram
							</Grid>
						</Link>
						<Link
							className={styles['social-item']}
							href='https://discord.gg/TBHgPj7PHS'
							underline='none'
							fontSize={{ xs: 18 }}
							fontWeight='600'
							color='#010007'
							target='_blank'
							pt={0}
							mt={0}
							sx={{
								width: { xs: '100%', sm: '33.333337%' },
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'row',
								justifyContent: {
									xs: 'flex-start',
									sm: 'center',
								},
								borderBottom: {
									xs: '1px solid rgba(0,0,0,.1)',
									sm: 'none',
								},
								paddingBottom: {
									xs: '5px',
									md: '0',
								},
								marginBottom: {
									xs: '5px',
									md: '0',
								},
							}}
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['social-icon']}
								component='span'
							>
								<Image
									src={DiscordIcon}
									width='32'
									height='32'
									alt='Join Apecron on Discord'
								/>
							</Grid>
							<Grid item xs={8} component='span'>
								Discord
							</Grid>
						</Link>
						<Link
							className={styles['social-item']}
							href='https://twitter.com/apecronofficial'
							underline='none'
							fontSize={{ xs: 18 }}
							fontWeight='600'
							color='#010007'
							target='_blank'
							pt={0}
							mt={0}
							sx={{
								width: { xs: '100%', sm: '33.333337%' },
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'row',
								justifyContent: {
									xs: 'flex-start',
									sm: 'center',
								},
							}}
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['social-icon']}
								component='span'
							>
								<Image
									src={TwitterIcon}
									width='32'
									height='32'
									alt='Join Apecron on Twitter'
								/>
							</Grid>
							<Grid item xs={8} component='span'>
								Twitter
							</Grid>
						</Link>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Contact;
