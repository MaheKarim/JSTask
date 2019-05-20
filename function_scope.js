function startCar(carID) {
    let message = 'Starting ...';
    let startFn = function turnkey() {
     let  message = 'Overriding ...';
    };
    startFn();
    console.log('message');
}
startCar(123);