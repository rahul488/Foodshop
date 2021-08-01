import React from "react";
import Select from "react-select";

function DistrictSelect({ onChange, options, value, className }) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.label === value) : "";
  };
  return (
    <div className={className}>
      <Select
        value={defaultValue(options, value)}
        options={options}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
}

export default DistrictSelect;
