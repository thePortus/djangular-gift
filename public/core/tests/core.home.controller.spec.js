(function() {

    'use strict';

    (function() {
        describe('HomeController', function() {
            //Initialize global variables
            var scope,
                HomeController;

            // Load the main application module
            beforeEach(module(ApplicationConfiguration.name));

            beforeEach(inject(homeControllerInject));

            function homeControllerInject($controller, $rootScope) {
                scope = $rootScope.$new();
                HomeController = $controller('HomeController', {
                    $scope: scope
                });
            }
        });
    })();

})();
