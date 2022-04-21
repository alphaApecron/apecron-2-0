import { createTheme } from '@mui/material/styles';
const ApecronThemeDefault = createTheme({
	palette: {},
	typography: {
		h1: {
			fontWeight: 700,
		},
		h2: {
			fontWeight: 700,
			fontSize: '4rem',
		},
		p: {
			fontSize: '1.25rem',
			fontWeight: 400,
			color: '#909090',
		},
	},
});

export default ApecronThemeDefault;
