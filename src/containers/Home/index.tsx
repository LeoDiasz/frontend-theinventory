import { PAGE } from "../../constants";
import { CardMenu } from "./CardMenu";
import { Box } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import InventoryIcon from "@mui/icons-material/Inventory";
import RepartitionIcon from "@mui/icons-material/Repartition";
import styles from "./styles.module.scss";
import { AppContainerPages } from "../../components/AppContainerPages";

export const Home = () => {
  const listRoutes = [
    {
      page: PAGE.CREATE_PRODUCTS(),
      title: "Cadastrar Produto",
      icon: AppRegistrationIcon,
    },
    {
      page: PAGE.LIST_PRODUCTS(),
      title: "Produtos",
      icon: InventoryIcon,
    },
    {
      page: PAGE.LIST_MOVIMENTS(),
      title: "Movimentações",
      icon: RepartitionIcon,
    },
  ];

  return (
    <AppContainerPages title="Home">
      <Box className={styles.boxHome}>
        {listRoutes.map((item) => (
          <CardMenu {...item} />
        ))}
      </Box>
    </AppContainerPages>
  );
};
