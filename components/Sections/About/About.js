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

//Styles
import styles from './About.module.scss';
const About = () => {
	const preventDefault = (event) => event.preventDefault();

	return (
		<>
			<Box
				className={styles['about-wrapper']}
				width='100%'
				sx={{
					p: 8,
					flexGrow: 1,
				}}
			></Box>
		</>
	);
};

export default About;
