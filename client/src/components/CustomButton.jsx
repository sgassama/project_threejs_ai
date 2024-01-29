import React from 'react'

const CustomButton = ({type, title, customStyles, handleClick}) => {

  const generateStyle = (type) => {
    return {
      borderWidth: '1px',
    }
  }

  return (
    <button
      className={`flex-0 underline !p-0 my-2 rounded-md text-violet-600 ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
