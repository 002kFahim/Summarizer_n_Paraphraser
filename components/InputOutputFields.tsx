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
  };

  return (
    <div className="mt-10 flex">
      {/* Input Field */}
      <div className="w-1/4"></div>
      <div className="w-1/4 pr-2">
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full h-48 px-4 py-2 border-2 border-gray-300 rounded-md resize-none"
        />
      </div>
      {/* Divider Line */}
      <div className="w-px bg-gray-300" />
      {/* Output Field */}
      <div className="w-1/4 pl-2">
        <div className="bg-gray-100 rounded-lg p-4 h-48">
          <span>Output:</span>
          <div className="overflow-y-auto max-h-full">{outputValue}</div>
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};

export default InputOutputFields;
