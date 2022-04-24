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
import PlatformImage from '../../../public/images/graphics/platform-wireframe.svg';
import PlatformResponsive from '../../../public/images/icons/platform-responsive.svg';
import PlatformHot from '../../../public/images/icons/platform-hot.svg';
import PlatformExplorer from '../../../public/images/icons/platform-explorer.svg';
import PlatformSwap from '../../../public/images/icons/platform-swap.svg';
import PlatformTracking from '../../../public/images/icons/platform-tracking.svg';

//Styles
import styles from './Platform.module.scss';
const Platform = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				className={styles['platform-wrapper']}
				width='100%'
				sx={{
					p: 8,
					borderTop: '1px solid rgba(255,255,255,0.1)',
				}}
			>
				<Container maxWidth='lg'>
					<Box
						className={styles['platform-heading']}
						container
						spacing={4}
						columns={12}
						direction='row'
						justifyContent='start'
						alignItems='start'
						width="70%"
						mb={7}
					>
						<Typography variant='h2' component='h3' mb={1.5}>
							The Platform
						</Typography>
						<Typography variant='p' component='p' fontSize={16} lineHeight={1.2} mb={3}>
							At the heart of the ecosystem is our DeFi portfolio tracking and trading platform. Build with secuity and performance in mind, we are delivering the best trading experience!
						</Typography>
					</Box>
					<Grid
						className={styles.platform}
						container
						spacing={4}
						columns={12}
						direction='row'
						justifyContent='space-between'
						alignItems='flex-start'
					>
						{/* Platform Feature Highlights */}
						<Grid
							item
							className={styles['platform-highlights']}
							spacing={10}
							direction='column'
							justifyContent='center'
							alignItems='center'
							xs={5}
						>
							{/* Platform Feature Item*/}
							<Grid
								item
								className={styles['platform-item']}
								pt={0}
								mt={4}
								mb={4}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid item xs='auto' mr={2.5} className={styles['about-icon']}>
									<Image
										src={PlatformResponsive}
										width='60'
										alt='Apecron works on any device: desktop, tablet or mobile.'
									/>
								</Grid>
								<Grid item width="100%">
									<Typography variant='h4' component='h3' fontSize={18} mb={1}>
										Designed for responsive
									</Typography>
									<Typography variant='p' component='p' fontSize={16}>
										Apecron works on any device: desktop, tablet or mobile.
									</Typography>
								</Grid>
							</Grid>
							{/* End: Platform Feature Item*/}

							{/* Platform Feature Item*/}
							<Grid
								item
								className={styles['platform-item']}
								pt={0}
								mt={0}
								mb={4}
								spacing={2}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid item xs='auto' mr={2.5} className={styles['about-icon']}>
									<Image
										src={PlatformHot}
										width='60'
										alt='With Apecron, save and store your favorite projects and tokens to your watch list and find newly released and promoted projects!'
									/>
								</Grid>
								<Grid item width="100%">
									<Typography variant='h4' component='h3' fontSize={18} mb={1}>
										Watchlists, Favorites, Trending, and more
									</Typography>
									<Typography variant='p' component='p' fontSize={16}>
										Don't lose track of your favorite projects and tokens. Easily save them to your favorites and watch list, find newly promoted tokens, and see what's hot!
									</Typography>
								</Grid>
							</Grid>
							{/* End: Platform Feature Item*/}

							{/* Platform Feature Item*/}
							<Grid
								item
								className={styles['platform-item']}
								pt={0}
								mt={0}
								mb={4}
								spacing={2}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid item xs='auto' mr={2.5} className={styles['about-icon']}>
									<Image
										src={PlatformExplorer}
										width='60'
										alt='New pair explorer and contract scanner built in to help secure and safeguard your investing.'
									/>
								</Grid>
								<Grid item width="100%">
									<Typography variant='h4' component='h3' fontSize={18} mb={1}>
										New Pair Explorer with contract scanner
									</Typography>
									<Typography variant='p' component='p' fontSize={16}>
										Don't be fooled by rugs and scams, utilize our platform to find new projects to invest in while staying secure with our integrated safety measures.
									</Typography>
								</Grid>
							</Grid>
							{/* End: Platform Feature Item*/}

							{/* Platform Feature Item*/}
							<Grid
								item
								className={styles['platform-item']}
								pt={0}
								mt={0}
								mb={4}
								spacing={2}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid item xs='auto' mr={2.5} className={styles['about-icon']}>
									<Image
										src={PlatformSwap}
										width='60'
										alt='You can easily buy and sell tokens through our easy to use and fully integrated swap.'
									/>
								</Grid>
								<Grid item width="100%">
									<Typography variant='h4' component='h3' fontSize={18} mb={1}>
										Integrated Swap
									</Typography>
									<Typography variant='p' component='p' fontSize={16}>
										You can easily buy and sell tokens through our easy to use and fully integrated swap.
									</Typography>
								</Grid>
							</Grid>
							{/* End: Platform Feature Item*/}
							{/* Platform Feature Item*/}
							<Grid
								item
								className={styles['platform-item']}
								pt={0}
								mt={0}
								mb={4}
								spacing={2}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid item xs='auto' mr={2.5} className={styles['about-icon']}>
									<Image
										src={PlatformTracking}
										width='60'
										alt='See all your trading history and data right from our application! Track your transactions on each token as well as finding detailed data under your asset management.'
									/>
								</Grid>
								<Grid item width="100%">
									<Typography variant='h4' component='h3' fontSize={18} mb={1}>
									Portfolio tracking
									</Typography>
									<Typography variant='p' component='p' fontSize={16}>
										See all your trading history and data right from our application! Track your transactions on each token as well as finding detailed data under your asset management.
									</Typography>
								</Grid>
							</Grid>
							{/* End: Platform Feature Item*/}
						</Grid>
						{/* End: Platform Feature Highlights */}

						{/* Platform Feature Image*/}
						<Grid
							item
							className={styles['platform-image']}
							spacing={2}
							direction='column'
							justifyContent='flex-end'
							alignItems='flex-end'
							xs={7}
						>
							<Image
								src={PlatformImage}
								alt='Apecron is a portfolio tracking and trading management platform'
							/>
						</Grid>
						{/* Platform Feature Image*/}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Platform;
