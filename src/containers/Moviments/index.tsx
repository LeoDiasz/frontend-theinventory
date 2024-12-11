import { useEffect } from "react";
import { AppContainerPages } from "../../components/AppContainerPages";
import { Button, Table } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import AppSelect from "../../components/AppSelect";
import { ProductResponse } from "../../models/products";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles.module.scss";
import * as yup from "yup";
import { REQUIRED_MSG } from "../../constants";

interface IForm {
  product: string;
}

export const validationSchemaSearch = yup.object({
    product: yup.string().required(REQUIRED_MSG),
  });

export const Moviments = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid: isValidForm },
  } = useForm<IForm>({ mode: "all" });
  const { getProducts, data } = useSearchProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const transformData = (dataList: ProductResponse[]) => {
    const dataFormatted = dataList.map((item) => ({
      value: item.uid,
      label: item.name,
    }));

    return dataFormatted;
  };

  return (
    <AppContainerPages
      title="Movimentações"
      subTitle="Veja as movimentações dos produtos já cadastrados."
    >
      <>
        <form className={styles.formMoviments}>
          <AppSelect<IForm>
            {...register("product")}
            label="Produto"
            data={transformData(data)}
            getValues={getValues}
            setValue={setValue}
            errorMessage={errors.product?.message}
          />

          <Button
            startIcon={<SearchIcon />}
            variant="contained"
            type="submit"
            size="large"
            className={styles.buttonCreate}
            disabled={!isValidForm}
          >
            Consultar
          </Button>
        </form>
        <Table />
      </>
    </AppContainerPages>
  );
};
