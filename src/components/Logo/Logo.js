import React from 'react';
import Tilt from 'react-tilt';
import ffsnLogo from './ffsnLogo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className ='ma4 ma0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> 
					<img alt='logo' src={ffsnLogo}/> 
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;