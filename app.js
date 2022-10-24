const countries = require("./mocks/countries");
("use strict");

const args = process.argv;

// Returns elements of an array that are not empty
function isEmpty(arr) {
  return Array.isArray(arr) && arr.length
}

// This function filters out every animal that does not match the string pattern
const removeNonMatching = (searchedAnimal, person) => {
  return person.animals
    .map((animal) => {
      if (animal.name.includes(searchedAnimal)) {
        return animal
      }
    })
    .filter((e) => e);
};

/**
 * @param {string} searchedAnimal
 */

const filter = (searchedAnimal) => {
  const newList = countries.filter((c) => {
    let newCountry = c;
    newCountry.peoples = c.peoples.filter((p) => {
      let newPerson = p;
      newPerson.animals = removeNonMatching(searchedAnimal, p);
      // The 'animals' entry will be removed if there is nothing left inside
      return isEmpty(newPerson.animals)
    });
    // The 'peoples' entry will be removed if there is nothing left inside
    return isEmpty(newCountry.peoples)
  });

  // prints out the filtered list if there is any match
  console.log(!isEmpty(newList) ? "Nothing found" : JSON.stringify(newList));
  return !isEmpty(newList) ? "Nothing found" : JSON.stringify(newList);
};

const count = () => {
  const newList = countries.map((country) => {
    country.peoples.map((person) => {
      person.name = `${person.name} [${person.animals.length}]`
      return person
    })
    country.name = `${country.name} [${country.peoples.length}]`
    return country
  })
  console.log(JSON.stringify(newList))
  return JSON.stringify(newList)
}

// USAGE node app.js --count --filter=ry
// USAGE node app.js --filter=ry --count

try {
  let cmd;
  cmd = args[2].split("=");
  cmd2 = args.length > 3 ? args[3].split("=") : [];


  const a = filter(cmd2[1])
  const b = count()
  var ia = 0;
  var ib = 0;
  var result = [];

  if ((cmd[0] === "--count" && cmd2[0] === "--filter") || (cmd[0] === "--filter" && cmd2[0] === "--count")) {
    filter(cmd2[1])
  }

  // Get common values count() and filter()
  while (ia < a.length && ib < b.length) {
    if (a[ia] < b[ib]) {
      ia++;
    } else if (a[ia] > b[ib]) {
      ib++;
    } else /* identical value => we keep */ {
      result.push(a[ia]);
      ia++;
      ib++;
    }
    return result;
  }

} catch (err) {
  throw err;
}

module.exports = {
  count,
  filter,
};