import { Button, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useNavigate } from "react-router-dom";
import styles from "../styles.module.scss"

interface ICardMenuProps {
  title: string;
  page: string;
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}

export const CardMenu = ({ title, page, icon: Icon }: ICardMenuProps) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(page)} variant="outlined"  size="large" className={styles.cardMenu} >
      <Icon  />
      {title}
    </Button>
  );
};
