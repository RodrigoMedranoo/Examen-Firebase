import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; // Importa la función signOut
import app from '../../firebaseconfig';
import { Box, Text, Button } from '@chakra-ui/react'; // Importa los componentes de Chakra UI

const Profile = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user.email);
        console.log(user);
      } else {
        setUserAuth(null);
      }
    });

    return () => unsubscribe(); // Limpia el listener en el cleanup de useEffect
  }, [auth]); // Agrega auth como dependencia para reaccionar a cambios en la autenticación

  const handleLogout = () => {
    signOut(auth) // Cierra sesión utilizando Firebase Auth
      .then(() => {
        console.log('Sesión cerrada exitosamente');
        navigate('/login'); // Redirige al usuario a la pantalla de inicio de sesión (Login)
      })
      .catch((error) => console.error('Error al cerrar sesión:', error));
  };

  return (
    <Box>
      <Text>Bienvenido, {userAuth || 'Invitado'}</Text>
      {userAuth && (
        <Button colorScheme="blue" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      )}
    </Box>
  );
};

export default Profile;
