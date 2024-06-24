import React from 'react'

interface ButtonInt {
  text: string;
  onClick?: () => void;
  hasIcon?: boolean;
  icon?: React.ReactNode;
  styles?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonInt> = ({
  text,
  onClick,
  hasIcon,
  icon,
  styles,
  type = 'button',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary font-karla text-white px-3 py-2 flex justify-center items-center gap-2 rounded-full ${styles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      type={type}
      disabled={disabled}
    >
      {hasIcon && icon}{text}
    </button>
  )
}

export default Button