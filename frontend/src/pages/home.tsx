import { useEffect, useState } from "react";
import { FilterByChoice } from "../components/filters/filter-by-choice";
import { FilterByItems } from "../components/filters/filter-by-items";
import { PagePagination } from "../components/pagination/pagination";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  category: string;
}

export function Home() {
  const { api, updateApi } = useLocalStorage('api');
  const [products, setProducts] = useState<ProductProps[]>(() => api || []);

  const fetchProducts = async () => {
    try{
      const response = await fetch('http://localhost:3333/products');
      if (!response.ok) {
        console.error('Failed to fetch products:', response)
        return [];
      }
      const data = await response.json();
      return data.products
    }catch(error){
      console.error('Failed to fetch products:', error);
      return []
    }
  }

  const checkoutUpdate = async () => {
    const backendProducts = await fetchProducts();
    if (backendProducts && JSON.stringify(backendProducts) !== JSON.stringify(products)) {
      updateApi(backendProducts);
    }
  }

  useEffect(() => {
    // Carregar produtos do local storage na montagem inicial
    setProducts(api);

    // Verificar atualizações a cada 10 segundos
    const interval = setInterval(() => {
      checkoutUpdate();
    }, 10 * 1000); // 10 segundos

    // Limpar intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 my-10">
      <div className="flex items-center justify-between">
        <FilterByItems />
        <FilterByChoice />
      </div>
      <div className="my-4">
        <PagePagination />
      </div>
      <div>
        {
          products.map((product, index) => (
            <div key={index} className="flex items-center justify-between my-4">
              <div className="flex items-center gap-4">
                <img src={product.image_url} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">{product.name}</h1>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-gray-800 font-semibold">R$ {product.price.toFixed(2)}</p>
                </div>
              </div>
              <button className="bg-zinc-500 text-zinc-50 px-4 py-2 rounded-md">Adicionar ao carrinho</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}