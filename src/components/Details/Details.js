import React from 'react';
import '../Logo/Logo.css'

const Details = ({ box }) => {
	return (
		<div className='f4 pa3 white br2 shadow-2 w-30 center ma3 '>
			<div className='center'>{'Age: '} {box.clarifaiAge}</div>
			<div className='center'>{'Accuracy: '} {box.clarifaiAgeAccuracy} {'%'}</div>
		</div>
	);
}

export default Details;