// import Link from 'next/link';
import { Container, Typography, Box, Grid, Link } from '@mui/material';
import React from 'react';
import styles from './Masthead.module.scss';
const Masthead = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Container maxWidth='xl'>
				<Grid
					className={styles.masthead}
					container
					spacing={2}
					columns={16}
					maxWidth='xl'
					direction='column'
					justifyContent='center'
					alignItems='center'
					sx={{
						padding: `150px 20px 40px`,
					}}
				>
					<Grid item xs={9} md={9} textAlign='center'>
						<Typography variant='h2' component='h2'>
							Fastest & secure trading platform for Cronos
						</Typography>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Minus animi impedit suscipit architecto, odio
							inventore nostrum.
						</p>
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
							<Link href='#' underline='none'>
								Launch App
							</Link>
							<Link href='#' underline='none'>
								Download Whitepaper
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Masthead;
