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
						pt={{ xs: 0, md: 12 }}
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
								The Future of DeFi on Cronos, ETH and beyond
							</Typography>
							<Box sx={{ padding: { xs: 0, md: '0 100px' } }}>
								<Typography
									variant='p'
									component='p'
									fontSize={{ xs: 14, md: 18 }}
								>
									World-Class Launchpad
									Simplified. <br />
									Chart Tracking/Trading - DeFi Portfolio Management - Yield
									Farm/Staking - Token Locker - Social Media
									Platform
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									typography: 'body1',
									flexDirection: {
										xs: 'column',
										md: 'column',
									},
								}}
							>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										typography: 'body1',
										flexDirection: {
											xs: 'column',
											md: 'row',
										},
										marginBottom: { xs: '10px' },
									}}
								>
									<Tooltip
										title='Now in Beta'
										placement='top'
									>
										<Button
											className='btn-primary'
											href='#'
											component='a'
											target='_blank'
											display='inline-block'
											sx={{
												width: {
													xs: '100%',
													md: 'fit-content',
												},
												marginRight: {
													xs: '0',
													md: '10px',
												},
												marginBottom: {
													xs: '5px',
													md: '0',
												},
											}}
										>
											Platform
										</Button>
									</Tooltip>

									<Button
										className='btn-secondary'
										variant='outlined'
										href='https://mm.finance/swap?inputCurrency=0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23&outputCurrency=0x09aae6c66bc670016801e34d19b1775b038b6c43'
										component='a'
										target='_blank'
										display='inline-block'
										sx={{
											width: {
												xs: '100%',
												md: 'fit-content',
											},
											color: '#fff',
											borderColor: '#fff',
											transition: 'all 0.3s ease',
											display: 'inline-block',
											':hover': {
												color: 'rgba(255,255,255,0.7)',
												borderColor:
													'rgba(255,255,255,0.7)',
											},
										}}
									>
										Buy $Apecron on CRO
									</Button>
<Button
										className='btn-secondary'
										variant='outlined'
										href='https://app.uniswap.org/#/swap?outputCurrency=0x0a11ee015aed07eb1f4b78f88c8d68056f404c37'
										component='a'
										target='_blank'
										display='inline-block'
										sx={{
											width: {
												xs: '100%',
												md: 'fit-content',
											},
											color: '#fff',
											borderColor: '#fff',
											transition: 'all 0.3s ease',
											display: 'inline-block',
											':hover': {
												color: 'rgba(255,255,255,0.7)',
												borderColor:
													'rgba(255,255,255,0.7)',
											},
										}}
									>
										Buy $Apecron on ETH
									</Button>
								</Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										typography: 'body1',
										flexDirection: {
											xs: 'column',
											md: 'row',
										},
									}}
								>
									<Button
										component='a'
										className='btn-secondary'
										href='/docs/apecron.pdf'
										target='_blank'
										variant='secondary'
										sx={{
											color: '#fff',
											borderColor: '#fff',
											transition: 'all 0.3s ease',
											borderBottom: {
												xs: 'none',
												md: '1px solid #fff',
											},
											padding: {
												xs: '0.75rem 1.875rem!important',
												md: '5px 15px 5px!important',
											},
											display: 'inline-block',
											marginRight: '10px',
											borderRadius: 0,
											width: {
												xs: '100%',
												md: 'fit-content',
											},
											':hover': {
												color: 'rgba(255,255,255,0.7)',
												borderColor:
													'rgba(255,255,255,0.7)',
											},
										}}
									>
										View Whitepaper
									</Button>
									<Button
										component='a'
										className='btn-secondary'
										href='/docs/apecron_audit.pdf'
										target='_blank'
										variant='secondary'
										sx={{
											color: '#fff',
											borderColor: '#fff',
											transition: 'all 0.3s ease',
											borderBottom: {
												xs: 'none',
												md: '1px solid #fff',
											},
											padding: ' 5px 15px 5px!important',
											borderRadius: 0,
											width: {
												xs: '100%',
												md: 'fit-content',
											},
											':hover': {
												color: 'rgba(255,255,255,0.7)',
												borderColor:
													'rgba(255,255,255,0.7)',
											},
										}}
									>
										View Audit
									</Button>
								</Box>
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
							priority={true}
							alt='Apecron is a trading management and portfolio tracking platform'
						/>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Masthead;
