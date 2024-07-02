const fibonacci = function(member) {
    if (member < 0) return "OOPS"
    if (member == 0) return 0;
    let lastMember = 1
    let lastCurrentMember = 1
    let currentMember = 1
    for (let i = 2; i < +member; i++) {
        currentMember = lastMember + lastCurrentMember
        lastMember = lastCurrentMember
        lastCurrentMember = currentMember
    }
    return currentMember;
};
// Do not edit below this line
module.exports = fibonacci;
