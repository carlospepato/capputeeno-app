import { ChevronRight } from "lucide-react";

interface PageNextProps {
  disabled?: boolean;
  onclick?: () => void;
}

export function PageNext({ disabled = false, onclick }: PageNextProps) {
  return (
    <span
      className={`${!disabled && 'cursor-pointer'} bg-zinc-300 px-1 py-1 rounded-md`}
      onClick={disabled ? undefined : onclick}
    >
      <ChevronRight size={20} className="text-zinc-600" />
    </span>
  );
}