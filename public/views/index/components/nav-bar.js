System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      NavBar = (function () {
        var _instanceInitializers = {};

        function NavBar() {
          _classCallCheck(this, NavBar);

          this.router = _instanceInitializers.router.call(this);
        }

        _createDecoratedClass(NavBar, [{
          key: 'router',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4L2NvbXBvbmVudHMvbmF2LWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dEQUlhLE1BQU07Ozs7bUNBRlgsUUFBUTs7O0FBRmhCLGtCQUFZLENBQUM7Ozs7OztBQUlBLFlBQU07OztpQkFBTixNQUFNO2dDQUFOLE1BQU07O2VBQ1AsTUFBTSx5QkFBTixNQUFNOzs7OEJBREwsTUFBTTs7dUJBQ2hCLFFBQVE7O21CQUFVLElBQUk7Ozs7O2VBRFosTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoidmlld3MvaW5kZXgvY29tcG9uZW50cy9uYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii91bmRlZmluZWQifQ==