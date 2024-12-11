import { useEffect } from "react";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import { AppContainerPages } from "../../components/AppContainerPages";
import { Box } from "@mui/material";
import { CardProduct } from "./CardProduct";
import styles from "./styles.module.scss"

export const Products = () => {
  const { data, getProducts } = useSearchProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContainerPages title="Listagem de Produtos" subTitle="Liste e filtre os produtos já cadastrados.">
      <>
        <Box className={styles.boxProducts}>{data && data.map((item) => <CardProduct {...item} />)}</Box>
      </>
    </AppContainerPages>
  );
};
