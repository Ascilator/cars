import { Icon } from "./assets";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className="group relative flex items-center rounded-full border-none bg-black px-7 py-3 uppercase text-white duration-300 hover:pr-12 md:px-5 md:py-2 md:text-sm"
      onClick={onClick}
    >
      {text}
      <span className="invisible absolute right-4 top-1/2 -translate-y-1/2 opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
        <Icon />
      </span>
    </button>
  );
};
