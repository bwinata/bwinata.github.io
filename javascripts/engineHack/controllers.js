/*
 * Javascript - Angular JS
 * Controllers
 */

/* Define global module for site */
var engineHackApp = angular.module ('engineHack', []);

/* Controller - Blog */
engineHackApp.controller ('blogList', function ($scope) {
	$scope.blogs = [
		{'name' : 'Attending My First Hacakthon',
		 'date' : 'May 2013',
		 'link' : 'blog/Attending-My-First-Hackathon.html'},
		{'name' : 'Keeping Focused',
		 'date' : 'July 2013',
		 'link' : 'blog/Keeping-Focused.html'},
		{'name' : 'Preparing for a Technical Interview',
		 'date' : 'July 2013',
		 'link' : 'blog/Preparing-for-a-Technical-Interview.html'},
		{'name' : 'Keeping an Active Lifestyle',
		 'date' : 'August 2013',
		 'link' : 'blog/Having-an-Active-Lifestyle.html'},
	];
});

/* Controller - Software */
engineHackApp.controller ('softwareList', function ($scope) {
	$scope.software = [
		{'name' : 'Getting Started with Makefile',
		 'date' : '28th June 2013',
		 'link' : ''},
		{'name' : 'Getting in Touch with GNU Debugger (GDB) through C',
		 'date' : '28th June 2013',
		 'link' : ''},		
		{'name' : 'How to Unit Test with the ACUTE Framework',
		 'date' : '28th June 2013',
		 'link' : ''},		
	];
});

/* Controller - Resume */
engineHackApp.controller ('resumeList', function ($scope) {
	$scope.resume = [
		{'name' : 'LinkedIn',
		 'link' : 'http://au.linkedin.com/in/barrywinata/'},
		{'name' : 'Check out my personal CV',
		 'link' : 'about/resume.html'}
	];
});


engineHackApp.directive ('markdown', function () {
	var converter = new Showdown.converter();
	return {
		restrict : 'C',
		link : function (scope, element, attrs) {
			var htmlText = converter.makeHtml (element.text());
			element.html (htmlText);
		}
	};
});
