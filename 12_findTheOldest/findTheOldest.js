const findTheOldest = function (people) {
  
  return people.reduce(
    (oldest, person) => {
      const age =
        "yearOfDeath" in person
          ? person.yearOfDeath - person.yearOfBirth
          : new Date().getFullYear() - person.yearOfBirth;
  
      if (oldest.age < age) {
        oldest.name = person.name;
        oldest.age = age;
      }

      return oldest;
    },
    { name: "", age: 0 }
  );
};

// Do not edit below this line
module.exports = findTheOldest;
