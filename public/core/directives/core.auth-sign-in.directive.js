(function() {

    'use strict';

    angular.module('core')
        .directive('authSignIn', authSignIn);

    function authSignIn(staticPath) {
        var directive = {
            templateUrl: staticPath('core/templates/core.auth-sign-in.template.html'),
            // variables to pass to directive controller
            scope: {
                auth: '='
            },
            controller: authSignInController,
            controllerAs: 'vm',
            bindToController: true // b/c isolated scope
        };
        return directive;
    }

    /* CONTROLLER FUNCTION */
    function authSignInController(Authentication) {
        /* jshint validthis: true */
        var vm = this;

        /* PROPERTY & METHOD DEFINITIONS */
        vm.auth = Authentication;

        /* INITIALIZATION */
        vm.initialize = initialize;
        vm.initialize();

        /* FUNCTIONS */
        function initialize() {}

    }
    /* /CONTROLLER FUNCTION */
})();
