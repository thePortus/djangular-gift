(function() {

    'use strict';

    angular.module('core').filter('passwordStrength', passwordStrengthFilter);

    function passwordStrengthFilter(passwordStrength) {
        return passwordStrength; // see services
    }

})();
