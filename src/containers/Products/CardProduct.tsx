import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ProductResponse } from "../../models/products";
import plateImg from "../../assets/plate.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RepartitionIcon from "@mui/icons-material/Repartition";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

interface ICardProductProps extends ProductResponse {}

export const CardProduct = ({
  name,
  type,
  amount,
  amountMax,
  amountMin,
  id
}: ICardProductProps) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, padding: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={plateImg}
          alt="green iguana"
        />
        <CardContent className={styles.cardContent}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {type}
          </Typography>
        
        </CardContent>
        <CardContent className={styles.cardContentTwo} sx={{color: "text.secondary"}}>
          <Typography variant="body2">Quantidade: {amount}</Typography>
          <Typography variant="body2">Qtd. Minima: {amountMin}</Typography>
          <Typography variant="body2">Qtd. Maxima: {amountMax}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        className={styles.cardActions}
      >
        <Button startIcon={<AddIcon />} onClick={() => navigate(`/movimentacoes/cadastrar/${id}/${name}/Entrada`)}>
          Entrada
        </Button>
        <Button startIcon={<RemoveIcon />} onClick={() => navigate(`/movimentacoes/cadastrar/${id}/${name}/Saída`)}>
          Saída
        </Button>
        <Button startIcon={<RepartitionIcon onClick={() => navigate(`/movimentacoes/${id}/${name}`)}/>}>
          Movimentações
        </Button>
      </CardActions>
    </Card>
  );
};
