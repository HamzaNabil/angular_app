var myApp = angular.module("myApp", []);

myApp.config(function() {});

myApp.controller("ClassController" , ["$scope" , "$http", function($scope, $http) {

    // Schools Name
    $scope.schools = [
       { value: 'school-1', name: 'Cairo English School'}, 
       { value: 'school-2', name: 'British International School In Cairo'},
       { value: 'school-3', name: 'Saint George\'s College'}
    ];

    // using http to get data
    $http.get('data/data.json').then(function(res) {
        $scope.classes = res.data;
    })
    
    // Add Class
    $scope.newClassRecord = {};
    $scope.addClass = function() {
        $scope.classes.push($scope.newClassRecord);
        $scope.newClassRecord = {};
        $("#addModal").modal('hide')
        $("#editModal").modal('hide');
    }

    // edit class 
    $scope.active = {sectionName: '', className: '', schoolName: '' , grade: ''}
    $scope.editClass = function(item) {
        $scope.active = item;
        $scope.schoolList = item.schoolName;
        $("#editModal").modal('show')
    }

    // View Class Item
    $scope.classView = {};
    $scope.viewClass = function(item) {
        $scope.classView = item;
    }

    // delete Class
    $scope.deleteRecordData = {};
    $scope.deleteClass = function(item) {
        $scope.deleteRecordData = item;
        $('#deleteRecord').modal('show')
    }

    $scope.confirmDeleteClass = function() {
        let itemDelete = $scope.classes.indexOf($scope.deleteRecordData);
        $scope.classes.splice(itemDelete , 1)
        $scope.deleteRecordData = {};
    }

    // disabled Modal 
    $(".btn").on("click", function (e) {         
        if ($(this).hasClass("disabled")) e.stopPropagation()
    });

    // reset Values 
    $scope.resetValues = function(item) {
        item.className = ''
        item.grade = ''
        item.sectionName = ''
    }

    // when click on cancel btn and if there is anyChanges
    $scope.cancel = function(){
        if( $scope.newClassRecord.className || $scope.newClassRecord.sectionName || $scope.newClassRecord.grade){
            $("#saveModal").modal('show')
        } else{
            $("#addModal").modal('hide')
            $("#editModal").modal('hide')
        }
    }

    // cancelSave
    $scope.cancelSave = function() {
        $scope.newClassRecord = {};
        $("#saveModal").modal('hide')
        $("#addModal").modal('hide')
        $("#editModal").modal('hide')
    }
    
  
}]);