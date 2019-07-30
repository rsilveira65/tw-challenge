class NonUniqueHostelStrategy {
    process(ridgeWoodhotel, bridgeWoodhotel, lakeWoodhotel) {
        const hotelRatesArray = [ridgeWoodhotel.calculeteRate(), bridgeWoodhotel.calculeteRate(), lakeWoodhotel.calculeteRate()];

        let nonUniqueRate = hotelRatesArray.filter((a) => hotelRatesArray.indexOf(a) !== hotelRatesArray.lastIndexOf(a));

        if (nonUniqueRate.length == 0) return false;

        let maximunStar = { hotel: "Default", stars: 0 }

        switch (nonUniqueRate[0]) {
            case ridgeWoodhotel.calculeteRate(): {
                if (ridgeWoodhotel.getStars() > maximunStar.stars) {
                    maximunStar = { hotel: "Ridgewood", stars: ridgeWoodhotel.getStars() }
                }
            }

            case bridgeWoodhotel.calculeteRate(): {
                if (bridgeWoodhotel.getStars() > maximunStar.stars) {
                    maximunStar = { hotel: "Bridgewood", stars: bridgeWoodhotel.getStars() }
                }
            }

            case lakeWoodhotel.calculeteRate(): {
                if (lakeWoodhotel.getStars() > maximunStar.stars) {
                    maximunStar = { hotel: "Lakewood", stars: lakeWoodhotel.getStars() }
                }
            }
        }

        return maximunStar.hotel;
    }
}

module.exports = NonUniqueHostelStrategy;