import React from 'react'

const DefultButton = ({ text = 'Click Me', onClick, btntype }) => {
    return (
        <button
            type={btntype}
            onClick={onClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        >
            {text}
        </button>

    )
}

export default DefultButton