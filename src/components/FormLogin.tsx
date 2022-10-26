import { ButtonSignIn } from "./ButtonSignIn";
import * as Label from "@radix-ui/react-label";
import { InputForm } from "./InputForm";

export function FormLogin() {
  return (
    <form action="" className="">
      <h1 className="text-3xl font-bold text-white-200 text-center mb-8">
        Entre na sua conta!
      </h1>
      <div className="flex flex-col mb-3">
        <Label.Root
          htmlFor="email"
          className="text-white-200 text-base font-bold mb-3"
        >
          Email
        </Label.Root>
        <InputForm
          type="email"
          name="email"
          id="email"
          placeholder="seuemail@gmail.com"
        />
      </div>
      <div className="flex flex-col mb-3">
        <Label.Root
          htmlFor="password"
          className="text-white-200 text-base font-bold mb-3"
        >
          Senha
        </Label.Root>
        <InputForm
          id="password"
          name="password"
          type="password"
          placeholder="**********"
        />
      </div>
      <div className="w-[400px] ">
        <ButtonSignIn>Enviar</ButtonSignIn>
      </div>
    </form>
  );
}
