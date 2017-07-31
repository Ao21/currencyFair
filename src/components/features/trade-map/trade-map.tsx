import * as React from 'react';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { Trade } from '../../../stores/trades/trade.model';
import {
	geoMercator,
	GeoProjection,
	geoPath,
	GeoPath,
	geoOrthographic,
	geoCentroid,
	geoInterpolate
} from 'd3-geo';
import { transition } from 'd3-transition';
import { timer } from 'd3-timer';
import { feature, mesh } from 'topojson';

import { WORLD_DATA } from '../../../core/contants/world-data';
import { COUNTRY_NAME_LIST } from '../../../core/contants/country-list';

import { keyBy } from 'lodash';

import './trade-map.css';

interface Props {
	trades?: Trade[];
}

let time = Date.now();
let rotate = [-60, -30];
let velocity = [0.005, -0];
let timerInstance: any = null;

export class GeoMap extends React.Component<Props, any> {
	node: any;
	rotation = 0;
	path: any;
	countries: any;

	constructor(props: any) {
		super(props);
		this.countries = keyBy(COUNTRY_NAME_LIST, (e: any) => e.id);
		this.state = {
			worldData: [],
			rotation: [0, 0]
		};
	}
	projection(dt: any = 0): any {
		return geoOrthographic()
			.scale(200)
			.translate([800 / 2, 450 / 2])
			.rotate([
				rotate[0] + velocity[0] * this.rotation,
				rotate[1] + velocity[1] * this.rotation
			]);
	}

	getProjection = (d: any): any => {
		return geoPath().projection(this.projection())(d);
	}

	componentDidMount() {
		this.init();
	}

	componentDidUpdate() {
		if (this.props.trades && this.props.trades.length > 0) {
			const latestTrade: any = this.props.trades[
				this.props.trades.length - 1
			];
			this.createTradeMarker(latestTrade);
		}
	}

	createTradeMarker(trade: Trade) {
		const country = this.countries[trade.originatingCountry];

		transition('colour')
			.selectAll('path.countries')
			.filter((d: any) => {
				return d.id === country.idNumber;
			})
			.style('fill', 'orange')
			.transition()
			.delay(5000)
			.style('fill', '#fff');
	}

	init() {
		const n = select(this.node);
		this.path = geoPath().projection(this.projection());
		var g = n.append('g');

		g
			.append('path')
			.datum({ type: 'Sphere' })
			.attr('class', 'sphere')
			.attr('d', this.path)
			.attr('fill', '#0D0D0D');

		const worldData = feature(WORLD_DATA, WORLD_DATA.objects.countries)
			.features;

		const countries = feature(WORLD_DATA, WORLD_DATA.objects.countries)
			.features;

		const borders = mesh(WORLD_DATA, WORLD_DATA.objects.countries, function(
			a: any,
			b: any
		) {
			return a !== b;
		});

		g
			.selectAll('path.countries')
			.data(worldData)
			.enter()
			.append('path')
			.attr('class', 'countries')
			.attr('d', this.path)
			.attr('id', d => d.id)
			.attr('fill', '#fff')
			.attr('stroke', 'black')
			.attr('stroke-width', 0.1);

		this.rotationAnimation();
	}

	rotationAnimation() {
		timer(() => {
			var dt = Date.now() - time;
			this.rotation = dt;
			select(this.node)
				.selectAll('path.countries')
				.attr('d', (d: any) => {
					return this.getProjection(d);
				});
		});
	}
	render(dd: any = 0) {
		return (
			<div className="trade-map">
				<svg
					ref={node => (this.node = node)}
					width={1200}
					height={600}
					viewBox="0 0 800 450"
				/>
			</div>
		);
	}
}

export default GeoMap;
