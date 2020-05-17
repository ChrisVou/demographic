import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt=' ' src={imageUrl} width='500px' height='auto' />
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
					<div className='concept'>
						<span className='conceptAge'>{box.clarifaiAge}</span>
						<span className='conceptAgeAccuracy'>{box.clarifaiAgeAccuracy}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;