// VEHICLE PROTOTYPE CHAIN
function Vehicle (make, model) {
  this.make = null;
  this.model = null;
  this.tires = [];
}

function Car () {}
Car.prototype = new Vehicle();

function Truck () {}
Truck.prototype = new Vehicle();

function Boat () {}
Boat.prototype = new Vehicle();


// MAKE PROTOTYPE CHAIN
function Make (maker) {
  this.manufacturer = maker;
  this.model = null;
}

function Volkswagen () {}
Volkswagen.prototype = new Make('Volkswagen');

function Subaru () {}
Subaru.prototype = new Make('Subaru');

// MODEL PROTOTYPE CHAIN
function Model (name) {
  this.modelName = name;
}

function Jetta () {}
Jetta.prototype = new Model('Jetta');

function Outback () {}
Outback.prototype = new Model('Outback');


// TIRE PROTOTYPE CHAIN
function Tire (brand) {
  this.brand = null;
}

function Bridgestone () {}
Bridgestone.prototype = new Tire('Bridgestone');


// CONSTRUCTING NEW CARS
var newSubaruOutback = new Car();
var newSubaru = new Subaru();
var newOutback = new Outback();
var tire1 = new Bridgestone();
var tire2 = new Bridgestone();
var tire3 = new Bridgestone();
var tire4 = new Bridgestone();

newSubaruOutback.tires.push(tire1, tire2, tire3, tire4);
newSubaruOutback.make = newSubaru;
newSubaruOutback.model = newOutback;

console.log(newSubaruOutback);

var newVWJetta = new Car();
var newVW = new Volkswagen();
var newJetta = new Jetta();

newVWJetta.make = newVW;
newVWJetta.model = newJetta;
newVWJetta.tires.push(tire1, tire2, tire3, tire4);

console.log(newVWJetta);