"use strict"

angular.module('todo', [])

.controller('ToDoCtrl', ['$scope', function($scope) {
    $scope.tasklist = [];

    $scope.addTask = function() {
        if(event.keyCode == 13 && $scope.taskName) {
            $scope.tasklist.push({"name": $scope.taskName});
            $scope.taskName = "";
        }
    };

    $scope.deleteTask = function() {

    };

}]);