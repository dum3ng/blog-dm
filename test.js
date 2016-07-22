var _ = require('nimble')

var a,b

_.parallel([
    function (callback) {
        setTimeout(function () {
            console.log('one');
            a=3
        }, 25);
    },
    function (callback) {
        setTimeout(function () {
            console.log('two');
            b=4
        }, 0);
    }
],()=>console.log('end'));
