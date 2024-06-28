import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const storeProfileSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
});

export function StoreProfileDialog() {
  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ["managed-restaurant"],
      queryFn: getManagedRestaurant,
    });
  console.log(managedRestaurant);
  type StoreProfile = z.infer<typeof storeProfileSchema>;
  const { register, handleSubmit } = useForm<StoreProfile>({
    resolver: zodResolver(storeProfileSchema),
    defaultValues: {
      name: managedRestaurant?.name || "",
      description: managedRestaurant?.description || "",
    },
  });
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informacoes do seu estabelecimento
        </DialogDescription>
      </DialogHeader>
      <form action="">
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descricao
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost">Cancelar</Button>
          <Button type="submit" variant={"success"}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
