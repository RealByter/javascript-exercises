const findTheOldest = people =>
	people.reduce(
		(oldestPerson, currentPerson) => {
			if (!('yearOfDeath' in currentPerson)) {
				currentPersonYearOfDeath = new Date().getFullYear();
			} else {
				currentPersonYearOfDeath = currentPerson.yearOfDeath;
			}
			if (!('yearOfDeath' in oldestPerson)) {
				oldestPersonYearOfDeath = new Date().getFullYear();
			} else {
				oldestPersonYearOfDeath = oldestPerson.yearOfDeath;
			}

			const currentPersonAge =
				currentPersonYearOfDeath - currentPerson.yearOfBirth;
			const oldestPersonAge =
				oldestPersonYearOfDeath - oldestPerson.yearOfBirth;
			if (currentPersonAge > oldestPersonAge) {
				return currentPerson;
			} else {
				return oldestPerson;
			}
		},
		{ yearOfBirth: 2023, yearOfDeath: 2023 }
	);

// Do not edit below this line
module.exports = findTheOldest;
