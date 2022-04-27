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
import SecurityImage from '../../../public/images/graphics/platform-security.svg';

//Styles
import styles from './Security.module.scss';
const Platform = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				className={styles['security-wrapper']}
				width='100%'
				sx={{
					px: { xs: 2, md: 8 },
					py: { xs: 4, md: 8 },
				}}
			>
				<Container maxWidth='lg'>
					<Grid
						className={styles.security}
						container
						spacing={{ xs: 2, md: 8 }}
						columns={12}
						direction={{ xs: 'column', md: 'row' }}
						justifyContent='space-between'
						alignItems='flex-start'
					>
						{/* Security Image*/}
						<Grid
							item
							className={styles['platform-image']}
							direction='column'
							justifyContent='flex-end'
							alignItems='flex-end'
							xs={12}
							md={6}
						>
							<Image
								src={SecurityImage}
								alt='Built-in Enterprise Security and Fast Performance'
							/>
						</Grid>
						{/* End: Security Image*/}

						{/* Security Highlights */}
						<Grid
							item
							className={styles['security-highlights']}
							direction='column'
							justifyContent='center'
							alignItems='center'
							xs={12}
							md={6}
						>
							<Typography
								variant='h4'
								component='h3'
								fontSize={30}
								mt={2}
								mb={3}
							>
								Built-in Enterprise Security and Fast
								Performance
							</Typography>
							<Typography
								variant='p'
								component='p'
								fontSize={18}
								mb={3}
								lineHeight={1.5}
							>
								We provide enterprise level security to ensure
								your interaction with our apps are safe. In
								addition, we are delivering robust applications
								that are built for speed utilizing the latest
								tech and industry standards.
							</Typography>
							<Typography
								variant='p'
								component='p'
								fontSize={18}
								lineHeight={1.5}
							>
								You know you will get the best experience when
								you are using Apecron and our ecosystem. Best
								part is, our ecosystem all works seamlessly
								together and creates uniformity in our design,
								cross-platform, and core functionality. From a
								fast website to advanced security measures,
								Apecron strives to deliver the best user
								experience mixed with enterprise level security
								and performance!
							</Typography>
							<Box mt={4} onClick={preventDefault}>
								<Tooltip title='Launching Soon' placement='top'>
									<Button
										className='btn-primary'
										variant='outlined'
										href='#'
									>
										Launch App
									</Button>
								</Tooltip>
							</Box>
						</Grid>
						{/* End: Security Highlights */}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Platform;
