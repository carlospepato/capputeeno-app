interface UlFilterProps {
  children: React.ReactNode;

}

export function UlFilter({children}: UlFilterProps){
  return(
    <ul className="flex items-center gap-6 cursor-pointer">{children}</ul>
  )
}