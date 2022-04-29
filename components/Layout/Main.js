import React, { useState, setState, useEffect } from 'react';

import Head from 'next/head';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import styles from './Main.module.scss';
import SlideMenuContainer from './SlideMenuContainer';

// Sets dark mode
const isDarkMode = true;

// Main app
const Main = ({ children }) => {
	const [isOpen, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!isOpen);
	};
	useEffect(() => {
		document.body.classList.toggle('slide-menu-open', isOpen);
	}, [isOpen]);

	return (
		<>
			<div className={isOpen ? 'content open' : 'content'}>
				<Head>
					<title>Apecron - The Future of DeFi on Cronos</title>
				</Head>
				<Header handleClick={handleClick} isOpen={isOpen} />
				<main className={styles.main}>{children}</main>
			</div>
			<SlideMenuContainer isOpen={isOpen} handleClick={handleClick} />
		</>
	);
};

export default Main;
