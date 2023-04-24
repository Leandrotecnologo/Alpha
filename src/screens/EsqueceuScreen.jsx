import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import image from "../../assets/Fundao.jpg";




const imageURI = image;




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
            <div style={styles.Log} ><Text style={styles.tex}>Alterar</Text></div>
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
    marginLeft: 0,
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
    marginTop: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  fundo: {
    flex: 1,
    width: "300px",
    height: "80px",
    paddingBottom: 10,
    backgroundColor: "#76bb39",
    borderRadius: "40px",
    marginLeft: 55,
    marginTop: 120,
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

export default EsqueceuScreen;


