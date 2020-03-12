import React from 'react';
import './InteractionPanel.css';

const InteractionPanel = () => {
	return (
		<div className="center">
			<p className="center">Select your filter | </p> 
			<input type="radio" id="forestfires" name="catastrophy" value="forestfires"></input>
			<label for="forestfires"> </label>
		</div>
	);
}

export default InteractionPanel;