import React from 'react';

const Card = ({name, email, id}) => {
	// const { name, email, id } = props;
	return (
		<div className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;