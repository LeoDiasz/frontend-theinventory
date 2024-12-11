import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PAGE } from "../../constants";
import { Button, Container, Typography } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import logoPng from "../../assets/logo.png";
import { initializeApp } from "firebase/app";
import styles from "./styles.module.scss"

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDNdivGyk4JMbglbqI5aDkr1j3f97vdj7I",
  authDomain: "theinventoryz.firebaseapp.com",
  projectId: "theinventoryz",
  storageBucket: "theinventoryz.firebasestorage.app",
  messagingSenderId: "1061441915487",
  appId: "1:1061441915487:web:35fc79e5eb049b273d29ea",
};

const app = initializeApp(firebaseConfig);

export const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const {
    handleSubmit,
  } = useForm({ mode: "all" });

  const onSubmit = handleSubmit(async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        toast.success("Login realizado com sucesso!");
        localStorage.setItem("token", token!);
        console.log("Token", token);
        console.log("User", user);
        navigate(PAGE.HOME());
      })
      .catch((error) => {
        const errorsCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error("Não foi possivel realizar o Login");
      });
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(PAGE.HOME()); // Redirect to dashboard if token exists
    }
  }, [navigate]);

  return (
    <Container maxWidth="md" className={styles.containerLogin}>
      <form onSubmit={onSubmit} className={styles.form}>
        <img src={logoPng} />
        <div>
          <Typography variant="h2">Bem-vindo</Typography>
          <Typography variant="h6" >
            Tenha a gestão do seu estoque na palma da mão!
          </Typography>
        </div>
        <Button
          type="submit"
          variant="contained"
          size="large"
        >
          <GoogleIcon /> Iniciar Sessão com o Google
        </Button>
      </form>
    </Container>
  );
};
