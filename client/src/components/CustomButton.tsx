import React from 'react'

const CustomButton = (
  {
    title,
    customStyles,
    handleClick
  }: {
    title: string,
    customStyles: string,
    handleClick: () => void
  }) => {

  return (
    <button
      className={`flex-0 underline !p-0 my-2 rounded-md text-violet-600 ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
