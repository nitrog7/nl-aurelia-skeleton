System.register(['aurelia-framework'], function (_export) {
  var computedFrom, _classCallCheck, _createClass, Welcome, UpperValueConverter;

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
        }

        _createClass(Welcome, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2luZGV4L3dlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjttREFJYSxPQUFPLEVBY1AsbUJBQW1COzs7O3VDQWhCeEIsWUFBWTs7O0FBRnBCLGtCQUFZLENBQUM7Ozs7OztBQUlBLGFBQU87aUJBQVAsT0FBTztnQ0FBUCxPQUFPOztlQUNsQixPQUFPLEdBQUcsd0NBQXdDO2VBQ2xELFNBQVMsR0FBRyxNQUFNO2VBQ2xCLFFBQVEsR0FBRyxLQUFLOzs7cUJBSEwsT0FBTzs7Ozs7Ozs7Ozs7Ozs7ZUFLTixZQUFFO0FBQ1osd0JBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO1dBQzdDOzs7aUJBRU0sbUJBQUU7QUFDUCxpQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQztXQUNyQzs7O2VBWFUsT0FBTzs7O3lCQUFQLE9BQU87O0FBY1AseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6InZpZXdzL2luZGV4L3dlbGNvbWUuanMiLCJzb3VyY2VSb290IjoiL3VuZGVmaW5lZCJ9