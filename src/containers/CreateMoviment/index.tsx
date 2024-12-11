import { useForm } from "react-hook-form";
import { AppContainerPages } from "../../components/AppContainerPages";
import AppInput from "../../components/AppInput";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.scss"
import { MovimentsService } from "../../services/moviments.service";
import toast from "react-hot-toast";
import { REQUIRED_MSG } from "../../constants";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";

interface IForm {
  type: string;
  amount: number;
  idProduct?: string;
}


export const validationSchemaCreate = yup.object({
    type: yup.string().required(REQUIRED_MSG),
    amount: yup.number().required(REQUIRED_MSG)

  });

export const CreateMoviment = () => {
  const params = useParams();
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid: isValidForm },
  } = useForm<IForm>({ mode: "all", resolver: yupResolver(validationSchemaCreate), defaultValues: {
    type: params.type
  }});
  const createMovimentService = MovimentsService.getInstance();

  const onSubmit = handleSubmit(async () => {
    const body = {
        type: getValues().type,
        amount: getValues().amount,
        idProduct: params.id,
      };
  
      createMovimentService
        .createMoviment(body)
        .then(() => {
          toast.success(`Movimento registrado com sucesso!`);
        })
        .catch(() => {
          toast.error("Erro ao registrar o movimento");
        });

  })

  return (
    <AppContainerPages title="Entrada/Saida" subTitle={`Produto: ${params.name && params.name}`}>
      <form onSubmit={onSubmit} className={styles.formCreateMoviment}>
        <AppInput<IForm>
          {...register("type")}
          label="Tipo"
          getValues={getValues}
          setValue={setValue}
          errorMessage={errors.type?.message}
          disabled
        />
        <AppInput<IForm>
          {...register("amount")}
          label="Quantidade"
          getValues={getValues}
          setValue={setValue}
          errorMessage={errors.amount?.message}
        />
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
    </AppContainerPages>
  );
};
