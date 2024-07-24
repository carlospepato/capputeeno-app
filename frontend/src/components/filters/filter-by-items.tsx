import { useFilter } from "../../hooks/useFilter";
import { FilterTypes } from "../../types/filter-types";
import { LiFilter } from "./li-filter";
import { UlFilter } from "./ul-filter";

export function FilterByItems() {
  const { type, handlesetType } = useFilter();

  const handleSetType = (value: string) => {
    handlesetType(value);
  }

  return (
    <UlFilter>
      <LiFilter
        selected={type === FilterTypes.ALL}
        children={'Todas os Produtos'}
        onclick={() => handleSetType(FilterTypes.ALL)}
      />
      <LiFilter
        selected={type === FilterTypes.SHIRT}
        children={'Camisetas'}
        onclick={() => handleSetType(FilterTypes.SHIRT)}
      />
      <LiFilter
        selected={type === FilterTypes.MUG}
        children={'Canecas'}
        onclick={() => handleSetType(FilterTypes.MUG)}
      />
    </UlFilter>
  )
}