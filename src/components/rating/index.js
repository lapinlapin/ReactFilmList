import React, { Component, PropTypes } from 'react';
import { generateId } from '../../utils';

class Rating extends Component {
    render() { 	
    	const { rate = 0, onSetRate } = this.props;
    	const uniqueIds = {};

    	for (let i = 1; i <= 5; i++) {
    		uniqueIds[i] = {
    			id: 'rating' + generateId()
    		};
    	}

    	uniqueIds.name = generateId();

        return (
			<div className="rating-wrapper">
				<input type="radio" className="rating-input" onClick={onSetRate(5)} checked={rate === 5} id={uniqueIds[5].id} name={uniqueIds.name}/>
				<label htmlFor={uniqueIds[5].id} className="rating-star"></label>
				<input type="radio" className="rating-input" onClick={onSetRate(4)} checked={rate === 4} id={uniqueIds[4].id} name={uniqueIds.name}/>
				<label htmlFor={uniqueIds[4].id} className="rating-star"></label>
				<input type="radio" className="rating-input" onClick={onSetRate(3)} checked={rate === 3} id={uniqueIds[3].id} name={uniqueIds.name}/>
				<label htmlFor={uniqueIds[3].id} className="rating-star"></label>
				<input type="radio" className="rating-input" onClick={onSetRate(2)} checked={rate === 2} id={uniqueIds[2].id} name={uniqueIds.name}/>
				<label htmlFor={uniqueIds[2].id} className="rating-star"></label>
				<input type="radio" className="rating-input" onClick={onSetRate(1)} checked={rate === 1} id={uniqueIds[1].id} name={uniqueIds.name}/>
				<label htmlFor={uniqueIds[1].id} className="rating-star"></label>
			</div>
        );
    }
}

Rating.propTypes = {
    rate: React.PropTypes.number.isRequired,
    onSetRate: React.PropTypes.func.isRequired
};

export default Rating;

