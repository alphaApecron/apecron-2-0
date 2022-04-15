import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div className='content'>
			<Head>
				<title>Layouts Example</title>
			</Head>
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
