import React, { FC, createRef, useEffect, RefAttributes } from 'react';

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

	useEffect(() => {
		if (!!webComponents) {
			webComponents.current.props = {
				title: "Remote application",
				data: [5, 4, 3, 2, 1],
				callback: () => console.log('Callback from the main application')
			};
		}
	}, [webComponents]);

	return (
		<div>
			<h3>Page 1</h3>
			<main-web-components ref={webComponents}></main-web-components>
		</div>
	);
}
