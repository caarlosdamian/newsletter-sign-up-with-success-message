import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, className, ...props }: Props) => {
  return (
    <button
      className={`cursor-pointer bg-primary-darkNavy text-white rounded-lg w-full pb-[14px] pt-[18px] text-base font-bold hover:shadow-btn hover:bg-gradient-to-br hover:from-[#FF6A3A] hover:to-[#FF527B]
      ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
