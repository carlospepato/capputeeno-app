interface CardProductsProps {
  children: React.ReactNode;
}

export function CardProducts({children}: CardProductsProps) {
  return(
    <div>
      {children}
    </div>
  )
}