import React from 'react'

export const Footer = () => {
  return (
    <div className="  border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-6  md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} YogaNiroga. All rights reserved.</p>
          
        </div>
      </div>
    
  )
}

export default Footer