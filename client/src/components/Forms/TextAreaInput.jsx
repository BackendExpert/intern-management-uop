import React from 'react';

const TextAreaInput = ({
    label,
    name,
    rows = 4,
    value,
    onChange,
    placeholder = '',
    required = false,
}) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                rows={rows}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/75 backdrop-blur shadow-md text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 resize-none"
            />
        </div>
    );
};

export default TextAreaInput;