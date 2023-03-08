const humanCatDogYears = (years) => {
    let catYears = 0;
    let dogYears = 0;
    if (years == 1) {
        catYears = 15;
        dogYears = 15;
    } else if (years == 2) {
        catYears = 24;
        dogYears = 24;
    } else {
        catYears = 24 + 4 * (years -2);
        dogYears = 24 + 5 * (years -2); 
    };
    return [years, catYears, dogYears];
};

module.exports = humanCatDogYears;
