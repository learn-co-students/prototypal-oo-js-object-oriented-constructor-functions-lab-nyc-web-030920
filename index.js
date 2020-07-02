function Scooter(year, color, model){
    this.year = year;
    this.color = color;
    this.model = model;
};

//to create a new 'copied version' of this constructor function for an instance...
// let redRider = new Scooter('2020', 'Red', 'Vespa GTS Super')

function Driver(name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
};

function PickupLocation(address, city){
    this.address = address;
    this.city = city;
};