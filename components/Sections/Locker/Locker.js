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
import LockerImage from '../../../public/images/graphics/locker-icon-image.svg';
import LockerLp from '../../../public/images/icons/locker-icon-lp-lock.svg';
import LockerTeam from '../../../public/images/icons/locker-icon-lp-team.svg';

//Styles
import styles from './Locker.module.scss';
const Locker = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				id='locker'
				className={styles['locker-wrapper']}
				width='100%'
				sx={{
					px: { xs: 2, md: 8 },
					py: { xs: 4, md: 8 },
					borderTop: '1px solid rgba(0,0,0,0.1)',
				}}
			>
				<Container maxWidth='lg'>
					<Grid
						className={styles.locker}
						container
						spacing={{ xs: 2, md: 8 }}
						columns={12}
						direction={{ xs: 'column-reverse', md: 'row' }}
						justifyContent='space-between'
						alignItems='flex-start'
					>
						{/* Locker Highlights */}
						<Grid
							item
							className={styles['locker-highlights']}
							spacing={10}
							direction='column'
							justifyContent='center'
							alignItems='center'
							xs={6}
						>
							<Typography
								variant='h4'
								component='h3'
								fontSize={{ xs: 30 }}
								mt={2}
								mb={3}
								color='#010007'
							>
								The Locker
							</Typography>
							<Typography
								variant='p'
								component='p'
								fontSize={{ xs: 16 }}
								mb={3}
								lineHeight={1.5}
							>
								We provide various options for securing your
								project! Our locker allows you to lock your
								liquidity tokens as well as providing the
								ability to lock your team tokens for a specified
								period of time.
							</Typography>

							{/* Locker Feature Item*/}
							<Grid
								item
								className={styles['locker-item']}
								pt={0}
								mt={4}
								mb={4}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid
									item
									xs='auto'
									mr={2.5}
									className={styles['locker-icon']}
								>
									<Image
										src={LockerLp}
										width='60'
										alt='Our locker platform will securely lock your LP tokens for any customized duration you choose.'
									/>
								</Grid>
								<Grid item width='100%'>
									<Typography
										variant='h4'
										component='h3'
										fontSize={{ xs: 18 }}
										mb={1}
										color='#010007'
									>
										Liquidity Pool (LP) Lock
									</Typography>
									<Typography
										variant='p'
										component='p'
										fontSize={{ xs: 16 }}
									>
										Our locker platform will securely lock
										your LP tokens for any customized
										duration you choose. Apecron never takes
										custody of your LP tokens, and does not
										have access to them. Instead they are
										stored only in the smart contract and
										are only accessible for withdraw by the
										same wallet that initially locked them
										after the locking period expires.
									</Typography>
								</Grid>
							</Grid>
							{/* End: Locker Feature Item*/}

							{/* Locker Feature Item*/}
							<Grid
								item
								className={styles['locker-item']}
								pt={0}
								mt={4}
								mb={4}
								xs={12}
								display='flex'
								flexDirection='row'
							>
								<Grid
									item
									xs='auto'
									mr={2.5}
									className={styles['locker-icon']}
								>
									<Image
										src={LockerTeam}
										width='60'
										alt='Our platform securely vests your teams tokens for any specified duration.'
									/>
								</Grid>
								<Grid item width='100%'>
									<Typography
										variant='h4'
										component='h3'
										fontSize={{ xs: 18 }}
										mb={1}
										color='#010007'
									>
										Team token vesting
									</Typography>
									<Typography
										variant='p'
										component='p'
										fontSize={{ xs: 16 }}
									>
										Our platform securely vests your teams
										tokens for any specified duration.
										Similar to our LP lock, the tokens are
										placed into a smart contract and can
										only be accessed to withdraw after the
										vesting period expires.
									</Typography>
								</Grid>
							</Grid>
							{/* End: Locker Feature Item*/}

							<Box mt={4} onClick={preventDefault}>
								<Tooltip title='Launching Soon' placement='top'>
									<Button
										className='btn-primary'
										variant='outlined'
										href='#'
									>
										Go to Locker
									</Button>
								</Tooltip>
							</Box>
						</Grid>
						{/* End: Locker Highlights */}

						{/* Locker Image*/}
						<Grid
							item
							className={styles['launchpad-image']}
							spacing={2}
							direction='column'
							justifyContent='flex-end'
							alignItems='flex-end'
							xs={6}
						>
							<Image
								src={LockerImage}
								alt='The Apecron locker will enable teams and projects to securely lock their LP and team tokens for a given duration.'
							/>
						</Grid>
						{/* End: Locker Image*/}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Locker;
