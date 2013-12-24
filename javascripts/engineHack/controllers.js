/*
 * Javascript - Angular JS
 * Controllers
 */

/* 
 * ================================================
 * Controllers
 * ================================================
 */
engineHack.controller ("MainController", ['$scope', function ($scope) {
	$scope.blogs = [
		{'name' : 'Keeping an Active Lifestyle',
		 'date' : 'August 2013',
		 'link' : '#/blog/Having-an-Active-Lifestyle'},
		{'name' : 'Preparing for a Technical Interview',
		 'date' : 'July 2013',
		 'link' : '#/blog/Preparing-for-a-Technical-Interview'},	
		{'name' : 'Keeping Focused',
		 'date' : 'July 2013',
		 'link' : '#/blog/Keeping-Focused'},	
		{'name' : 'Attending My First Hacakthon',
		 'date' : 'May 2013',
		 'link' : '#/blog/Attending-My-First-Hackathon'} 	 	 
	];

	$scope.software = [
		{'name' : 'Getting Started with Makefiles',
		 'date' : 'December 2013',
		 'link' : '#/blog/Getting-Started-with-Makefiles'},
		{'name' : 'Getting in Touch with GNU Debugger (GDB) through C',
		 'date' : 'December 2013',
		 'link' : ''},		
		{'name' : 'How to Unit Test with the ACUTE Framework',
		 'date' : 'January 2014',
		 'link' : ''},		
	];	

	$scope.resume = [
		{'name' : 'LinkedIn',
		 'link' : 'http://au.linkedin.com/in/barrywinata/'},
		{'name' : 'Check out my personal CV',
		 'link' : '#/about/resume'}
	];	
}]);

engineHack.controller ("BlogController", ['$scope', '$routeParams', function ($scope, $routeParams) {
	$scope.model = {
		type  : "blog",
		title : $routeParams.title
	}
}]);

engineHack.controller ("AboutController", ['$scope', '$routeParams', function ($scope, $routeParams) {
	$scope.model = {
		type  : "about",
		title : "cv"
	}
}]);
