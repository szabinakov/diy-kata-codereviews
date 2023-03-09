const reachDestination = (distance, speed) => {
    const time = Math.round(2 * distance / speed) / 2;
    if (time == 1) {
        return 'I will be there in 1 hour';
    } else {
        return 'I will be there in ' + time.toString() + ' hours';

    };
};



module.exports = reachDestination;
