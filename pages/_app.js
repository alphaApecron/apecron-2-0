import Main from '../components/Layout/Main';
import '../styles/globals.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ApecronThemeDefault from '../themes/primary';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={ApecronThemeDefault}>
			<Main>
				<Component {...pageProps} />
			</Main>
		</ThemeProvider>
	);
}

export default MyApp;
