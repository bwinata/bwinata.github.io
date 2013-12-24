/* AngularJS - Global Module */
var engineHack = angular.module ('engineHack', []);

/* 
 * ================================================
 * Routes
 * ================================================
 */
engineHack.config (['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when ("/blog/:title",  {
		templateUrl	: "templates/blog.html",
		controller	: "BlogController"
	});
	$routeProvider.when ("/", {
		templateUrl	: "templates/home.html",
		controller 	: "MainController"
	});
	$routeProvider.when ("/about/resume", {
		templateUrl	: "templates/resume.html"
	});

	$routeProvider.otherwise ({redirectTo : "/"});
}]);

/* 
 * ================================================
 * Directives
 * ================================================
 */
engineHack.directive ('markdown', function () {
	var converter = new Showdown.converter();
	return {
		restrict : 'C',
		link : function (scope, element, attrs) {
			$.get ("./" + scope.model.type + "/markdown/" + scope.model.title + ".md", function (data) {
				var htmlText = converter.makeHtml (data);
				element.html (htmlText);
			});
		}
	};
});
