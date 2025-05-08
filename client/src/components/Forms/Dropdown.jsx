import React from 'react';

const Dropdown = ({ label, name, onChange, required = false, options = [] }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <select
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800 transition-all duration-300"
            >
                <option value="">Select an option</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default Dropdown;