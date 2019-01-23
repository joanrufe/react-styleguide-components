import React from "react";
import "./TextInput.scss";

const TextInput = ({ label, value, onChange, disabled }) => (
  <div className="form-group">
    {label && (
      <label className="text-label">
        {label}
      </label>
    )}
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={onChange}
      disabled={disabled || false}
    />
  </div>
);

export default TextInput;