interface LiFilterProps {
  children: React.ReactNode;
  selected?: boolean;
}

export function LiFilter({children, selected}: LiFilterProps){
  return(
    <li className={`text-zinc-600 font-saira ${selected && 'font-bold border-b-4 border-b-amber-600'}`}>{children}</li>
  )
}