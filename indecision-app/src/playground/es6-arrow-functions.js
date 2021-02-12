//Challenge

//Arrow function
const getFirstName = (fullName) => {
    let firstName = fullName.split(" ");
    return firstName[0];
}

//Short hand version
const getFirstNameShort = (fullName) => fullName.split(" ")[0];

console.log(getFirstNameShort("Mike Smith"))