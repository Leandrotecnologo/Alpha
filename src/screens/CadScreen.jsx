import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import logo from "../../assets/Fundasc.png";
import image from "../../assets/Fundao.jpg";

const imageURI = image;

const CadScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [imagemPerfil, setImagemPerfil] = useState(null);

  const selecionarImagemPerfil = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.uri) {
        setImagemPerfil(response.uri);
      }
    });
  };

  const handleCadastrar = () => {
    // Implement authentication logic here
    // ...
    // Navigate to the home screen
    navigation.navigate('Logout');
  };

  return (
    <View style={styles.container}>
       <ImageBackground source={imageURI} style={styles.backgroundImage}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <View style={styles.fundo}>
            <View style={styles.Log}>
              <Text style={styles.tex}>Cadastrar</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
              />
            
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
              <TouchableOpacity onPress={selecionarImagemPerfil}>
                {imagemPerfil ? (
                  <Image
                    source={{ uri: imagemPerfil }}
                    style={styles.imagemPerfil}
                  />
                ) : (
                  <Text style={styles.link}>Selecionar foto de perfil</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B942C",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    height: 450,
    borderRadius: 20,
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 65,
  },

  tex: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 130,
    fontSize: 50,
    marginEnd: 100,
  },
  link: {
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
    width: 260,
    marginLeft: 0,
    marginTop: 20,
  },
  button: {
    height: 40,
    borderRadius: 40,
    backgroundColor: "#38b6ff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginLeft: 80,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  Log: {
    flex: 1,
    width: 100,
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
