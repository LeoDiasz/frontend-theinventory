import { Avatar, Box, Container, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { AppBottomNavigation } from "../BottomNavigation";

interface IAppContainerProps {
  children: React.ReactElement;
  title: string;
  subTitle?: string;
}

export const AppContainerPages = ({
  children,
  title,
  subTitle,
}: IAppContainerProps) => {
  return (
    <Container className={styles.containerHome}>
      <Box component="header" className={styles.containerHeader}>
        <Avatar alt="Avatar usuário" sx={{ width: 60, height: 60 }} />
      </Box>
      <Box component="main" className={styles.containerMain}>
        <Box className={styles.boxText}>
          <Typography variant="h3">{title}</Typography>
          {subTitle && (
            <Typography variant="subtitle1">
              {subTitle}
            </Typography>
          )}
        </Box>
        {children}
      </Box>
      <Box component="footer" className={styles.containerFooter}>
        <AppBottomNavigation />
      </Box>
    </Container>
  );
};
