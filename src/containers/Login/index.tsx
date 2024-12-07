import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PAGE } from "../../constants";
import { Button, Container } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import logoPng from "../../assets/logo.png"
import { initializeApp } from "firebase/app";
import { Title } from "@mui/icons-material";
const provider = new GoogleAuthProvider();

interface IForm {
  username: string;
  password: string;
}

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
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isValid: isValidForm },
  } = useForm<IForm>({ mode: "all" });

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
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          margin: "auto",
          height: "100vh",
          width: "100vh"
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "400px",
            gap: "12px",
          }}
        >
          <img  src={logoPng} style={{width: "150px"}}/>
          <div style={{textAlign: "center"}}>
            <h1>Bem-vindo</h1>
            <p>Tenha a gestão do seu estoque na palma da sua mão</p>
          </div>
          <Button type="submit" variant="contained" size="large" style={{gap: '20px'}}>
            <GoogleIcon /> Iniciar Sessão com o Google
          </Button>
        </form>
      </div>
    </Container>
  );
};

// Inline styles
// const styles = {
//   container: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "300px 50%", // Set the desired width and height for the background image
//     backgroundPosition: "top",
//     backgroundRepeat: "no-repeat",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//     padding: "20px",
//     boxSizing: "border-box",
//   },
//   logoBox: {
//     width: "100px",
//   },
//   p: {
//     //add paddinf top
//   },
//   title: {
//     marginBottom: "20px",
//     fontSize: "2rem",
//     color: "#000",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     width: "300px",
//     background: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//   },
//   input: {
//     marginBottom: "15px",
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "1rem",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   },
// };
