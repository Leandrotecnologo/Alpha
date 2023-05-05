import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import Fundao from "../../assets/Fundao.jpg";
import logo from "../../assets/Fundasc.png";

const imagemURI = Fundao;
const LogoURI = logo;






const EsqueceuScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const handleSubmit = () => {
    // Aqui você pode enviar uma solicitação para o servidor para redefinir a senha do usuário
    console.log(`Um email foi enviado para ${email} com a nova senha: ${novaSenha}`);
    setEmail('');
    setNovaSenha('');
  };
  const handleEsqueceu = () => {
    // Implement the authentication logic here
    // ...
  
    // Navigate to the home screen
    navigation.navigate('Logout');
  };



  return (
    <View style={styles.container}>

<ImageBackground source={imagemURI} style={styles.backgroundImage}>
     <Image source={LogoURI} style={styles.logo} />
        <View style={styles.formContainer}>
          <View style={styles.fundo}>
            <Text style={styles.tex}>Alterar</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Nova senha"
              placeholderTextColor="#999"
              value={novaSenha}
              onChangeText={setNovaSenha}
              secureTextEntry={true}
            />
           <TouchableOpacity style={styles.button} onPress={handleEsqueceu}>
              <Text style={styles.buttonText}>Alterar</Text>
            </TouchableOpacity>
          </View>

        </View >
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
    marginLeft: 70,
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

export default EsqueceuScreen;


