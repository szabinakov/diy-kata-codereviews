const joinNames = (namesObj) => {
const arrayOfNames = namesObj.map(person => person.name);
if (arrayOfNames.length > 1) {
const finalName = arrayOfNames[arrayOfNames.length-1];
const removeFinalName = arrayOfNames.splice(arrayOfNames.length-1);
const stringOfNames = arrayOfNames.join(', ');
return `${stringOfNames} & ${finalName}`
} else {return arrayOfNames.toString()
};
};

module.exports = joinNames;

