import React from 'react';
import './App.css';
// eslint-disable-next-line
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';
import image7 from './assets/images/image7.jpg';
import PowersIcon from './assets/PowersIcon.svg';
const ImageGallery = () => {
	return (
		<div className='imgGallery'>
			<div className='gallery'>
				<img src={image1} alt='' />
				<img src={image2} alt='' />
				<img src={image3} alt='' />
				<img src={image4} alt='' />
				<img src={image5} alt='' />
				<img src={image6} alt='' />
				<img src={image7} alt='' />
			</div>
			<div className='imgCard'>
				<img src={image2} alt='' />
			</div>
			<div className='side'>
				<div>
					<img src={PowersIcon} alt='' />
				</div>
				<div className='icon'>
					<img src={PowersIcon} alt='' />
					<p>Check available powers</p>
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
