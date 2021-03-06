'use strict';

angular.module('yeomanIonicAngularPhonegapSeedApp')

.value('serverUrl', 'http://www.geognos.com/api/en/countries/info/all.json')

.factory('backend', ['$resource', 'serverUrl', function($resource, serverUrl) {
  return {
    getCountries: function() {
      var Names = $resource(serverUrl);
      return Names.get().$promise;
    }
  };
}]);