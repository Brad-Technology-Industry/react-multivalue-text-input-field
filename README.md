# MultiInputField Component

The `MultiInputField` component is a versatile and customizable React input field that enables users to add, clear, or remove multiple values. It’s ideal for tags, categories, keywords, or any multi-value input requirements, with extensive support for custom styling and UI elements.

## Features

- **Multi-value Input**: Users can add and manage multiple values.
- **Clear All Values**: Provides a clear-all option to reset the input.
- **Remove Individual Values**: Allows users to delete specific values.
- **Customizable UI**: Easily style the component, including label, input field, list items, and icons.
- **Accessible and User-friendly**: Supports required fields and placeholders for enhanced UX.

## Installation

First, install the package via npm:

```bash
npm install react-multivalue-text-input-field
```

## Importing and Basic Setup

### Step 1: Import the Component

```javascript
import MultiInputField from 'react-multivalue-text-input-field';
import React, { useState } from 'react';
```

### Step 2: Define State for the Values

Create a state to hold the input values using the `useState` hook.

```javascript
const App = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <MultiInputField
      values={values}
      setValues={setValues}
      label="Enter Tags"
      placeholder="Type and press enter"
      required={true}
    />
  );
};

export default App;
```

In this example, the `values` array will hold the current tags, and `setValues` updates this array when new tags are added or removed.

---

## Detailed Props Guide

The `MultiInputField` component accepts the following props, allowing for comprehensive customization:

### Required Props

| Prop       | Type                           | Description                                                         |
|------------|--------------------------------|---------------------------------------------------------------------|
| `values`   | `string[]`                     | Array of initial values for the input field.                        |
| `setValues`| `(values: string[]) => void`   | Function that updates the `values` array on adding or removing tags.|

### Optional Props for Enhanced Customization

| Prop                   | Type                           | Description                                                                 |
|------------------------|--------------------------------|-----------------------------------------------------------------------------|
| `label`                | `string`                       | Label text for the input field.                                             |
| `labelStyle`           | `string`                       | Additional CSS class or style string for the label styling.                 |
| `placeholder`          | `string`                       | Placeholder text that appears when no values are entered.                   |
| `optionStyle`          | `OptionStyleType`              | Custom styling for individual list items (background color, padding, etc.). |
| `optionTextStyle`      | `OptionTextType`               | Style properties for the text inside each list item.                        |
| `optionCloseIcon`      | `React.ReactNode`              | Custom icon component for removing a value.                                 |
| `optionCloseIconStyle` | `string`                       | CSS class or style string for the remove icon styling.                      |
| `containerFocusedStyle`| `string`                       | CSS styling applied to the container when it is focused.                    |
| `required`             | `boolean`                      | Marks the input field as required if set to `true`.                         |

---

### Full Prop Example with Descriptions

Here’s an example that demonstrates how to utilize various props for a fully customized experience:

```javascript
<MultiInputField
  values={values}
  setValues={setValues}
  label="Tags"
  labelStyle="custom-label-class" // Custom label CSS class for unique styling
  placeholder="Type and hit Enter" // Placeholder text when no values are entered
  optionStyle={{
    backgroundColor: '#e0f7fa',
    paddingHorizontal: '8px',
    paddingVertical: '4px',
    borderRadius: '4px'
  }} // List item styling
  optionTextStyle={{
    color: '#00796b',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold'
  }} // Text styling inside list items
  optionCloseIcon={<span>&#10006;</span>} // Custom close icon using a 'x' symbol
  optionCloseIconStyle="custom-close-icon-class" // Custom close icon style
  containerFocusedStyle="focused-container-class" // Container style on focus
  required // Sets the field as mandatory
/>
```

---

## Prop Breakdown

### Required Properties

- **values**: An array of strings representing the initial values.
- **setValues**: A callback function that updates the values array when values are added or removed.

### Label Customization

- **label**: Sets a descriptive text label above the input.
- **labelStyle**: Adds custom styling to the label, making it easy to match the input label with your design theme.

### Placeholder Text

- **placeholder**: Sets the placeholder text inside the input box. It can indicate how to interact with the input, such as "Type and hit Enter."

### Styling List Items

- **optionStyle**: Style the appearance of each list item, with properties like `backgroundColor`, `paddingHorizontal`, `paddingVertical`, and `borderRadius`.
- **optionTextStyle**: Customize the text inside each list item with `color`, `fontSize`, `fontFamily`, and `fontWeight`.

### Close Icon Customization

- **optionCloseIcon**: Replace the default close icon with a custom one. For example, you could use a FontAwesome icon here.
- **optionCloseIconStyle**: Apply additional styling to the close icon, such as changing color, size, or padding.

### Container Styling on Focus

- **containerFocusedStyle**: Specify styles that are applied to the container when it gains focus, such as adding a colored border.

### Required Field Indicator

- **required**: Marks the input field as required. If true, an asterisk (*) appears next to the label.

---

## Example with Full Customization and Clear Functionality

```javascript
import React, { useState } from 'react';
import MultiInputField from 'react-multivalue-text-input-field';

const TagInput = () => {
  const [tags, setTags] = useState<string[]>(['Example Tag 1', 'Example Tag 2']);

  return (
    <MultiInputField
      values={tags}
      setValues={setTags}
      label="Your Tags"
      labelStyle="custom-label-style"
      placeholder="Add a tag and press enter"
      optionStyle={{
        backgroundColor: '#ffeeff',
        paddingHorizontal: '10px',
        paddingVertical: '5px',
        borderRadius: '8px'
      }}
      optionTextStyle={{
        color: '#aa00aa',
        fontSize: '13px'
      }}
      optionCloseIcon={<span>&times;</span>}
      optionCloseIconStyle="close-icon-style"
      containerFocusedStyle="input-focused-style"
      required
    />
  );
};

export default TagInput;
```

---

## Custom CSS Styling Tips

For users who want to define their own custom styles, use the following guidelines:

```css
.custom-label-style {
  font-size: 16px;
  color: #333;
}

.custom-close-icon-class {
  font-size: 12px;
  color: #ff3333;
  cursor: pointer;
}

.input-focused-style {
  border: 2px solid #007bff;
}
```

---

## License

This project is licensed under the MIT License. Please see the LICENSE file for more information.