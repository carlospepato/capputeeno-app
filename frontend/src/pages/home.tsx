import { FilterByChoice } from "../components/filters/filter-by-choice";
import { FilterByItems } from "../components/filters/filter-by-items";

export function Home(){
  return(
    <div className="max-w-7xl mx-auto px-6 my-10">
      <div className="flex items-center justify-between">
        <FilterByItems/>
        <FilterByChoice/>
      </div>
    </div>
  )
}