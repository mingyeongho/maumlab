import { ChangeEvent } from "react";

export interface InputProps {
  label: string;
  type: "text" | "password";
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <>
      <div className="input_wrapper">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      <style jsx>{`
        .input_wrapper {
          display: flex;
          flex-direction: column;
          min-width: 220px;
          gap: 4px;
        }

        label {
          font-size: 1.125rem;
        }

        input {
          line-height: 26px;
          padding: 8px 12px;
          outline: none;
          border: 1px solid white;
          letter-spacing: 1px;
          background-color: inherit;
          color: white;
          border-radius: 4px;
          transition: 0.4s border;
        }

        input:focus {
          border-color: #f57f17;
        }
      `}</style>
    </>
  );
};

export default Input;
