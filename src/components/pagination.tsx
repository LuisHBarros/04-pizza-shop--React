import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage || 1);
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} registros
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Pagina {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira pagina</span>
          </Button>
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Próxima pagina</span>
          </Button>
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Página anterior pagina</span>
          </Button>
          <Button className="h-8 w-8 p-0" variant="outline">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última pagina</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
