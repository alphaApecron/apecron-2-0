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
import CronosIcon from '../../../public/images/icons/lead-icon-cronos.svg';
import SecurityIcon from '../../../public/images/icons/lead-icon-security.svg';
import TokenomicsIcon from '../../../public/images/icons/lead-icon-tokenomics.svg';

//Styles
import styles from './Lead.module.scss';

const Lead = () => {
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
						className={styles.lead}
						container
						spacing={4}
						columns={12}
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<Grid
							item
							className={styles['leads-item']}
							xs={4}
							spacing={2}
							display='flex'
							flexDirection='row'
						>
							<Grid item xs='auto' mr={2}>
								<Image
									src={CronosIcon}
									width='60'
									height='60'
									alt='Apecron is a revolutionary ecosystem of DeFi products built for Cronos'
								/>
							</Grid>
							<Grid item xs>
								<Typography variant='h4' component='h3'>
									Built for Cronos
								</Typography>
								<Typography variant='p' component='p'>
									A revolutionary ecosystem of DeFi products
									for CRO
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							className={styles['leads-item']}
							xs={4}
							spacing={2}
							display='flex'
							flexDirection='row'
						>
							<Grid item xs='auto' mr={2}>
								<Image
									src={SecurityIcon}
									width='60'
									height='60'
									alt='We are focused on delivering secure and fast applications for DeFi'
								/>
							</Grid>
							<Grid item xs>
								<Typography variant='h4' component='h3'>
									Security Focused
								</Typography>
								<Typography variant='p' component='p'>
									We aim to deliver secure and fast
									applications for DeFi
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							className={styles['leads-item']}
							xs={4}
							spacing={2}
							display='flex'
							flexDirection='row'
						>
							<Grid item xs='auto' mr={2}>
								<Image
									src={TokenomicsIcon}
									width='60'
									height='60'
									alt='1 billion tokens in circulation with 10 million capped per wallet'
								/>
							</Grid>
							<Grid item xs>
								<Typography variant='h4' component='h3'>
									Tokenomics
								</Typography>
								<Typography variant='p' component='p'>
									1 billion tokens in supply with 10 million
									capped per wallet
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Lead;
