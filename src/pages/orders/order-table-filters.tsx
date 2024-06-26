import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold" >Filtros:</span>
                    <Input type="text" placeholder="Nome do cliente" className="h-8 w-auto" />
                    <Input type="text" placeholder="Id do pedido" className="h-8 w-[320px]" />
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em preparo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
            </Select>        
            <Button type="submit" variant="secondary" className="h-7 px-2.5">
                <Search className="h-4 w-4 mr-2" />
                Filtrar resultados
            </Button>
            <Button type="button" variant="outline" className="h-7 px-2.5">
                <X className="h-4 w-4 mr-2" />
                Remover filtros
            </Button>
        
        </form>

    )
}