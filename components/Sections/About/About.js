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

//Styles
import styles from './About.module.scss';
const About = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				className={styles['lead-wrapper']}
				width='100%'
				sx={{
					p: 8,
					flexGrow: 1,
				}}
			>
				<Container maxWidth='lg'>
					<Grid
						className={styles.About}
						container
						spacing={4}
						columns={12}
						direction='row'
						justifyContent='center'
						alignItems='flex-start'
					>
						<Grid
							item
							className={styles['leads-item']}
							xs={6}
							spacing={2}
							display='flex'
							flexDirection='row'
						>
							<Grid item>
								<Image
									src={PortfolioImage}
									width='688'
									height='400'
									alt='Apecron is a portfolio tracking and trading management platform'
								/>
							</Grid>
						</Grid>
						<Grid
							item
							className={styles['leads-item']}
							xs={6}
							spacing={2}
							display='flex'
							flexDirection='row'
						>
							<Grid item>
								<Typography variant='h4' component='h3' mb={2}>
									About Apecron
								</Typography>
								<Typography variant='p' component='p' fontSize={18} lineHeight={1.5} mb={3}>
									Apecron is a revolutionary world-class DeFi ecosystem designed to bring the best trading and portfolio tracking platform, safe and secure launchpad, liquidity locker, yield farming / staking, and much more.
								</Typography>
								<Typography 
									variant='h5' 
									component='h4' 
									fontSize={22}
									lineHeight={1.5}
									sx={{
										fontWeight: '100',
									}}
								>
									Low tax to give you more for your money!
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default About;
