const joinNames = (namesObj) => {
  const result = namesObj.map((a) => a.name);
  const lastArray = result.pop();
  const result1 = result.join(", ");

  const combine = result1 + " & " + lastArray;
  return combine.toString();
};

module.exports = joinNames;
