'use client';
import React, { useState } from 'react';
import styles from './styles/main.module.css';
import { type MultiSelectType } from './types/custom.types';

const MultiInputField: React.FC<MultiSelectType> = ({
   values,
   setValues,
   label,
   labelStyle,
   placeholder,
   optionStyle,
   optionTextStyle,
   optionCloseIcon,
   optionCloseIconStyle,
   containerFocusedStyle,
   required,
}) => {
   /** State management */
   const [inputValues, setInputValues] = useState<string[]>(
      values || ['Common Law', 'Agreement'],
   );
   const [isFocused, setIsFocused] = useState(false);

   const handleAddElement = (event: any) => {
      if (event.target.value !== ' ' && event.target.value !== ',') {
         let tempValue = event.target.value;
         if (tempValue.charAt(tempValue.length - 1) === ',') {
            tempValue = tempValue.slice(0, -1);
            setInputValues([...inputValues, tempValue]);
            setValues([...inputValues, tempValue]);
            event.target.value = '';
         }
      }
   };

   const handleRemoveElement = (index: number) => {
      setInputValues(inputValues.filter((_, i) => i !== index));
   };

   const handleClearAll = () => {
      setInputValues([]);
      setValues([]);
   };

   return (
      <div>
         <h2 className={`${styles['label-styles']} ${labelStyle}`}>
            {label}
            {required && (
               <span className={`${styles['required-styles']}`}>*</span>
            )}
         </h2>
         <div
            className={`${styles['container-styles']}`}
            style={{
               borderColor: isFocused ? containerFocusedStyle ?? '#1A1A11' : '',
            }}
         >
            <ul className={`${styles['list-styles']}`}>
               {inputValues.map((option, index) => (
                  <li
                     key={index}
                     className={`${styles['list-items-styles']}`}
                     style={{
                        backgroundColor: optionStyle?.backgroundColor,
                        paddingInline: optionStyle?.paddingHorizontal,
                        paddingBlock: optionStyle?.paddingVertical,
                        borderRadius: optionStyle?.borderRadius,
                     }}
                  >
                     <span
                        className={`${styles['option-styles']}`}
                        style={{
                           color: optionTextStyle?.color,
                           fontSize: optionTextStyle?.fontSize,
                           fontFamily: optionTextStyle?.fontFamily,
                           fontWeight: optionTextStyle?.fontWeight,
                        }}
                     >
                        {option}
                     </span>
                     <div
                        className={`${styles['remove-item-icon-styles']}`}
                        onClick={() => handleRemoveElement(index)}
                     >
                        {optionCloseIcon ? (
                           <p className={`${optionCloseIconStyle}`}>
                              {optionCloseIcon}
                           </p>
                        ) : (
                           <p>&times;</p>
                        )}
                     </div>
                  </li>
               ))}
            </ul>
            <input
               type="text"
               onFocus={() => setIsFocused(true)}
               onBlur={() => setIsFocused(false)}
               placeholder={inputValues.length > 0 ? 'add' : placeholder}
               className=""
               onKeyUp={(event) =>
                  event.key === 'Enter' || event.key === ','
                     ? handleAddElement(event)
                     : null
               }
            />
            <div
               onClick={handleClearAll}
               className={`${styles['remove-all-items-icon-styles']}`}
            >
               <p>&times;</p>
            </div>
         </div>
      </div>
   );
};

export default MultiInputField;
