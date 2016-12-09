angular.module("detallePelicula",[])
.directive("detallePelicula",function(){
	return{
		template:"<div>{{pelicula.nombre}} - {{pelicula.director}}</div>",
		scope:{
			pelicula:"="
		}
	};
});