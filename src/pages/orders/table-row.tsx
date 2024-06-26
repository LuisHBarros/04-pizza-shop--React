import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";

// export default interface OrderTableRowProps{

// }

export function OrderTableRow() {
    return (
        <TableRow>
                            <TableCell>
                                <Button variant="outline" className="h-7 px-2.5">
                                    <Search className="h-4 w-4" />
                                    <span className="sr-only">Detalhes do pedido</span>
                                </Button>
                                </TableCell>
                                <TableCell className="font-mono text-xs font-medium">1</TableCell>
                            <TableCell className="text-muted-foreground">Ha 15 minutos</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">

                                        <span className="h2 w2 rounded-full bg-slate-400"></span>
                                        <span>Pendente</span>
                                    </div>
                            </TableCell>
                            <TableCell className="font-medium">Luis Henrique</TableCell>
                                <TableCell className="font-medium">
                                    R$149,99
                            </TableCell>
                                <TableCell>
                                    <Button variant="outline" className="h-7 px-2.5">
                                        <ArrowRight className="mr-2 h-3 w-3" />
                                        Aprovar
                                    </Button>
                            </TableCell>
                                <TableCell>
                                    <Button variant="ghost" className="h-7 px-2.5">
                                        <X className="mr-2 h-3 w-3" />
                                        Cancelar
                                    </Button>
                            </TableCell>
                        </TableRow>
    )
}