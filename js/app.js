"use strict"

angular.module('todo', [])

.controller('ToDoCtrl', ['$scope', function($scope) {
    $scope.tasklist = [];
    $scope.priority = 'normal';

    $scope.addTask = function() {
        if(event.keyCode == 13 && $scope.taskName) {
            $scope.tasklist.push({
                "name": $scope.taskName,
                "priority": $scope.priority,
                "completed": false
            });
            $scope.taskName = "";
            $scope.priority = 'normal';
        }
    };

    $scope.deleteTask = function(index) {
        $scope.tasklist.splice(index, 1);
    };

}]);