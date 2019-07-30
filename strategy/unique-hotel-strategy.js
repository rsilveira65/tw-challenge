class UniqueHostelStrategy {
	process(ridgeWoodhotel, bridgeWoodhotel, lakeWoodhotel) {
		const min = Math.min(
			ridgeWoodhotel.calculeteRate(),
			bridgeWoodhotel.calculeteRate(),
			lakeWoodhotel.calculeteRate()
		);

		switch (min) {
			case ridgeWoodhotel.calculeteRate():
				return 'Ridgewood';
			case bridgeWoodhotel.calculeteRate():
				return 'Bridgewood';
			case lakeWoodhotel.calculeteRate():
				return 'Lakewood';
		}
	}
}

module.exports = UniqueHostelStrategy;
