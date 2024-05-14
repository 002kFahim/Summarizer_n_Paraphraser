// components/InputOutputFields.tsx
import React, { useState } from "react";

interface InputOutputFieldsProps {
  placeholder: string;
}

const InputOutputFields: React.FC<InputOutputFieldsProps> = ({
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // Here you can add your logic to process the input and set the output value
  };

  return (
    <div className="mt-8 flex flex-col items-center">
      {/* Input Field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-80 md:w-96 px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      {/* Divider */}
      <div className="border-t border-gray-300 w-80 md:w-96 mb-4"></div>
      {/* Output Field */}
      <div className="w-80 md:w-96 bg-gray-100 rounded-lg p-4">
        <span>Output:</span>
        <div className="overflow-y-auto max-h-40">{outputValue}</div>
      </div>
    </div>
  );
};

export default InputOutputFields;
