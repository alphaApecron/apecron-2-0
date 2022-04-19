import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import styles from './Main.module.scss';

// Sets dark mode
const isDarkMode = true;

// Main app
const Main = ({ children }) => {
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
