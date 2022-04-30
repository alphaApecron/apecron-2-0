import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Header from '../UI/Header';
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
					<title>
						Apecron - The Future of Defi on Cro | Chart/Trade,
						Launchpad, Yield Farm
					</title>
					<meta
						name='title'
						content='Apecron - The Future of Defi on Cro | Chart/Trade, Launchpad, Yield Farm'
					/>
					<meta
						name='description'
						content='Apecron is providing portfolio management on Cronos for Crypto.org, with DEX, track/trade, launchpad, yield farm, LP locker, many holder benefits and more!'
					/>

					<meta property='og:type' content='website' />
					<meta
						property='og:url'
						content='https://www.apecron.com/'
					/>
					<meta
						property='og:title'
						content='Apecron - The Future of Defi on Cro | Chart/Trade, Launchpad, Yield Farm'
					/>
					<meta
						property='og:description'
						content='Apecron is providing portfolio management on Cronos for Crypto.org, with DEX, track/trade, launchpad, yield farm, LP locker, many holder benefits and more!'
					/>
					<meta
						property='og:image'
						content='/apecron-social-share-image.png'
					/>

					<meta
						property='twitter:card'
						content='summary_large_image'
					/>
					<meta
						property='twitter:url'
						content='https://www.apecron.com/'
					/>
					<meta
						property='twitter:title'
						content='Apecron - The Future of Defi on Cro | Chart/Trade, Launchpad, Yield Farm'
					/>
					<meta
						property='twitter:description'
						content='Apecron is providing portfolio management on Cronos for Crypto.org, with DEX, track/trade, launchpad, yield farm, LP locker, many holder benefits and more!'
					/>
					<meta
						property='twitter:image'
						content='/apecron-social-share-image.png'
					/>

					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link
						rel='mask-icon'
						href='/safari-pinned-tab.svg'
						color='#5bbad5'
					/>
					<meta name='msapplication-TileColor' content='#da532c' />
					<meta name='theme-color' content='#ffffff' />
				</Head>
				<Header handleClick={handleClick} isOpen={isOpen} />
				<main className={styles.main}>{children}</main>
			</div>
			<SlideMenuContainer isOpen={isOpen} handleClick={handleClick} />
		</>
	);
};

export default Main;
