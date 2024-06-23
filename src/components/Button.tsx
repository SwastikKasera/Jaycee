import React from 'react'

interface ButtonInt {
  text:string,
  onClick?:()=> void,
  hasIcon?: boolean,
  icon?:any,
  styles?:string
}
const Button:React.FC<ButtonInt> = ({text, onClick, hasIcon, icon, styles}) => {
  return (
    <button onClick={onClick} className={`bg-primary font-karla text-white px-3 py-2 flex justify-center items-center gap-2 rounded-full ${styles}`}>{hasIcon && icon}{text}</button>
  )
}

export default Button