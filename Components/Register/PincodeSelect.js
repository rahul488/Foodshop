import React from "react";
import Select from "react-select";
import "./Register.css";

function PincodeSelect({ options, value, onChange, style }) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <Select
      options={options}
      value={defaultValue(options, value)}
      onChange={(value) => onChange(value)}
    />
  );
}

export default PincodeSelect;
