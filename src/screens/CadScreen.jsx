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

const CadScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");


  const handleCadastrar = () => {
    // implementar a lógica de autenticação aqui
  };

  const handlePress = () => {
    // Navegue para o componente CadScreen quando o botão for pressionado
  }



  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageURI }}
        style={styles.backgroundImage}

      >
        <View style={styles.formContainer}>

          <View style={styles.fundo}>


            <div style={styles.Log} ><Text style={styles.tex}>Cadastrar</Text></div>


         
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#999"
              secureTextEntry
              value={nome}
              onChangeText={setNome}
            />
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
              placeholder="Telefone"
              placeholderTextColor="#999"
              secureTextEntry
              value={telefone}
              onChangeText={setTelefone}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
             <TouchableOpacity onPress={handlePress}>
              <Text style={styles.link}>Imagem de Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
              <Text style={styles.buttonText}>Cadastrar</Text>
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
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 0,
    
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
    height: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 400,
    backgroundColor: "#fff",
    width: 200,
    marginLeft: 50,
    marginTop: 0,
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
  fundo: {
    flex: 1,
    width: 300,
    height: 80,
    paddingBottom: 10,
    backgroundColor: "#76bb39",
    borderRadius: "40px",
    marginLeft: 55,
    marginTop: 90,
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

export default CadScreen;
