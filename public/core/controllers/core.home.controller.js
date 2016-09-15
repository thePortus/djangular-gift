(function() {

    'use strict';

    angular.module('core').controller('HomeController', homeController);

    function homeController($scope, $auth, featuresCatalogue) {

        /* jshint validthis: true */
        var vm = this;

        vm.auth = $auth;
        vm.features = featuresCatalogue;
    }

})();
