import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
				animi impedit suscipit architecto, odio inventore nostrum non
				neque dicta. Quam magni accusantium culpa distinctio tempore
				iure accusamus, dolorem nobis odit.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
				animi impedit suscipit architecto, odio inventore nostrum non
				neque dicta. Quam magni accusantium culpa distinctio tempore
				iure accusamus, dolorem nobis odit.
			</p>
			<Link href='/ninjas/'>
				<a>See Ninja Listing</a>
			</Link>
		</div>
	);
}
