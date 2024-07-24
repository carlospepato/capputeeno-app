interface CheckoutBagProps {
  value: number;
}

export function CheckoutBag({value}: CheckoutBagProps) {
  return (
    <div className="absolute -bottom-1 -right-2 w-4 h-4 flex bg-red-500 text-zinc-50 rounded-full justify-center">
      <span className="text-xs">{value}</span>
    </div>
  )
}