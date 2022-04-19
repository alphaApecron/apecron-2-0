import Main from '../components/Layout/Main';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<Main>
			<Component {...pageProps} />
		</Main>
	);
}

export default MyApp;
