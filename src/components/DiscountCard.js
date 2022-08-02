import React from 'react';
import Discount_green from './assets/Discount_green.svg';
const DiscountCard = () => {
	return (
		<div className='Mid-Card Discount-Card'>
			<div className='svg-icon1'>
				<img src={Discount_green} alt='' />
			</div>
			<div className='detail' style={{ color: 'green' }}>
				<div className='ojio'>Flat 45% off</div>
				<p className='lorem'>
					USE CODE <span>SALE45</span> |<span>VALID ON ALL PRODUCTS</span>{' '}
					<span>LIMITED TIME OFFER</span> |
				</p>
			</div>
		</div>
	);
};

export default DiscountCard;
