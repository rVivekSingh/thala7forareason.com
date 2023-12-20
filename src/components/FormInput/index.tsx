import React, { ChangeEvent, CSSProperties, LabelHTMLAttributes } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: any;
  unit?: string;
  className?: string;
  optional?: string;
  required?: boolean;
  error?: boolean;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  value,
  unit,
  className,
  optional,
  required,
  error,
  labelStyle,
  inputStyle,
  labelProps,
  disabled,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={`input-group`}>
      {label && (
        <label className="label" {...labelProps} style={labelStyle}>
          {label}{" "}
          {optional && <span className="label-optional">{optional}</span>}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative overflow-hidden rounded">
        <input
          value={value}
          className={`input-field ${unit && "!pr-9"} ${className || ""}`}
          style={inputStyle}
          onChange={onChange}
          required={required}
          disabled={disabled}
          {...rest}
        />

        {unit && (
          <div className="absolute inset-y-2 flex items-center right-2 w-7 justify-center font-medium text-lg text-slate-800 dark:text-gray-200">
            {unit}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
