import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isValid: boolean;
  isTouched: boolean;
}

export const Input = ({ label, isValid, isTouched, ...props }: Props) => {
  return (
    <label className="flex flex-col gap-2 w-full text-primary-darkNavy text-xs font-bold">
      <div className="flex justify-between items-center">
        <span>{label}</span>
        {!isValid && isTouched && (
          <span className="text-xs font-bold text-[#FF6155]">
            Valid email required
          </span>
        )}
      </div>
      <input
        {...props}
        className={`text-base font-normal outline-none py-4 px-6 rounded-lg ring-1 ring-primary-paleNavy ring-opacity-50
        ${
          isValid
            ? ''
            : isTouched
            ? 'ring-[#FF6155] placeholder:text-[#FF6155] text-[#FF6155]'
            : ''
        }
        
        `}
      />
    </label>
  );
};
