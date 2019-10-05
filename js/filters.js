myApp.filter('schoolName', function() {
    return function(arr, schoolName) {
        let newArr = [];
        arr.map((item) => {
            if(item.schoolName === schoolName){
                newArr.push(item);
            };
        });
        return newArr
    };
});