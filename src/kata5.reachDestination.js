const reachDestination = (distance, speed) => {
  const time = distance / speed;
  const timeRounded = Math.round(time * 2) / 2;
  return `I should be there in ${timeRounded} hours.`
};

module.exports = reachDestination;
