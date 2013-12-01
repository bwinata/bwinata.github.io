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
		 'date' : '28th June 2013',
		 'link' : ''},
		{'name' : 'Keeping an Active Lifestyle',
		 'date' : '28th July 2013',
		 'link' : ''},
		{'name' : 'Keeping Focused',
		 'date' : '28th August 2013',
		 'link' : ''},
		{'name' : 'Preparing for a Technical Interview',
		 'date' : '28th November 2013',
		 'link' : ''},
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