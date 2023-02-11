import React, { useState, useEffect } from 'react';

const LogoCarousel = ({ logos }) => {
	const [scrollX, setScrollX] = useState(0);

	return (
		<div className="logo-carousel" style={{ overflow: 'hidden' }}>
			<div
				className="logo-container"
				style={{
					display: 'flex',
					flexWrap: 'nowrap',
					transform: `translateX(${scrollX}px)`,
					transition: 'transform ease-out 0.3s',
				}}>
				{logos.map((key, idx) => (
					<img key={idx} src={key?.name} alt="logo" />
				))}
				{logos.map((key, idx) => (
					<img key={idx} src={key?.name} alt="logo" />
				))}
			</div>
		</div>
	);
};

export default LogoCarousel;
