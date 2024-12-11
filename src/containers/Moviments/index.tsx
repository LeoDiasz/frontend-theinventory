import { useEffect, useState } from "react";
import { AppContainerPages } from "../../components/AppContainerPages";
import { Box, Button, List, ListItem, Table, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import AppSelect from "../../components/AppSelect";
import { ProductResponse } from "../../models/products";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";
import * as yup from "yup";
import { REQUIRED_MSG } from "../../constants";
import { MovimentsService } from "../../services/moviments.service";
import { IMovimentsResponse } from "../../models/moviments";
import { useParams } from "react-router-dom";

interface IForm {
  product: string;
}

export const validationSchemaSearch = yup.object({
  product: yup.string().required(REQUIRED_MSG),
});

export const Moviments = () => {
  const [dataMoviments, setDataMoviments] = useState<IMovimentsResponse[]>();
  const params = useParams();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isValid: isValidForm },
  } = useForm<IForm>({ mode: "all" });
  const { getProducts, data } = useSearchProducts();
  const movimentsServices = MovimentsService.getInstance();

  useEffect(() => {
    getProducts();
  }, []);

  const transformData = (dataList: ProductResponse[]) => {
    const dataFormatted = dataList.map((item) => ({
      value: item.id,
      label: item.name,
    }));

    return dataFormatted;
  };

  const onSubmit = handleSubmit(async () => {
    const body = {
      id: getValues().product,
    };

    movimentsServices.getMoviments(body).then((datas) => {
      setDataMoviments(datas);
    });
  });

  return (
    <AppContainerPages
      title="Movimentações"
      subTitle="Veja as movimentações dos produtos já cadastrados."
    >
      <>
        <form className={styles.formMoviments} onSubmit={onSubmit}>
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
        <Box className={styles.boxList}>
          <List sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
            {dataMoviments &&
              dataMoviments.map((moviment) => (
                <ListItem
                  className={styles.listItemMoviment}
                  sx={{
                    backgroundColor: "#E8F3F9",
                    padding: "40px",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    borderRadius: "20px"
                  }}
                >
                  <>
                    <Box className={styles.boxColumn}>
                      <Typography variant="h5">Tipo</Typography>
                      <Typography variant="h6">{moviment.type}</Typography>
                    </Box>
                    <Box className={styles.boxColumn}>
                      <Typography variant="h5">Quantidade</Typography>
                      <Typography variant="h6">{moviment.amount}</Typography>
                    </Box>
                    <Box className={styles.boxColumn}>
                      <Typography variant="h5">Data</Typography>
                      <Typography variant="h6">{moviment.date}</Typography>
                    </Box>
                  </>
                </ListItem>
              ))}
          </List>
        </Box>
      </>
    </AppContainerPages>
  );
};
