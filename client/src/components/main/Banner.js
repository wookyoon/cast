import React from 'react';

const path = process.env.PUBLIC_URL;

function Banner() {
	return (
		<section id='banner'>
			<video src={`${path}/vid/banner1.mp4`} loop autoPlay muted></video>
		</section>
	);
}

export default Banner;
