import React from 'react';

export default function LabelInput({
  title,
  type,
  placeholder = null,
  handleChange,
  name,
  handleClick,
  value,
}) {
  return (
    <label className="label">
      {title && <p className="title">{title}</p>}
      <input
        onChange={handleChange}
        onClick={handleClick}
        name={name}
        value={value}
        className="input"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}
