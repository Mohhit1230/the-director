import React from 'react'

export default function Input({ label, type = 'text', value, onChange, placeholder, name, className = '' }) {
  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  )
}
