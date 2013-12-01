
var resumeApp = angular.module ('resumeApp', []);

resumeApp.controller ('resume', function ($scope) {
	$scope.education = [
		{'period' : '2006 - 2011 : Alma Mater'},
		{'name' : 'University of Technology, Sydney (Dean\'s List)'},
		{'name' : 'Bachelor of Electrical / Electronic Engineering (Hons, First Class)'},
		{'name' : 'Bachelor of Business (Fin) [Distinction]'}
	];
});
