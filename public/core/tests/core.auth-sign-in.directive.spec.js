(function() {

    'use strict';

    (function() {

        describe('auth-sign-in directive', authSignInDirective);

        function authSignInDirective() {
            beforeEach(module(ApplicationConfiguration.name));

            var scope, $elt;

            beforeEach(inject(authSignInInject));

            function authSignInInject($rootScope, _$compile_) {
                scope = $rootScope.$new();
                _.extend(scope, {
                    // TODO: populate scope as needed
                });

                var element = angular.element('<auth-sign-in auth="vm.auth"></auth-sign-in>');

                $elt = _$compile_(element)(scope);
                scope.$digest(); // call watchers

                it('should be usable', function() {
                    expect($elt).toExist();
                });
            }
        }

    })();

})();
