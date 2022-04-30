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

//Icons
import PortfolioImage from '../../../public/images/graphics/portfolio-image-illustration.svg';
import DevIcon from '../../../public/images/icons/about-dev-up-arrow.svg';
import MarketingIcon from '../../../public/images/icons/about-wallet.svg';
import LPIcon from '../../../public/images/icons/about-filter.svg';

//Styles
import styles from './About.module.scss';
const About = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				id='about'
				className={styles['about-wrapper']}
				width='100%'
				sx={{
					px: { xs: 2, md: 8 },
					py: { xs: 4, md: 8 },
					flexGrow: 1,
				}}
			>
				<Container maxWidth='lg'>
					<Grid
						className={styles.about}
						container
						columnSpacing={4}
						columns={12}
						direction={{ xs: 'column', md: 'row' }}
						justifyContent='center'
						alignItems='flex-start'
					>
						<Grid
							item
							className={styles['leads-item']}
							xs={12}
							md={6}
							pb={{ xs: 3, md: 0 }}
							display='flex'
							flexDirection='row'
						>
							<Image
								src={PortfolioImage}
								width='688'
								height='400'
								alt='Apecron is a portfolio tracking and trading management platform'
							/>
						</Grid>

						{/* About Content */}
						<Grid
							item
							className={styles['about-overview']}
							xs={12}
							md={6}
							display='flex-wrap'
							flexDirection='row'
						>
							<Grid item>
								<Typography
									variant='h4'
									component='h2'
									mb={1.5}
									fontSize={{ xs: 30, md: 36 }}
								>
									About Apecron
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 16 }}
									lineHeight={1.4}
									mb={3}
								>
									Apecron is a revolutionary world-class DeFi
									ecosystem designed to bring the best trading
									and portfolio tracking platform, safe and
									secure launchpad, liquidity locker, yield
									farming / staking, and much more.
								</Typography>
								<Typography
									variant='h4'
									component='h3'
									fontSize={{ xs: 18, md: 22 }}
									lineHeight={1.5}
									sx={{
										fontWeight: '100',
										marginBottom: 2,
									}}
								>
									Low tax to give you more for your money!
								</Typography>
							</Grid>

							{/* Items List */}
							<Grid
								className={styles['about-items-list']}
								container
								rowSpacing={4}
								columns={12}
								direction='column'
								justifyContent='start'
								alignItems='start'
							>
								<Grid
									item
									className={styles['about-item']}
									pt={0}
									mt={0}
									xs={4}
									display='flex'
									flexDirection='row'
								>
									<Grid item xs='auto' mr={2.5}>
										<Image
											src={DevIcon}
											width='60'
											alt='2% of transaction fee goes to development'
										/>
									</Grid>
									<Grid item xs={8}>
										<Typography
											variant='h4'
											component='h4'
											fontSize={{ xs: 16, md: 18 }}
											mb={0.5}
										>
											2% for Development
										</Typography>
										<Typography
											variant='p'
											component='p'
											fontSize={{ xs: 14, md: 16 }}
										>
											This helps cover development, server
											costs, maintenance and more.
										</Typography>
									</Grid>
								</Grid>

								<Grid
									item
									className={styles['about-item']}
									pt={0}
									mt={0}
									xs={4}
									display='flex'
									flexDirection='row'
								>
									<Grid item xs='auto' mr={2.5}>
										<Image
											src={MarketingIcon}
											width='60'
											alt='2% of transaction fee goes to marketing'
										/>
									</Grid>
									<Grid item xs={8}>
										<Typography
											variant='h4'
											component='h4'
											fontSize={{ xs: 16, md: 18 }}
											mb={0.5}
										>
											2% for Marketing
										</Typography>
										<Typography
											variant='p'
											component='p'
											fontSize={{ xs: 14, md: 16 }}
										>
											To further expand and reach more
											users, 2% is set aside for marketing
											efforts.
										</Typography>
									</Grid>
								</Grid>

								<Grid
									item
									className={styles['about-item']}
									pt={0}
									mt={0}
									xs={4}
									display='flex'
									flexDirection='row'
								>
									<Grid item xs='auto' mr={2.5}>
										<Image
											src={LPIcon}
											width='60'
											alt='5% of transaction fee goes to liquidity'
										/>
									</Grid>
									<Grid item xs={8}>
										<Typography
											variant='h4'
											component='h4'
											fontSize={{ xs: 16, md: 18 }}
											mb={0.5}
										>
											5% for Liquidity
										</Typography>
										<Typography
											variant='p'
											component='p'
											fontSize={{ xs: 14, md: 16 }}
										>
											Each transaction adds 5% to our
											liquidity thus creating more
											stability and longevity for the
											project.
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default About;
