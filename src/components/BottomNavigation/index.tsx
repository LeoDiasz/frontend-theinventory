import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import InventoryIcon from "@mui/icons-material/Inventory";
import RestoreIcon from '@mui/icons-material/Restore';
import RepartitionIcon from "@mui/icons-material/Repartition";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { PAGE } from "../../constants";

export const AppBottomNavigation = () => {
  const navigate = useNavigate();
  return (
    <BottomNavigation
      showLabels
      sx={{
        display: "flex",
        gap: "4rem",
      }}
    >
      <BottomNavigationAction
        label="Voltar"
        icon={<RestoreIcon />}
        onClick={() => navigate(-1)}
      />
      <BottomNavigationAction
        label="Cadastrar"
        icon={<AppRegistrationIcon />}
        onClick={() => navigate(PAGE.CREATE_PRODUCTS())}
      />
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={() => navigate(PAGE.HOME())}
      />
      <BottomNavigationAction
        label="Produtos"
        icon={<InventoryIcon />}
        onClick={() => navigate(PAGE.LIST_PRODUCTS())}
      />
       <BottomNavigationAction
        label="Movimentações"
        icon={<RepartitionIcon />}
        onClick={() => navigate(PAGE.LIST_MOVIMENTS())}
      />
    </BottomNavigation>
  );
};
