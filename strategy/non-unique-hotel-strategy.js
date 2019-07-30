class NonUniqueHostelStrategy {
	process(ridgeWoodhotel, bridgeWoodhotel, lakeWoodhotel) {
		const hotelRatesArray = [
			ridgeWoodhotel.calculeteRate(),
			bridgeWoodhotel.calculeteRate(),
			lakeWoodhotel.calculeteRate()
		];

		//lastIndexOf - find the last ocurrence of the value in the array, if is different from the currently, there are duplicated items.
		const nonUniqueRate = hotelRatesArray.filter(
			(hotelRate) => hotelRatesArray.indexOf(hotelRate) !== hotelRatesArray.lastIndexOf(hotelRate)
		);

		if (nonUniqueRate.length == 0) return false;

		let maximunStar = { hotel: 'Default', stars: 0 };

		switch (nonUniqueRate[0]) {
			case ridgeWoodhotel.calculeteRate(): {
				if (ridgeWoodhotel.getStars() > maximunStar.stars) {
					maximunStar = { hotel: 'Ridgewood', stars: ridgeWoodhotel.getStars() };
				}
			}

			case bridgeWoodhotel.calculeteRate(): {
				if (bridgeWoodhotel.getStars() > maximunStar.stars) {
					maximunStar = { hotel: 'Bridgewood', stars: bridgeWoodhotel.getStars() };
				}
			}

			case lakeWoodhotel.calculeteRate(): {
				if (lakeWoodhotel.getStars() > maximunStar.stars) {
					maximunStar = { hotel: 'Lakewood', stars: lakeWoodhotel.getStars() };
				}
			}
		}

		return maximunStar.hotel;
	}
}

module.exports = NonUniqueHostelStrategy;
