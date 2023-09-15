export interface MultiSelectType {
   label: string;
   labelStyle?: string;
   placeholder: string;
   optionCloseIcon?: React.ReactNode;
   placeholderStyle?: string;
   optionStyle?: string;
   optionTextStyle?: OptionTextType;
   optionCloseIconStyle?: string;
   containerFocusedStyle?: string;
   required?: boolean;
   values: string[];
   setValues: React.Dispatch<React.SetStateAction<string[]>>;
}

interface OptionTextType {
   color?: string;
   fontSize?: number;
   fontFamily?: string;
   fontWeight?: string;
}
