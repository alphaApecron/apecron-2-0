import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import styles from './Main.module.scss';

// Sets dark mode
const isDarkMode = true;

// Main app
const Main = ({ children }) => {
	// Add class to the body
	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark-mode');
		}
		document.body.classList.add('body');
	});

	return (
		<div className='content'>
			<Head>
				<title>Layouts Example</title>
			</Head>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Main;
