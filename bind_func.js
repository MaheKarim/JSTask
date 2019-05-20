  let anyVar = {
       carID: 123 ,  //property declare
      getId: function () {   // getID func declare
          return this.carID;  // this point return 123
      }
  };
   let newCar = { carID: 456}; // new car object
   let newFn = anyVar.getId.bind(newCar); // copy getID and input new value from newCar
  // now all store in newFN variable
  console.log(newFn());
