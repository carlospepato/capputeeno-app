import { useFilter } from "../../hooks/useFilter";
import { NumberPage } from "./number-page";
import { PageNext } from "./page-next";
import { PagePrevious } from "./page-previous";

export function PagePagination() {
  const { page, handlesetPage } = useFilter();
  return (
    <div className="w-full h-full flex items-center justify-end gap-2">
      {Array.from({ length: 5 }, (_, i) => (
        <NumberPage 
          key={i}
          selected={page === i + 1}
          onclick={() => handlesetPage(i + 1)}
        >
          {i + 1}
        </NumberPage>
      ))}
      <PagePrevious
        disabled={page === 1}
        onclick={() => handlesetPage(page - 1)}
      />
      <PageNext
        disabled={page === 5}
        onclick={() => handlesetPage(page + 1)}
      />
    </div>
  )
}