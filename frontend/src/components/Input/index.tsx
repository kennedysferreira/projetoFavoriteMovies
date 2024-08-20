import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: any;
}

export const Input = ({
  icon: Icon,
  className,
  ...props
}: InputProps & { icon?: React.ComponentType<any> }) => {
  const [isFocused, setIsFocused] = useState(false);

  const styles = `flex items-center gap-4 bg-zinc-800 rounded-lg flex-1 text-sm px-6 py-4 ${
    isFocused ? "text-white" : "text-zinc-400"
  } focus-within:border-[1px] focus-within:text-white  hover:border-[1px] border-zinc-700 ${className}`;
  return (
    <div className={styles}>
      {Icon && <Icon className="text-zinc-400 size-5" />}
      <input
        onFocus={() => setIsFocused(true)}
        className="bg-transparent w-full focus:outline-none"
        {...props}
      />
    </div>
  );
};
