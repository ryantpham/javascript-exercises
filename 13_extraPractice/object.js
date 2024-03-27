//Object
const houseKeeper1 = {
    yearsOfExperience: 2,
    name: 'jane',
    cleaningAreas:['bedroom','lobby','bathroom']
}
//Test Code
console.log(houseKeeper1.name);
console.log(houseKeeper1.yearsOfExperience);
console.log(houseKeeper1.cleaningAreas);

//Factory Function
function HouseKeeper(yearsOfExperience,name,cleaningAreas){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningAreas = cleaningAreas;
    this.clean = function clean(){
        console.log('cleaning in progress')
    }
}

//Test Code
const houseKeeper2 = new HouseKeeper(4,'Jake',['bathroom','living room']);
console.log(houseKeeper2);
console.log(houseKeeper2.name);
console.log(houseKeeper2.clean);