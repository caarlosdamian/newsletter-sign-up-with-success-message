import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, className, ...props }: Props) => {
  return (
    <button
      className={`bg-primary-darkNavy text-white rounded-lg w-full py-[14px] text-base font-bold ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
