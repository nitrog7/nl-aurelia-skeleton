System.register(['aurelia-framework'], function (_export) {
  var computedFrom, _createClass, _classCallCheck, _createDecoratedClass, Welcome, UpperValueConverter;

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      'use strict';

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
        }

        _createDecoratedClass(Welcome, [{
          key: 'heading',
          value: undefined,
          enumerable: true
        }, {
          key: 'firstName',
          value: undefined,
          enumerable: true
        }, {
          key: 'lastName',
          value: undefined,
          enumerable: true
        }, {
          key: 'fullName',
          decorators: [computedFrom('firstName', 'lastName')],
          get: function () {
            return '' + this.firstName + ' ' + this.lastName;
          }
        }, {
          key: 'welcome',
          value: function welcome() {
            alert('Welcome, ' + this.fullName + '!');
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4L3dlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswRUFFYSxPQUFPLEVBa0JQLG1CQUFtQjs7Ozt1Q0FwQnhCLFlBQVk7Ozs7Ozs7Ozs7O0FBRVAsYUFBTztpQkFBUCxPQUFPO2dDQUFQLE9BQU87O2VBQ2xCLE9BQU8sR0FBRyx3Q0FBd0M7ZUFDbEQsU0FBUyxHQUFHLE1BQU07ZUFDbEIsUUFBUSxHQUFHLEtBQUs7Ozs4QkFITCxPQUFPOzs7Ozs7Ozs7Ozs7Ozt1QkFRakIsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7ZUFDMUIsWUFBRTtBQUNaLHdCQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztXQUM3Qzs7O2lCQUVNLG1CQUFFO0FBQ1AsaUJBQUssZUFBYSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUM7V0FDckM7OztlQWZVLE9BQU87Ozt5QkFBUCxPQUFPOztBQWtCUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLEtBQUssRUFBQztBQUNYLG1CQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDckM7OztlQUhVLG1CQUFtQjs7O3FDQUFuQixtQkFBbUIiLCJmaWxlIjoidmlld3MvaW5kZXgvd2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvdW5kZWZpbmVkIn0=