import React, { FC, RefAttributes } from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"remote-wc2-components": RefAttributes<{}>;
		}
	}
}

export const Page2: FC = () => {
	return (
		<div>
			<h3>Page 2</h3>
			<remote-wc2-components></remote-wc2-components>
		</div>
	);
}
