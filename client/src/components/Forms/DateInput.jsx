import React from 'react'

const DateInput = ({ label, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
                {label}
            </label>
            <input
                type="date"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-lg shadow-md focus:ring-2 focus:ring-cyan-500 focus:outline-none text-gray-800 transition-all duration-300"
            />

        </div>
    )
}

export default DateInput