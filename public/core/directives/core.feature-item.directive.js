// wrapper
(function() {

    'use strict';

    angular.module('core')
        .directive('featureItem', featureItem);

    function featureItem (staticPath) {
        var directive = {
            templateUrl: staticPath('core/templates/core.feature-item.template.html'),
            // variables to pass to directive controller
            scope: {
                feature: '='
            },
            controller: featureItemController,
            controllerAs: 'vm',
            bindToController: true // b/c isolated scope
        };
        return directive;
    }

    /* CONTROLLER FUNCTION */
    function featureItemController() {
            /* jshint validthis: true */
            var vm = this;

        }
        /* /CONTROLLER FUNCTION */
})(); // end wrapper
