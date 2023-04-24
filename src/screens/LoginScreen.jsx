import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import image from "../../assets/Fundao.jpg";

const imageURI = image;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    // Implement the authentication logic here
    // ...
  
    // Navigate to the home screen
    navigation.navigate('Inicio');
  };
  


  const handlePress = () => {
    // Navegue para o componente CadScreen quando o botão for pressionado
    navigation.navigate('Cadastrar')
  }
  const handlePressed = () => {
    // Navegue para o componente CadScreen quando o botão for pressionado

    navigation.navigate('EsqueceuScreen');
  }
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageURI }}
        style={styles.backgroundImage}

      >
        <View style={styles.formContainer}>

          <View style={styles.fundo}>


            <div style={styles.Log} ><Text style={styles.tex}>Login</Text></div>


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
  tex: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 115,
    fontSize: 30,
  },
  link: {
    color: "#5271FF",
    fontWeight: "bold",
    marginLeft: 65,
  },
  lin: {
    color: "#5271FF",
    fontWeight: "bold",
    marginLeft: 85,

  },
  formContainer: {
    height: 450,
    marginTop: 40,
    marginBottom: 0,
  },
  input: {
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 400,
    backgroundColor: "#fff",
    width: 200,
    marginLeft: 50,
  },
  button: {
    height: 40,
    borderRadius: 40,
    backgroundColor: "#38b6ff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginLeft: 100,
    marginTop: 25,
    marginBottom: 20,
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
