'use strict';
'use client';
var __spreadArray =
   (this && this.__spreadArray) ||
   function (to, from, pack) {
      if (pack || arguments.length === 2)
         for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
               if (!ar) ar = Array.prototype.slice.call(from, 0, i);
               ar[i] = from[i];
            }
         }
      return to.concat(ar || Array.prototype.slice.call(from));
   };
var __importDefault =
   (this && this.__importDefault) ||
   function (mod) {
      return mod && mod.__esModule ? mod : { default: mod };
   };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var main_module_css_1 = __importDefault(require('./styles/main.module.css'));
/**
 * A multi-input field component that allows users to add multiple values.
 * The component also provides features such as clearing all values, removing individual values, and styling options for the input field and the list of values.
 *
 * @param {MultiSelectType} props - The component props.
 * @param {string[]} values - The initial values in the input field.
 * @param {(values: string[]) => void} setValues - The function to call when the user adds or removes a value.
 * @param {string} label - The label for the input field.
 * @param {string} labelStyle - The style for the label.
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {OptionStyleType} optionStyle - The style for the list of values.
 * @param {OptionTextType} optionTextStyle - The style for the text in the list of values.
 * @param {React.ReactNode} optionCloseIcon - The icon to display for removing a value.
 * @param {string} optionCloseIconStyle - The style for the remove icon.
 * @param {string} containerFocusedStyle - The style for the container when it is focused.
 * @param {boolean} required - Whether the input field is required.
 *
 * @returns {React.ReactElement} The multi-input field component.
 */
var MultiInputField = function (_a) {
   var values = _a.values,
      setValues = _a.setValues,
      label = _a.label,
      labelStyle = _a.labelStyle,
      placeholder = _a.placeholder,
      optionStyle = _a.optionStyle,
      optionTextStyle = _a.optionTextStyle,
      optionCloseIcon = _a.optionCloseIcon,
      optionCloseIconStyle = _a.optionCloseIconStyle,
      containerFocusedStyle = _a.containerFocusedStyle,
      required = _a.required;
   /** State management */
   var _b = (0, react_1.useState)(values || ['Common Law', 'Agreement']),
      inputValues = _b[0],
      setInputValues = _b[1];
   var _c = (0, react_1.useState)(false),
      isFocused = _c[0],
      setIsFocused = _c[1];
   var handleAddElement = function (event) {
      if (event.target.value !== ' ' && event.target.value !== ',') {
         var tempValue = event.target.value;
         if (tempValue.charAt(tempValue.length - 1) === ',') {
            tempValue = tempValue.slice(0, -1);
            setInputValues(
               __spreadArray(
                  __spreadArray([], inputValues, true),
                  [tempValue],
                  false,
               ),
            );
            setValues(
               __spreadArray(
                  __spreadArray([], inputValues, true),
                  [tempValue],
                  false,
               ),
            );
            event.target.value = '';
         }
      }
   };
   var handleRemoveElement = function (index) {
      setInputValues(
         inputValues.filter(function (_, i) {
            return i !== index;
         }),
      );
   };
   var handleClearAll = function () {
      setInputValues([]);
      setValues([]);
   };
   return (0, jsx_runtime_1.jsxs)('div', {
      children: [
         (0, jsx_runtime_1.jsxs)('h2', {
            className: ''
               .concat(main_module_css_1.default['label-styles'], ' ')
               .concat(labelStyle),
            children: [
               label,
               required &&
                  (0, jsx_runtime_1.jsx)('span', {
                     className: ''.concat(
                        main_module_css_1.default['required-styles'],
                     ),
                     children: '*',
                  }),
            ],
         }),
         (0, jsx_runtime_1.jsxs)('div', {
            className: ''.concat(main_module_css_1.default['container-styles']),
            style: {
               borderColor: isFocused
                  ? containerFocusedStyle !== null &&
                    containerFocusedStyle !== void 0
                     ? containerFocusedStyle
                     : '#1A1A11'
                  : '',
            },
            children: [
               (0, jsx_runtime_1.jsx)('ul', {
                  className: ''.concat(
                     main_module_css_1.default['list-styles'],
                  ),
                  children: inputValues.map(function (option, index) {
                     return (0, jsx_runtime_1.jsxs)(
                        'li',
                        {
                           className: ''.concat(
                              main_module_css_1.default['list-items-styles'],
                           ),
                           style: {
                              backgroundColor:
                                 optionStyle === null || optionStyle === void 0
                                    ? void 0
                                    : optionStyle.backgroundColor,
                              paddingInline:
                                 optionStyle === null || optionStyle === void 0
                                    ? void 0
                                    : optionStyle.paddingHorizontal,
                              paddingBlock:
                                 optionStyle === null || optionStyle === void 0
                                    ? void 0
                                    : optionStyle.paddingVertical,
                              borderRadius:
                                 optionStyle === null || optionStyle === void 0
                                    ? void 0
                                    : optionStyle.borderRadius,
                           },
                           children: [
                              (0, jsx_runtime_1.jsx)('span', {
                                 className: ''.concat(
                                    main_module_css_1.default['option-styles'],
                                 ),
                                 style: {
                                    color:
                                       optionTextStyle === null ||
                                       optionTextStyle === void 0
                                          ? void 0
                                          : optionTextStyle.color,
                                    fontSize:
                                       optionTextStyle === null ||
                                       optionTextStyle === void 0
                                          ? void 0
                                          : optionTextStyle.fontSize,
                                    fontFamily:
                                       optionTextStyle === null ||
                                       optionTextStyle === void 0
                                          ? void 0
                                          : optionTextStyle.fontFamily,
                                    fontWeight:
                                       optionTextStyle === null ||
                                       optionTextStyle === void 0
                                          ? void 0
                                          : optionTextStyle.fontWeight,
                                 },
                                 children: option,
                              }),
                              (0, jsx_runtime_1.jsx)('div', {
                                 className: ''.concat(
                                    main_module_css_1.default[
                                       'remove-item-icon-styles'
                                    ],
                                 ),
                                 onClick: function () {
                                    return handleRemoveElement(index);
                                 },
                                 children: optionCloseIcon
                                    ? (0, jsx_runtime_1.jsx)('p', {
                                         className: ''.concat(
                                            optionCloseIconStyle,
                                         ),
                                         children: optionCloseIcon,
                                      })
                                    : (0, jsx_runtime_1.jsx)('p', {
                                         children: '\u00D7',
                                      }),
                              }),
                           ],
                        },
                        index,
                     );
                  }),
               }),
               (0, jsx_runtime_1.jsx)('input', {
                  type: 'text',
                  onFocus: function () {
                     return setIsFocused(true);
                  },
                  onBlur: function () {
                     return setIsFocused(false);
                  },
                  placeholder: inputValues.length > 0 ? 'add' : placeholder,
                  className: '',
                  onKeyUp: function (event) {
                     return event.key === 'Enter' || event.key === ','
                        ? handleAddElement(event)
                        : null;
                  },
               }),
               (0, jsx_runtime_1.jsx)('div', {
                  onClick: handleClearAll,
                  className: ''.concat(
                     main_module_css_1.default['remove-all-items-icon-styles'],
                  ),
                  children: (0, jsx_runtime_1.jsx)('p', { children: '\u00D7' }),
               }),
            ],
         }),
      ],
   });
};
exports.default = MultiInputField;
//# sourceMappingURL=MultiValueTextField.js.map
