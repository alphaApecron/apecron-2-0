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
import Image from 'next/image';
import styles from './Masthead.module.scss';
import PlatformPreview from '../../../public/images/graphics/platform-image-preview.svg';
const Masthead = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				id='masthead'
				className={styles['masthead-wrapper']}
				width='100%'
				position='relative'
				overflow='hidden'
			>
				<Container
					maxWidth='md'
					className={styles['masthead-container']}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: 'calc(100% - 105px)',
						position: 'relative',
						top: '105px',
						justifyContent: { xs: 'center', md: 'space-between' },
					}}
				>
					<Grid
						className={styles.masthead}
						container
						spacing={{ xs: 1 }}
						pt={{ xs: 0, md: 15 }}
						pb={{ xs: 0, md: 10 }}
						px={{ xs: 2, md: 0 }}
						mt={{ xs: 0 }}
						columns={16}
						direction='column'
					>
						<Box xs={16} md={16} textAlign='center'>
							<Typography
								variant='h2'
								component='h2'
								fontSize={{ xs: 24, sm: 36, md: 60 }}
							>
								The Future of DeFi on Cronos
							</Typography>
							<Box sx={{ padding: { xs: 0, md: '0 100px' } }}>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 18 }}
								>
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
									justifyContent: 'center',
									typography: 'body1',
									flexDirection: { xs: 'column', md: 'row' },
								}}
							>
								<Tooltip title='Launching Soon' placement='top'>
									<Button
										className='btn-primary'
										variant='outlined'
										href='#'
										component='a'
										onClick={preventDefault}
										display='inline-block'
										sx={{
											mb: { xs: 2, md: 0 },
											mr: { xs: 0, md: 2 },
										}}
									>
										Launch App
									</Button>
								</Tooltip>

								<Button
									component='a'
									className='btn-secondary'
									href='/docs/apecron.pdf'
									target='_blank'
									variant='outlined'
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
					<Box
						id='preview-image'
						display={{ xs: 'none', md: 'block' }}
						mb='-15px'
					>
						<Image
							src={PlatformPreview}
							width='1175px'
							alt='Apecron is a portfolio tracking and trading management platform'
						/>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Masthead;
