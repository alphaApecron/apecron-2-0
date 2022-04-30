import { createTheme } from '@mui/material/styles';
const ApecronThemeDefault = createTheme({
	palette: {},
	typography: {
		h1: {
			fontWeight: 700,
		},
		h2: {
			fontWeight: 700,
			fontSize: '3rem',
			'@media (min-width:600px)': {
				fontSize: '3.5rem',
			},
			'@media (min-width:900px)': {
				fontSize: '4rem',
			},
		},
		h3: {
			fontWeight: 700,
		},
		h4: {
			fontWeight: 700,
		},
		p: {
			fontSize: '1rem',
			fontWeight: 400,
			lineHeight: '1.4',
			color: '#909090',
			'@media (min-width:600px)': {
				fontSize: '1.125rem',
			},
			'@media (min-width:821px)': {
				fontSize: '1.25rem',
			},
		},
	},
});

export default ApecronThemeDefault;
