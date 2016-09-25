(function() {

    'use strict';

    // Authentication service for user variables
    angular.module('core')
        .factory('Authentication', authenticationFactory);

    function authenticationFactory($rootScope, $q, $http) {
        /* jshint validthis: true */
        var vm = this;

        vm.setLoggedUser = setLoggedUser;
        vm.checkuserLoggedIn = checkUserLoggedIn;

        function setLoggedUser(user) {
            if (user) {
                vm.user = user;
                vm.username = user.username;
                $rootScope.$emit('logged-in');
            }
        }

        function checkUserLoggedIn() {
            return !!vm.user;
        }
    }

})();
