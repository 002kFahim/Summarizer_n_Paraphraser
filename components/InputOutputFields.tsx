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
    setOutputValue(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    setOutputValue("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex w-2/3">
        <div className="w-1/2 pr-2">
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full h-96 px-4 py-2 border-2 border-gray-300 rounded-md resize-none"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 mr-2 bg-[#8DECB4] rounded-md hover:bg-[#41B06E] transition"
            >
              Submit
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-[#C73659] rounded-md hover:bg-[#A91D3A] transition"
            >
              Clear
            </button>
          </div>
        </div>
        <div className="w-px bg-gray-300" />
        <div className="w-1/2 pl-2">
          <div className="bg-gray-100 rounded-lg p-4 h-96">
            <span>Output:</span>
            <div className="overflow-y-auto max-h-full">{outputValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputOutputFields;
