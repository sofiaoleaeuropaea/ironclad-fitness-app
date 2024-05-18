import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const DirectionsMap = () => {
	useEffect(() => {
		mapboxgl.accessToken = 'pk.eyJ1Ijoic29maWFvbGl2ZWlyYTU3IiwiYSI6ImNsdmlmcHA4YzFicmcya252b2kxbGxtb3cifQ.SClG-XkJ5FHKl3vU7RyaEQ';
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/sofiaoliveira57/clvwlfrh1028301qp0z926psj',
			center: [-9.14841, 38.74316],
			zoom: 13,
		});

		const directions = new MapboxDirections({
			accessToken: mapboxgl.accessToken,
			unit: 'metric',
		});

		map.addControl(directions, 'top-left');

		return () => map.remove();
	}, []);
	return <div id="map" style={{ width: '600px', height: '400px', borderRadius: '5px' }}></div>;
};

export default DirectionsMap;
