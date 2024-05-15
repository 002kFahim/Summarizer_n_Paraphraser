import React, { useState } from "react";

interface InputOutputFieldsProps {
  placeholder: string;
}

const InputOutputFields: React.FC<InputOutputFieldsProps> = ({
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can process the inputValue and set the outputValue accordingly
    // For now, let's just set the outputValue to the input value
    setOutputValue(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    setOutputValue("");
  };

  return (
    <div className="mt-10 flex">
      <div className="w-1/4" />
      {/* Input Field */}
      <div className="w-1/4 pr-2">
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full h-48 px-4 py-2 border-2 border-gray-300 rounded-md resize-none"
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 mr-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Clear
          </button>
        </div>
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
      <div className="w-1/4" />
    </div>
  );
};

export default InputOutputFields;
