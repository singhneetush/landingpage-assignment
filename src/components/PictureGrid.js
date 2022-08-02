import React from 'react';
import CustomerSupportIcon from './assets/CustomerSupportIcon.svg';
import PriceOffersIcon from './assets/PriceOffersIcon.svg';
import PremiumQualityIcon from './assets/PremiumQualityIcon.svg';

const PictureGrid = () => {
	return (
		<div className='picture'>
			<div>
				<img src={CustomerSupportIcon} alt='' />
				<p>
					<span>XYZ</span>
				</p>
			</div>
			<div>
				<img src={CustomerSupportIcon} alt='' />
				<p>
					<span>XYZ</span>
				</p>
			</div>
			<div>
				<img src={PriceOffersIcon} alt='' />
				<p>
					<span>XYZ</span>
				</p>
			</div>
			<div>
				<img src={PremiumQualityIcon} alt='' />
				<p>
					<span>XYZ</span>
				</p>
			</div>
		</div>
	);
};

export default PictureGrid;
