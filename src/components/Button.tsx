import React from 'react'

interface ButtonInt {
  text:string,
  onClick?:()=> void,
  hasIcon?: boolean,
  icon?:any
}
const Button:React.FC<ButtonInt> = ({text, onClick, hasIcon, icon}) => {
  return (
    <button className='bg-primary text-white px-3 py-2 flex justify-center items-center gap-2 rounded-full'>{hasIcon && icon}{text}</button>
  )
}

export default Button