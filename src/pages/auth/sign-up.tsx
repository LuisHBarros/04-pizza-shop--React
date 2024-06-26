import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  email: z.string().email(),
  managerName: z.string(),
  companyName: z.string(),
  telephone: z.string(),
});

type SignUpFormType = z.infer<typeof signUpForm>;

export function SignUp() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>();

  async function handleSingUp(data: SignUpFormType) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      toast.success("Cadastro realizado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/auth/sign-in"),
        }
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      toast.error("Erro ao realizar cadastro.");
    }
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/auth/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSingUp)}>
            <div className="space-y-2">
              <Label htmlFor="company-name">Nome do seu estabelecimento</Label>
              <Input
                id="company-name"
                type="text"
                {...register("companyName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="manager-name">Seu nome</Label>
              <Input
                id="manager-name"
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tel">Seu telefone</Label>
              <Input id="tel" type="tel" {...register("telephone")} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar Cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao Continuar, você concorda com nossos <a href="#"className="underline underline-offset-4" >termos de serviço</a> e 
              <a href="#"className="underline underline-offset-4" > políticas de privacidade</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
