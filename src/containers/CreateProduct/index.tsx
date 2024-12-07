import { Button, Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import AppInput from "../../components/AppInput";
import { ProductsService } from "../../services/products.service";
import toast from "react-hot-toast";

interface IForm {
  codeBar: string;
  name: string;
  amount: string;
  minAmount: string;
}

export const CreateProduct = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid: isValidForm },
    handleSubmit,
  } = useForm<IForm>({ mode: "all" });
  const productsService = ProductsService.getInstance();

  const onSubmit = handleSubmit(async () => {

    const body = {
        name: getValues().name,
        ean: getValues().codeBar,
        quantity: getValues().amount,
        min_replenishment: getValues().minAmount
    }


    productsService.createProduct(body).then(() => {
        toast.success(`Produto ${body.name} Cadastrado com sucesso!`)
    }).catch(() => {
        toast.error("Erro ao Cadastrar o produto")
    })
  });

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <AppInput<IForm>
          {...register("codeBar")}
          label="Código de Barras"
          getValues={getValues}
          setValue={setValue}
          errorMessage={errors.codeBar?.message}
        />
        <AppInput<IForm>
          {...register("name")}
          label="Nome Produto"
          getValues={getValues}
          setValue={setValue}
          errorMessage={errors.name?.message}
        />
        <AppInput<IForm>
          {...register("amount")}
          label="Quantidade"
          getValues={getValues}
          setValue={setValue}
          errorMessage={errors.name?.message}
        />
        <AppInput<IForm>
          {...register("minAmount")}
          label="Minimo Reposição"
          getValues={getValues}
          setValue={setValue}
          errorMessage={errors.name?.message}
        />
        <Button variant="contained" type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
};
