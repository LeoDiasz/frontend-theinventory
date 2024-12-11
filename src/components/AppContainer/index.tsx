import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Toaster } from "react-hot-toast";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import InventoryIcon from "@mui/icons-material/Inventory";

interface IAppContainerProps {
  children: React.ReactElement;
}

export const AppContainer = ({ children }: IAppContainerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [value, setValue] = useState();
  const navigate = useNavigate();

  return (
    <AppContext.Provider value={{ setIsLoading }}>
      <>
        <Toaster />
        {children}
      </>
    </AppContext.Provider>
  );
};
