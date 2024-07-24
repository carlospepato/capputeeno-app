import { Search, ShoppingBag } from "lucide-react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CheckoutBag } from "./checkout-bag";

export function Header() {
  const { value } = useLocalStorage('cart');
  return (
    <div className="min-w-full bg-zinc-100 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <h1 className="font-Logo text-4xl text-zinc-600 w-full">capputeeno</h1>
        <div className="flex items-center justify-between gap-6 w-full">
          <div className="flex items-center justify-between bg-gray-200 p-4 py-2 rounded-md w-full">
            <input type="text" placeholder="Procurando por algo específico?" className="w-full bg-transparent focus:outline-none px-1" />
            <Search className="text-gray-600" size={20} />
          </div>
          <div className="relative flex items-end">
            <ShoppingBag className="text-gray-800" size={24} />
            {value.length > 0 && <CheckoutBag value={value.length} />}
          </div>
        </div>
      </div>
    </div>
  )
}