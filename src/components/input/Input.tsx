import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: Props) => {
  return (
    <label className="flex flex-col gap-2 w-full text-primary-darkNavy text-xs font-bold">
      {label}
      <input
        {...props}
        className="text-base font-normal outline-none py-4 px-6 rounded-lg ring-1 ring-primary-paleNavy ring-opacity-50"
      />
    </label>
  );
};
