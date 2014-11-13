var app = angular.module('myApp', []);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "views/home.html",
		controller: 'HomeController'
	});
	.otherwise({redirectTo: '/'});
});

app.controller ('HomeController', function() {

});