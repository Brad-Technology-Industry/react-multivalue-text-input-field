import React from 'react';
import { type MultiSelectType } from './types/custom';
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
declare const MultiInputField: React.FC<MultiSelectType>;
export default MultiInputField;
