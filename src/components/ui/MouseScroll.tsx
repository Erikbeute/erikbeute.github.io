import './mouseScroll.css';
import React from 'react';

export const MouseScroll: React.FC = () => {
	return (
		<div className="mouse-wrap" aria-hidden="false">
			<div className="mouse" aria-hidden="true"></div>
			<p className="mouse-text">Scroll</p>
		</div>
	);
}
