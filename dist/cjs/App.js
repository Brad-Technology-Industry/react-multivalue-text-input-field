'use strict';
var __importDefault =
   (this && this.__importDefault) ||
   function (mod) {
      return mod && mod.__esModule ? mod : { default: mod };
   };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = __importDefault(require('react'));
var MultiValueTextField_1 = __importDefault(
   require('./components/MultiValueTextField'),
);
function App() {
   var _a = react_1.default.useState([]),
      values = _a[0],
      setValues = _a[1];
   return (0, jsx_runtime_1.jsx)('div', {
      className: 'App',
      children: (0, jsx_runtime_1.jsx)(MultiValueTextField_1.default, {
         label: 'Rice and stew',
         placeholder: 'Testing placeholder',
         values: values,
         setValues: setValues,
         required: true,
      }),
   });
}
exports.default = App;
//# sourceMappingURL=App.js.map
