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
import FeaturesChart from '../../../public/images/icons/features-chart.svg';
import FeaturesLaunchpad from '../../../public/images/icons/features-launchpad.svg';
import FeaturesFarming from '../../../public/images/icons/features-farming.svg';
import FeaturesNft from '../../../public/images/icons/features-nft.svg';
import FeaturesSocial from '../../../public/images/icons/features-social.svg';
import FeaturesLocker from '../../../public/images/icons/features-locker.svg';
import FeaturesExplorer from '../../../public/images/icons/features-explorer.svg';
import FeaturesFeatured from '../../../public/images/icons/features-featured.svg';
import FeaturesUx from '../../../public/images/icons/features-ux.svg';

//Styles
import styles from './Features.module.scss';
const Features = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				id='features'
				className={styles['features-wrapper']}
				width='100%'
				sx={{
					px: { xs: 2, md: 8 },
					py: { xs: 4, md: 8 },
				}}
			>
				<Container maxWidth='lg'>
					{/* Features Leading Header */}
					<Box
						textAlign='center'
						className={styles['features-header']}
						pb={{ xs: 4, md: 8 }}
						mb={{ xs: 2, md: 0 }}
					>
						<Typography
							variant='h2'
							component='h2'
							color='#010007'
							fontWeight='300'
							fontSize={{ xs: 30, md: 48 }}
							lineHeight={{ xs: 1.375, md: 1.5 }}
						>
							All Platform Features
						</Typography>
					</Box>
					{/* End: Features Leading Header */}

					<Grid
						className={styles.features}
						container
						spacing={{ xs: 2, md: 8 }}
						columns={12}
						direction={{ xs: 'column', md: 'row' }}
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesChart}
									width='60'
									height='60'
									alt='Live Charts / Trading'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									Live Charts / Trading
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									View charts in real-time and trade your
									tokens and coins directly from within the
									app.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesLaunchpad}
									width='60'
									height='60'
									alt='Launchpad'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									Launchpad
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									Explore new safe and vetted projects through
									our Launchpad. Claim project tokens through
									the dashboard.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesFarming}
									width='60'
									height='60'
									alt='Farming'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									Yield Farming/Staking
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									Maximize your investment with an easy to use
									yield farming and staking built into the
									platform.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesNft}
									width='60'
									height='60'
									alt='Farming'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									NFTs &amp; Marketplace
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									We love NFTs and we'll be bringing some
									awesome utilities and a marketplace
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesSocial}
									width='60'
									height='60'
									alt='Farming'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									Social Media Platform
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									We're building in social media as a core
									aspect to the platform to allow for
									connecting with others &amp; more.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesLocker}
									width='60'
									height='60'
									alt='Farming'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									Token Locker
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									We're helping projects succeed with the
									ability to lock their LP tokens and team
									tokens through our platform.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesExplorer}
									width='60'
									height='60'
									alt='Farming'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									Pair Explorer
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									See new trading pairs and find the latest
									trending tokens with our Pair Explorer.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesFeatured}
									width='60'
									height='60'
									alt='Farming'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									Featured Projects
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									View partnered and featured projects, save
									them to your favorites, and find the next
									moonshot.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}

						{/* Features Feature Item*/}
						<Grid
							item
							className={styles['features-item']}
							pt={0}
							xs={4}
							display='flex'
							flexDirection='row'
							justifyContent='flex-start'
							alignItems='flex-start'
						>
							<Grid
								item
								xs='auto'
								mr={2.5}
								className={styles['features-icon']}
							>
								<Image
									src={FeaturesUx}
									width='60'
									height='60'
									alt='Farming'
								/>
							</Grid>
							<Grid item width='100%'>
								<Typography
									variant='h4'
									component='h4'
									fontSize={{ xs: 14, md: 16 }}
									mb={1}
									color='#010007'
									textTransform='uppercase'
									fontWeight='900'
								>
									User Experience Focused
								</Typography>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 16 }}
								>
									With a deep focus on the user, we aim to
									deliver the best experience for all our
									products.
								</Typography>
							</Grid>
						</Grid>
						{/* End: Features Feature Item*/}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Features;
