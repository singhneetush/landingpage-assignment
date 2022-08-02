import React from 'react';
import DiscountCard from './DiscountCard';
import MidCard from './MidCard';
import PictureGrid from './PictureGrid';

const Card = () => {
	return (
		<div className='Card'>
			<div className='heading'>
				<div className='head'>
					<h2>LUSH GRASS</h2>
					<h5>
						<span>UNISEX</span>|<span>WIDE</span>
					</h5>
					<h7>
						<span>SIZE GUIDE</span>
					</h7>
				</div>
				<div className='price'>
					<div
						style={{
							backgroundColor: 'green',
							borderRadius: '50%',
							height: '20px',
							width: '20px',
						}}></div>
					<p style={{ textDecorationLine: 'line-through' }}>$2000</p>
					<p>$1500</p>
					<p>
						<span>*Offers Available</span>
					</p>
				</div>
			</div>
			<div className='mid'>
				<p>New Collection-Naughty Eyes</p>
			</div>
			<PictureGrid />
			<MidCard />
			<DiscountCard />
		</div>
	);
};

export default Card;
