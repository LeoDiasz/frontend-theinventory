import { Box, Button} from "@mui/material";
import { useForm } from "react-hook-form";
import AppInput from "../../components/AppInput";
import { ProductsService } from "../../services/products.service";
import toast from "react-hot-toast";
import styles from "./styles.module.scss";
import { AppContainerPages } from "../../components/AppContainerPages";
import AddIcon from "@mui/icons-material/Add";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MAX_MSG, MIN_MSG, REQUIRED_MSG } from "../../constants";

interface IForm {
  name: string;
  codBar?: string;
  type: string;
  amount: number;
  amountMin: number;
  amountMax: number;
}

export const validationSchemaCreate = yup.object({
  name: yup.string().required(REQUIRED_MSG),
  codBar: yup.string(),
  type: yup.string().required(REQUIRED_MSG),
  amount: yup.number().max(100, MAX_MSG).min(1, MIN_MSG).required(REQUIRED_MSG),
  amountMin: yup
    .number()
    .max(100, MAX_MSG)
    .min(1, MIN_MSG)
    .required(REQUIRED_MSG),
  amountMax: yup
    .number()
    .max(100, MAX_MSG)
    .min(1, MIN_MSG)
    .required(REQUIRED_MSG),
});

export const CreateProduct = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid: isValidForm },
    handleSubmit,
    reset,
  } = useForm<IForm>({
    mode: "all",
    resolver: yupResolver(validationSchemaCreate),
  });
  const productsService = ProductsService.getInstance();

  const onSubmit = handleSubmit(async () => {
    const body = {
      name: getValues().name,
      ean: getValues().codBar,
      amount: getValues().amount,
      amountMin: getValues().amountMin,
      amountMax: getValues().amountMax,
      type: getValues().type,
    };

    productsService
      .createProduct(body)
      .then(() => {
        toast.success(`Produto ${body.name} Cadastrado com sucesso!`);
        reset()
      })
      .catch(() => {
        toast.error("Erro ao Cadastrar o produto");
      });
  });

  return (
    <AppContainerPages title="Cadastre seu Produto" subTitle="Registre seus produtos com a quantidade necessária">
      <>
        <form onSubmit={onSubmit} className={styles.form}>
          <AppInput<IForm>
            {...register("codBar")}
            label="Código de Barras"
            getValues={getValues}
            setValue={setValue}
            errorMessage={errors.codBar?.message}
          />
          <AppInput<IForm>
            {...register("name")}
            label="Nome Produto"
            getValues={getValues}
            setValue={setValue}
            errorMessage={errors.name?.message}
          />
          <AppInput<IForm>
            {...register("type")}
            label="Tipo"
            getValues={getValues}
            setValue={setValue}
            errorMessage={errors.type?.message}
          />

          <AppInput<IForm>
            {...register("amount")}
            label="Quantidade"
            getValues={getValues}
            setValue={setValue}
            errorMessage={errors.amount?.message}
          />
          <Box className={styles.boxInputWithTwo}>
            <AppInput<IForm>
              {...register("amountMin")}
              label="Minimo Reposição"
              getValues={getValues}
              setValue={setValue}
              errorMessage={errors.amountMin?.message}
            />
            <AppInput<IForm>
              {...register("amountMax")}
              label="Maximo Reposição"
              getValues={getValues}
              setValue={setValue}
              errorMessage={errors.amountMax?.message}
            />
          </Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            type="submit"
            size="large"
            className={styles.buttonCreate}
            disabled={!isValidForm}
          >
            Cadastrar
          </Button>
        </form>
      </>
    </AppContainerPages>
  );
};
