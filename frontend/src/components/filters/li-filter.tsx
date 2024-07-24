interface LiFilterProps {
  children: React.ReactNode;
  selected?: boolean;
  onclick?: () => void;
}

export function LiFilter({ children, selected, onclick }: LiFilterProps) {
  return (
    <li
      className={`text-zinc-600 font-saira ${selected && 'font-bold border-b-4 border-b-amber-600'}`}
      onClick={onclick}
    >
      {children}
    </li>
  )
}