import React from 'react';
import Globe from 'react-globe.gl';

const { useEffect, useRef } = React;

const InteractiveGlobe = () => {
	const globeEl = useRef();

    useEffect(() => {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.1;
    }, []);

	return (
		<Globe 
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0, 0, 0, 0)"
            width="1250"
        />
	);
}

export default InteractiveGlobe;