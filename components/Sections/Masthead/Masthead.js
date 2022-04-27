// import Link from 'next/link';
import {
	Container,
	Typography,
	Box,
	Grid,
	Link,
	Button,
	Tooltip,
} from '@mui/material';
import React from 'react';
import styles from './Masthead.module.scss';
const Masthead = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box className={styles['masthead-wrapper']} width='100%'>
				<Container
					maxWidth='md'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						height: '100%',
					}}
				>
					<Grid
						className={styles.masthead}
						container
						spacing={{ xs: 1 }}
						p={3}
						columns={16}
					>
						<Box xs={16} md={16} textAlign='center'>
							<Typography variant='h2' component='h2'>
								The Future Of DEX on Cronos
							</Typography>
							<Box sx={{ padding: { xs: 0, md: '0 100px' } }}>
								<Typography variant='p' component='p'>
									World-Class DeFi Portfolio Management
									Simplified. <br />
									Chart Tracking/Trading - Launchpad - Yield
									Farm/Staking - Token Locker - Social Media
									Platform
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
									typography: 'body1',
									'& > :not(style) + :not(style)': {
										ml: 2,
									},
								}}
								onClick={preventDefault}
							>
								<Tooltip title='Launching Soon' placement='top'>
									<Button
										className='btn-primary'
										variant='outlined'
										href='#'
									>
										Launch App
									</Button>
								</Tooltip>

								<Button
									variant='outlined'
									href='#'
									sx={{
										color: '#fff',
										borderColor: '#fff',
										transition: 'all 0.3s ease',
										':hover': {
											color: 'rgba(255,255,255,0.7)',
											borderColor:
												'rgba(255,255,255,0.7)',
										},
									}}
								>
									Download Whitepaper
								</Button>
							</Box>
						</Box>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Masthead;
