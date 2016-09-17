(function() {

    'use strict';

    angular.module('core').controller('HomeController', homeController);

    function homeController($auth, featuresCatalogue) {

        /* jshint validthis: true */
        var vm = this;

        vm.auth = $auth;
        vm.features = featuresCatalogue;

        vm.show_features = false;

    }

})();
