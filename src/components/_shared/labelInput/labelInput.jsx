import React from 'react'

        function LabelInput({title,type,placeholder=null,handleChange,name}) {
        return (
                <label className="label">
                        {title && <p className="title">{title}</p>}
                        <input
                                onChange={handleChange}
                                name={name}
                                className="input"
                                type={type}
                                placeholder={placeholder} />
                </label>
        )
        }

export default LabelInput
