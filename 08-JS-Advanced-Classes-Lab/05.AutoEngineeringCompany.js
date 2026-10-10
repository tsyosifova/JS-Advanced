function autoEngCompany(arr) {
    let brands = new Map();

    for (let carInfo of arr) {
        const [carBrand, carModel, producedCars] = carInfo.split(' | ');
        const count = Number(producedCars);

        if (!brands.has(carBrand)) {
            brands.set(carBrand, new Map());
        }

        let models = brands.get(carBrand);

        if (!models.has(carModel)) {
            models.set(carModel, count);
        } else {
            models.set(carModel, models.get(carModel) + count);
        }
    }

    for (let [brand, models] of brands) {
        console.log(brand);

        for (let [model, count] of models) {
            console.log(`###${model} -> ${count}`);
        }
    }

}

autoEngCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
