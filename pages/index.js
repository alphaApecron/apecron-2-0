import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@mui/material';
import Masthead from '../components/Sections/Masthead/Masthead';
import Lead from '../components/Sections/Lead/Lead';

export default function Home() {
	return (
		<>
			<Masthead />
			<Lead />
		</>
	);
}
