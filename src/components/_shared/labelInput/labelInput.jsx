import React from 'react';

function LabelInput({
  title,
  type,
  placeholder = null,
  handleChange,
  name,
  handleClick,
}) {
  return (
    <label className="label">
      {title && <p className="title">{title}</p>}
      <input
        onChange={handleChange}
        onClick={handleClick}
        name={name}
        className="input"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
}

export default LabelInput;
