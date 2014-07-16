var todoApp = angular.module('todoApp', []);

// todoApp.controller("ToDoCtrl", function ($scope) {
// 	$scope.todo = model;
// });

function TodoCtrl($scope) {

	$scope.todos = [
    {text:'this', done:false},         
    {text: 'that', done:false}
  ];

	$scope.getTotalTodos = function () {
    	return $scope.todos.length;
  };
    $scope.addTodo = function () {
    	$scope.todos.push({text:$scope.formTodoText, done:false});
    	$scope.formTodoText = '';
  };
}





