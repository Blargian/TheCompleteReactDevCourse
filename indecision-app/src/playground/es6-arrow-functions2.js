const add = (a,b) =>{
    return a +b;
};

const user = {
    name: 'Shaun',
    cities: ['Moscow','Johannesburg','London'],
    printPlacesLived() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
    },
}

//Challenge area

const multiplier = (numbers,multiplyBy) => {
    return numbers.map((number)=>number*multiplyBy)
}

console.log(multiplier([1,2,3,4],2));