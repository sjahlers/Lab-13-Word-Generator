var app = angular.module('wordModule', []);

app.controller('wordController', function($scope){
	//Create the word list
	var snackList = ['ice cream', 'blueberries', 'frog legs', 'chocolate', 'brussel sprouts', 
		'apple pie', 'potatoes', 'gravy', 'pizza', 'pickles', 'tacos', 'lobster', 'soup', 'sushi', 'stir-fry',
		'parmesan', 'lamb chops', 'carrots', 'fajitas', 'jelly', 'cashews', 'octopus'];
	var dinnerList = ['smothered pancakes', 'chicken and waffles', 'green bean casserole', 'scrumptious strawberry muffins', 'roasted garlic chicken', 'wonton soup', 'German chocolate cake', 'vegetable fried rice', 'ramen noodles', 'sauteed kale with balsamic reduction', 'lasagna with turkey sausage', 'Go out to eat', 'grilled cheese and tomato soup', 'deep-fried pizza rolls'];
	var classes = ['red', 'green', 'purple', 'blue', 'orange'];
	$scope.noClass = 'none';
	
	$scope.meals = [];
			
	//A Snack Button Function
	$scope.snackGenerator = function() {
			var food = snackList[Math.floor(Math.random() * snackList.length) ];
			$scope.meals.push({
				food: food,
				style: $scope.noClass
			});
	}
			
	$scope.styleSnackGenerator = function() {
		var styledSnack = snackList[Math.floor(Math.random() * snackList.length) ];
		$scope.class = classes[Math.floor(Math.random() * classes.length) ];
		$scope.meals.push({
			food: styledSnack,
			style: $scope.class
			});
	}
	
	$scope.dinnerGenerator = function() {
			var food = dinnerList[Math.floor(Math.random() * dinnerList.length) ];
			$scope.meals.push({
				food: food,
				style: $scope.noClass
			});
	}
	
	$scope.styleDinnerGenerator = function() {
		var styledDinner = dinnerList[Math.floor(Math.random() * dinnerList.length) ];
		$scope.class = classes[Math.floor(Math.random() * classes.length) ];
		$scope.meals.push({
			food: styledDinner,
			style: $scope.class
			});
	}
		
});