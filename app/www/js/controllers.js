'use strict';

app.controller('PlacesCtrl', function($scope, Places) {

 $scope.DummyPlaceUrl = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEX9Lrx3s5UkAaf-VVia5SsmzDaQngLCJA6Argg2NtiG6_LoAXsA';

  Places.query(function(data) {
    $scope.lugares = data;
  });

})

app.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  
  Places.query({},{id:$stateParams.id}, function(data) {
  	$scope.lugar = data;
  })

});