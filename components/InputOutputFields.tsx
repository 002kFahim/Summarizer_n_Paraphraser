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
    <div className="mt-8 flex">
      {/* Input Field */}
      <div className="w-1/2 pr-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      {/* Divider Line */}
      <div className="w-px bg-gray-300" />
      {/* Output Field */}
      <div className="w-1/2 pl-2">
        <div className="bg-gray-100 rounded-lg p-4 h-40">
          <span>Output:</span>
          <div className="overflow-y-auto max-h-full">{outputValue}</div>
        </div>
      </div>
    </div>
  );
};

export default InputOutputFields;
