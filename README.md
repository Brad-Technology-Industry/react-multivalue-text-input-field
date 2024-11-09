# MultiInputField Component

The `MultiInputField` component is a React multi-input field allowing users to add, clear, or remove multiple values. It supports custom styles, labels, and placeholders, and is perfect for use cases where users need to input or manage a list of tags or keywords.

## Installation

Install the package via npm:

```bash
npm install react-multivalue-text-input-field
```

## Usage

### Importing the Component

```javascript
import MultiInputField from 'react-multivalue-text-input-field';
import React, { useState } from 'react';
```

### Basic Example

```javascript
const App = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <MultiInputField
      values={values}
      setValues={setValues}
      label="Add Items"
      placeholder="Enter items"
      required={true}
    />
  );
};

export default App;
```

## Component Props

| Prop                  | Type                           | Description                                                                 |
|-----------------------|--------------------------------|-----------------------------------------------------------------------------|
| `values`              | `string[]`                    | Array of initial values for the input field.                                |
| `setValues`           | `(values: string[]) => void`  | Callback function called when a value is added or removed.                  |
| `label`               | `string`                      | Label for the input field.                                                  |
| `labelStyle`          | `string`                      | Additional styles for the label.                                            |
| `placeholder`         | `string`                      | Placeholder text for the input field.                                       |
| `optionStyle`         | `OptionStyleType`             | Styles for the list of values.                                              |
| `optionTextStyle`     | `OptionTextType`              | Styles for the text in each value option.                                   |
| `optionCloseIcon`     | `React.ReactNode`             | Custom icon component for removing a value.                                 |
| `optionCloseIconStyle`| `string`                      | Styles for the remove icon.                                                 |
| `containerFocusedStyle` | `string`                   | Styles applied to the container when it is focused.                         |
| `required`            | `boolean`                     | Indicates if the input field is required.                                   |

### Customization

- **Custom Label and Placeholder**: Customize the label and placeholder for a tailored user experience.
- **Value Styles**: Apply `optionStyle` and `optionTextStyle` for styling the list items.
- **Remove Icon**: Use `optionCloseIcon` to replace the default remove icon with a custom icon.

### Example with Custom Styling and Remove Icon

```javascript
<MultiInputField
  values={values}
  setValues={setValues}
  label="Items"
  placeholder="Add item"
  labelStyle="custom-label-style"
  optionStyle={{ backgroundColor: '#f5f5f5', borderRadius: '4px' }}
  optionTextStyle={{ color: '#333', fontSize: '14px' }}
  optionCloseIcon={<YourCustomIcon />}
  optionCloseIconStyle="custom-icon-style"
  containerFocusedStyle="focused-style"
  required
/>
```

## License

This project is licensed under the MIT License.