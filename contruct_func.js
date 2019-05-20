    function Car(id){ // parameter id
   this.carID = id;
   } let car = new Car(1236);
   console.log(car.carID);

/* New Programme Start */

   function Bike(id) {
       this.bikeID = id; // bikeID diye dhorlam parameter ke
       this.start = function(myZam){
           //this.anyApps = myZam; // no use of myZam parameter
       console.log('This Is From start: ' + this.bikeID);
       };
       // console.log(this);
   }

   let vehicle = new Bike(1010);
   vehicle.start();