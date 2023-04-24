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
import ImagePicker from 'react-native-image-picker';


const imageURI = image;

const CadScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [imagemPerfil, setImagemPerfil] = useState(null);

  const selecionarImagemPerfil = () => {
    ImagePicker.showImagePicker({}, response => {
      if (response.uri) {
        setImagemPerfil(response.uri);
      }
    });
  };

  const handleCadastrar = () => {
    // Implement the authentication logic here
    // ...
  
    // Navigate to the home screen
    navigation.navigate('LoginScreen');
  };



  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageURI }}
        style={styles.backgroundImage}

      >
        <View style={styles.formContainer}>

          <View style={styles.fundo}>

                <View style={styles.Log}>
            <Text style={styles.tex}>Cadastrar</Text>
            </View>

         
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
             <TouchableOpacity onPress={selecionarImagemPerfil}>
        {imagemPerfil ? (
          <Image source={{ uri: imagemPerfil }} style={styles.imagemPerfil} />
        ) : (
          <Text style={styles.link}>Selecionar foto de perfil</Text>
        )}
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
    fontSize: 30,
    marginLeft: 80,
    marginTop: 0,
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
  imagemPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
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
  fundo: {
    flex: 1,
    width: 300,
    height: 80,
    paddingBottom: 10,
    backgroundColor: "#76bb39",
    borderRadius: "40px",
    marginLeft: 55,
    marginTop: 70,
  },
  Log: {
    flex: 1,
    marginLeft: 0,
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
