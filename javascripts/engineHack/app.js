/* Define global module for site */
var engineHackApp = angular.module ('engineHack', ['ngRoute', 'engineHackControllers']);

engineHackApp.config([
	'$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		when ('blog/:blogId', {
			templateUrl : 'templates/blog.html',
			controller	: 'Blog'
		});
	}
	
]);
