const joinNames = (namesObj) => {
   let simpNames = []
   for (let i= 0; i < namesObj.length -1; i++) {
    simpNames.push(namesObj[i].name)

   };


    return simpNames.join(', ') + ' & ' + namesObj[namesObj.length-1].name;
};

module.exports = joinNames;
