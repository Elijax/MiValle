'use strict';

app.controller('PlacesCtrl', function($scope, Places) {
  $scope.chats = Places.all();
  $scope.remove = function(chat) {
    Places.remove(chat);
  }
})

app.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  $scope.chat = Chats.get($stateParams.chatId);
});