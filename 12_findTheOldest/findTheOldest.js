const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        if (!oldest["yearOfDeath"]) {
            oldest["yearOfDeath"] = new Date().getFullYear()
        }
        if (!current["yearOfDeath"]) {
            current["yearOfDeath"] = new Date().getFullYear()
        }
        if ((oldest.yearOfDeath - oldest.yearOfBirth) < (current.yearOfDeath - current.yearOfBirth)) {
            oldest = current
        }
        return oldest
    })
}
// Do not edit below this line
module.exports = findTheOldest;
