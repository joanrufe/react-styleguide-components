import React from "react";
import "./TextInput.scss";

const TextInput = ({ label, value, onChange }) => (
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
    />
  </div>
);

export default TextInput;