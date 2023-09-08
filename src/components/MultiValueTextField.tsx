'use client';
// import { IconType } from '@/types/icontypes/icon.type';
import React, { useState } from 'react';
// import { Icons } from '..';

type MultiSelectType = {
   label: string;
   placeholder: string;
   required?: boolean;
   values: string[];
   setValues: any;
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
         <h2 className="relative mb-3 ml-2 max-w-max font-bold">
            {label}
            {required && (
               <span className="absolute -right-3 -top-1 block text-red-500">
                  *
               </span>
            )}
         </h2>
         <div
            className={`relative flex max-w-[35rem] flex-wrap gap-y-1 rounded-md border p-2 ${
               isFocused && 'border-[var(--primary-800)]'
            }`}
         >
            <ul className="flex flex-wrap gap-1">
               {inputValues.map((option, index) => (
                  <li
                     key={index}
                     className="flex w-fit items-center gap-2 rounded-full bg-[var(--secondary-300)] px-3 py-1.5 text-xs"
                  >
                     <span className="font-medium text-[var(--secondary-800)]">
                        {option}
                     </span>
                     <div
                        className="cursor-pointer"
                        onClick={() => handleRemoveElement(index)}
                     >
                        {/* <Icons
                           icon={IconType.CLOSE}
                           size={17}
                           onClick={() => {}}
                        /> */}
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
               className="w-full outline-none placeholder:text-xs"
               onKeyUp={(event) =>
                  event.key === 'Enter' || event.key === ','
                     ? handleAddElement(event)
                     : null
               }
            />

            <div
               onClick={handleClearAll}
               className="absolute right-0 top-0 cursor-pointer rounded-r-md px-2 py-2.5 transition-all duration-300 hover:scale-105 active:scale-[0.96]"
            >
               {/* <Icons icon={IconType.CLOSE} size={20} onClick={() => {}} /> */}
               <p>&times;</p>
            </div>
         </div>
      </div>
   );
};

export default MultiInputField;
