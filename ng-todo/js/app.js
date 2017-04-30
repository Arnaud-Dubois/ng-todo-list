let app = angular.module('app', [])
	.controller('tutoCtrl', function($scope,$timeout, filterFilter) {



		$scope.tasksList = [
			{
				name : 'Se lever',
				completed : false
			},
			{
				name : 'Faire les courses',
				completed : false
			},
			{
				name : 'Peindre le vase',
				completed : true
			},
			{
				name : 'Faire à manger',
				completed : true
			}
		];

		$scope.$watch('tasksList', function() {
			$scope.tasksRemaining = filterFilter($scope.tasksList,{completed:false}).length;
		}, true)

		$scope.deleteTask = function(index) {
			  // event = event || window.event;
			  // var elem = angular.element(e.srcElement);
			  var target = event.target;
			  // var target = event.target||angular.element(event.srcElement); // <--- and these
 			  var parent = target.parentElement.parentElement;//parent of "target"
 			  var x = angular.element( parent );
			console.log(target);
			console.log(parent);
			x.addClass('disappear');
			// var myEl = angular.element( document.querySelector( 'li' ) );
			// myEl.addClass('disappear');
			$timeout(function(){
				console.log('wait');
				$scope.tasksList.splice(index,1);
			},400);
		}

		

		$scope.addTask = function() {

			$scope.tasksList.push({
				name : $scope.newTask,
				completed : false
			});
			$scope.newTask = '';
		}

	})
	;