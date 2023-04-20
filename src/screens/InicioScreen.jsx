import React from 'react';
import { StyleSheet, ImageBackground, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';




const imageURI = require('../../assets/back.png');
const musicaURI = require('../../assets/musica.gif');
const brancoURI = require('../../assets/branco.png');
const logoURI = require('../../assets/Logo.png');

const InicioScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <ImageBackground source={{ uri: imageURI }} style={styles.backgroundImage}>
                <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
        ><Image source={logoURI} style={styles.logo} /></TouchableOpacity>

        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
        ><Image source={logoURI} style={styles.logo} /></TouchableOpacity>

        <View style={styles.overlay}>

          <Text style={styles.userCount}>Users: 10</Text>
          <Image source={musicaURI} style={styles.Image} />
          <Image source={brancoURI} style={styles.Image2} />
          <TextInput style={styles.input} placeholder="Peça sua música" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    marginTop: 70,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  drawer: {
    headerShown: false,
    drawerStyle: {
      overlayColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
  logo: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: 12,
    left: 12,
  },
  Image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    alignItems: 'Center',
    marginLeft: 30,
  },
  Image2: {
    width: 300,
    height: 150,
    borderRadius: 20,
    alignItems: 'Center',
    marginLeft: 30,
    marginTop: 30,
  },
  userCount: {
    color: '#0f0',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 30,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingLeft: 100,
    color: 'white',
    marginLeft: 30,
    backgroundColor: '#76BB39',
  },
});

export default InicioScreen;


