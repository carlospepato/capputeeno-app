import { LiFilter } from "./li-filter";
import { UlFilter } from "./ul-filter";

export function FilterByItems(){
  return(
    <UlFilter>
      <LiFilter children={'Todas os Produtos'}></LiFilter>
      <LiFilter children={'Camisetas'}></LiFilter>
      <LiFilter children={'Canecas'}></LiFilter>
    </UlFilter>
  )
}