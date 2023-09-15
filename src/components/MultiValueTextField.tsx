'use client';
// import { IconType } from '@/types/icontypes/icon.type';
import React, { useState } from 'react';
// import { Icons } from '..';
import '../styles/main.css';

type MultiSelectType = {
   label: string;
   placeholder: string;
   required?: boolean;
   values: string[];
   setValues: React.Dispatch<React.SetStateAction<string[]>>;
};

const MultiInputField: React.FC<MultiSelectType> = ({
   values,
   setValues,
   label,
   placeholder,
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
         <h2 className="label-styles">
            {label}
            {required && <span className="required-styles">*</span>}
         </h2>
         <div
            className={`container-styles ${
               isFocused && 'container-styles-focus'
            }`}
         >
            <ul className="list-styles">
               {inputValues.map((option, index) => (
                  <li key={index} className="list-items-styles">
                     <span className="option-styles">{option}</span>
                     <div
                        className="remove-item-icon-styles "
                        onClick={() => handleRemoveElement(index)}
                     >
                        <p>&times;</p>
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
               className="remove-all-items-icon-styles"
            >
               {/* <Icons icon={IconType.CLOSE} size={20} onClick={() => {}} /> */}
               <p>&times;</p>
            </div>
         </div>
      </div>
   );
};

export default MultiInputField;
