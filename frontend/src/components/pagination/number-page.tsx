interface NumberPageProps {
  children: React.ReactNode;
  selected?: boolean;
  onclick?: () => void;
}

export function NumberPage({ children, onclick, selected }: NumberPageProps) {
  return (
    <span
      onClick={onclick}
      className={`text-sm cursor-pointer px-3 py-1 rounded-md ${selected ? 'text-orange-500 border border-orange-500 bg-zinc-100' : 'text-zinc-600 bg-zinc-300'}`}
    >
      {children}
    </span>
  )
}