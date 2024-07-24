import { ChevronLeft } from "lucide-react";

interface PagePreviousProps {
  disabled?: boolean;
  onclick?: () => void;
}

export function PagePrevious({ disabled = false, onclick }: PagePreviousProps) {
  return (
    <span
      className={`${!disabled && 'cursor-pointer'} bg-zinc-300 px-1 py-1 rounded-md`}
      onClick={disabled ? undefined : onclick}
    >
      <ChevronLeft size={20} className="text-zinc-600" />
    </span>
  );
}