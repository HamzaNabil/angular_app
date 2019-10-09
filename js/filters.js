myApp.filter('schoolName', function() {
    return function(arr, schoolName) {
        let newArr = [];
        "use strict";

        if(arr) {
            arr.map(function (item) {
                if (item.schoolName === schoolName) {
                    newArr.push(item);
                };
            });
        }
        return newArr
    };
});