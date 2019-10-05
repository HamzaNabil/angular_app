// custome directive for length ( validation input )
myApp.directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function(e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}]);

myApp.directive("allowNumbersOnly", function() {
    return {
      restrict: "A",
      link: function(scope, element, attrs) {
        element.bind("keydown", function(event) {
          if (event.keyCode == 8) {
            return false;
          } else if ( !(event.keyCode > 47 && event.keyCode < 58)  && !(event.keyCode > 96 && event.keyCode < 106) ) {
            event.preventDefault();
            return false;
          }
        });
      }
    }
});