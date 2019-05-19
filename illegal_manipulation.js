var str = 'abc';

function sloppyFunc() {
    str.length = 7;
    console.log(str.length);
}
function strictFunc() {
    'use strict';
    str.length =7;
}