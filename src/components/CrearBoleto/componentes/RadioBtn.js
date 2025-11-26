import React from 'react'

export const RadioBtn = ({
    value,
    label,
    name,
    selectedValue,
    onChange
}) => {
    return (
        <label className="radio-btn">
            <input
                type="radio"
                name={name}
                value={value}
                checked={selectedValue === value}
                onChange={(e) => onChange(e.target.value)}
            />
            <span className="btn-texto">{label}</span>
        </label>
    );
}