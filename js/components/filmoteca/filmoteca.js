angular.module("filmoteca",[])

.controller("FilmotecaController",["filmotecaService",function(filmoteca){

	var scope = this;
	scope.peliculas = [];

	scope.getPeliculas = function(){
		filmoteca.getPeliculas().then(
			function(data) {
			    if (data.data) {
			        scope.peliculas = data.data;
			    }
			}
		);
	}


}])
.service("filmotecaService",["$http",function($http){
	var scope = this;
	scope.peliculas = [];

	scope.getPeliculas = function(){
		return $http.get("http://localhost:3000/peliculas");
	};

	
}])
.directive("filmoteca",function(){
	return {
		restrict:"E",
		templateUrl:'./js/components/filmoteca/filmoteca.html',
		controller:"FilmotecaController",
		controllerAs:"$ctrl"
	}
});