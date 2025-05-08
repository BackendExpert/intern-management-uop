import React from 'react'

const DefultInput = ({ label, type, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-300"
            />

        </div>
    )
}

export default DefultInput