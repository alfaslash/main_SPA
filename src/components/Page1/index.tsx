import React, { FC, createRef, useEffect, RefAttributes, useState } from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"main-web-components": RefAttributes<{ props: AppProps; }>;
		}
	}
}

export interface AppProps {
	data: Array<number>;
	title: string;
	callback: () => void;
}

export const Page1: FC = () => {
	const webComponents = createRef<{ props: AppProps; }>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const scriptTag = document.createElement('script');
		scriptTag.src = '../../remote_WC_1/public/bundle.js';
		scriptTag.addEventListener('load', () => setLoaded(true))
		document.head.appendChild(scriptTag);

		return () => {
			document.head.removeChild(scriptTag);
		}
	}, []);

	useEffect(() => {
		if (!!webComponents && !!loaded) {
			webComponents.current.props = {
				title: "Remote application",
				data: [5, 4, 3, 2, 1],
				callback: () => console.log('Callback from the main application')
			};
		}
	}, [webComponents, loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<div>
			<h3>Page 1</h3>
			<main-web-components ref={webComponents}></main-web-components>
		</div>
	);
}
