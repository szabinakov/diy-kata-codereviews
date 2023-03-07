const reachDestination = (distance, speed) => {
    const exactTime = distance / speed;
    const roundedUpTime = Math.ceil(exactTime/0.5) * 0.5;
    return `I should be there in ${roundedUpTime} hours.`
};

module.exports = reachDestination;
