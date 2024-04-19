import { useState } from "react";
import app from "../../firebaseconfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Heading, Input, VStack } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Se autenticó con el email", email);
        navigate("/"); // Redirige al usuario a la ruta del Home ("/") después del inicio de sesión exitoso
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <Box
        backgroundImage={
          "https://surtido.pe/wp-content/uploads/2021/06/Valorant-Riot-Games-FPS-Masters-Millones-Jugadores-Online-Juego-Videojuego-FPS-Tactico-Anna-Donlon-Champions-Tour-2021-Sentinels-FNATIC.jpg"
        }
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        w={"100%"}
        h={"911"}
        justifyContent="center"
        alignItems="center"
      >
        <Card bg={"#ffffff"} p={5}>
          <Heading
            bgGradient="linear(to-l, #84926a, #4c4a45)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="bold"
          >
            Iniciar Sesion
          </Heading>
          <VStack spacing={2}>
            <Input
              placeholder="Correo"
              variant="outline"
              value={email} // Asigna el valor del estado email al Input
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado email al cambiar el valor del Input
            ></Input>
            <Input
              placeholder="Contraseña"
              variant="outline"
              value={password} // Asigna el valor del estado password al Input
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado password al cambiar el valor del Input
            ></Input>
          </VStack>
          <Box my={2} />
          <Button bg="#450068" color="#ffffff" borderRadius={"30px"} onClick={handleLogin}> {/* Utiliza handleLogin para manejar el inicio de sesión */}
            Iniciar Sesion
          </Button>
          <Button variant="link" onClick={() => navigate("/signup")}>
            No tienes una cuenta? Registrate
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default Login;
