import React from 'react'

export default function Button({ children, onClick, type = 'button', className = '', size = 'md', variant = 'primary' }) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    ghost: 'bg-transparent text-gray-800',
    dark: 'bg-gray-900 hover:bg-gray-800 text-white'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} rounded-md font-medium ${className}`}
    >
      {children}
    </button>
  )
}
