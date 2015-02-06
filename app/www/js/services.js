'use strict';


app.factory('Places', function($resource) {

	return $resource(
        "http://mivalle.co/api/v1/place/:id",
        {id: "@id" },
        {
            "reviews": {'method': 'GET', isArray: true} 
        }
    );


})

app.factory('placeByID', function($resource) {

  return $resource("http://mivalle.co/api/v1/place/:id");

})

app.factory('placeImages', function($resource) {

  return $resource("http://mivalle.co/api/v1/place/:images");





})
