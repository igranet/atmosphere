import NavBar from '../components/NavBar';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useEffect, useRef, useState } from 'react';
import intelligaLogo from '../assets/intelliga.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Slider from 'react-slick';
import LogoCarousel from '../components/LogoScroll';

const HomePage = () => {
	const carouselRef = useRef(null);
	const [houseLogos, setHouseLogos] = useState([
		{ name: intelligaLogo },
		{
			name: 'https://storage.googleapis.com/atmos-cdn/8c1c98cb97d371c5f92a1280ca16d3b6a9e81754/dist/static/img/header_logo.svg',
		},
		{
			name: 'https://media.licdn.com/dms/image/C560BAQF0ywBi5wNFkw/company-logo_200_200/0/1673514179271?e=1684368000&v=beta&t=KNqROjWigSloIRKrE7cqGhCIqHtKxCS6WKWRLCV49fo',
		},
	]);
	const [offset, setOffset] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	};
	return (
		<div className="w-full h-screen bg-gray-50 flex flex-col relative px-12">
			<div className="flex flex-col w-4/5 mx-auto">
				<NavBar />
				<div className="flex">
					<div className="flex mt-24 flex-col w-3/5 break-words">
						<div class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-200 via-violet-600 to-red-500">
							Atmosphere
						</div>
						<div class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-red-300 via-violet-600 to-red-500">
							Bringing dreams to life. Founders heading to the
							atmosphere.
						</div>
					</div>
				</div>

				<div className="flex">
					<LogoCarousel logos={houseLogos} />
				</div>
			</div>
		</div>
	);
};
export default HomePage;
