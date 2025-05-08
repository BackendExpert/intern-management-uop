import React from 'react';

const FileInput = ({ label, name, onChange, required = false, accept, multiple = false }) => {
    return (
        <div className="mb-6">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}
            <input
                type="file"
                name={name}
                id={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                className="block w-full text-sm text-gray-700 bg-white/80 border border-gray-200 rounded-xl shadow-md transition-all duration-300 file:bg-gradient-to-r file:from-blue-100 file:to-teal-100 file:text-blue-800 file:font-semibold file:px-4 file:py-2 file:rounded-xl file:border-0 hover:file:bg-blue-200"
            />

        </div>
    );
};

export default FileInput;