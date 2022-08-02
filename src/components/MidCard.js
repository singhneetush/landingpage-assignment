import React from 'react';
import LK_Monogram from './assets/LK_Monogram.svg';

const MidCard = () => {
	return (
		<div className='Mid-Card'>
			<div className='svg-icon'>
				<img src={LK_Monogram} alt='' />
			</div>
			<div className='detail'>
				<div className='ojio'>OJIOS WEAR - A LENSKART ALLIANCE</div>
				<p className='lorem'>
					lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
					epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem epsumlorem
					epsum lorem epsumlorem epsumlorem epsumlorem epsum epsum
				</p>
			</div>
		</div>
	);
};

export default MidCard;
