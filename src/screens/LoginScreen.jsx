import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import image from "../../assets/Fundao.jpg";
import logo from "../../assets/Logo.png";

const imageURI = image;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement the authentication logic here
    // ...

    // Navigate to the home screen
    navigation.navigate("Inicio");
  };

  const handlePress = () => {
    // Navegue para o componente CadScreen quando o botão for pressionado
    navigation.navigate("Cadastrar");
  };
  const handlePressed = () => {
    // Navegue para o componente CadScreen quando o botão for pressionado
    navigation.navigate("EsqueceuScreen");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imageURI} style={styles.backgroundImage}>
      <Image source={logo} style={styles.logo} />
        <View style={styles.overlay}>
        
          <Text style={styles.tex}>Login</Text>

          <View style={styles.formContainer}>
            <View style={styles.logoContainer}>
              
            </View>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePressed}>
              <Text style={styles.lin}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    
    opacity: 0.8,
    height: 450,
    borderRadius: 20,
  },
 
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 50,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  tex: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 130,
    fontSize: 50,
    marginTop: 50,
  },
  link: {
    color: "#5271FF",
    fontWeight: "bold",
    marginLeft: 120,
  },
  lin: {
    color: "#5271FF",
    fontWeight: "bold",
    marginLeft: 120,

  },
  formContainer: {
    height: 450,
    marginTop: 40,
    marginBottom: 0,
  },
  input: {
    height: 40,
    marginBottom: 0,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: 320,
    marginLeft: 45,
    marginTop: 20,
  },
  button: {
    height: 40,
    borderRadius: 40,
    backgroundColor: "#38b6ff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginLeft: 150,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  Log: {
    flex: 1,
    width: "100px",
    marginLeft: 85,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50,
  },


  Text: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 115,
  },
});

export default LoginScreen;
