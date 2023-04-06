import React from "react";
import { TextInput } from "flowbite-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextInputFieldProps {
  label?: string;
  inputId?: string;
  inputType?: string;
  error?: string;
  placeholder?: string;
  registerInputValues?: UseFormRegisterReturn<string>;
  handleChange?: (...args: any[]) => any;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  inputId,
  inputType,
  error,
  placeholder,
  registerInputValues,
  handleChange,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-normal text-gray-900">{label}</label>
      <TextInput
        id={inputId}
        type={inputType}
        placeholder={placeholder}
        onChange={handleChange}
        {...registerInputValues}
      />
      {!!error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{error}</span>
        </p>
      )}
    </div>
  );
};

export default TextInputField;
