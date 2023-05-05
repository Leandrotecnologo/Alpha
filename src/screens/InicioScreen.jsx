import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const imageURI = require('../../assets/back.png');
const musicaURI = require('../../assets/musica.gif');
const brancoURI = require('../../assets/branco.png');
const logoURI = require('../../assets/Logo.png');
const musicURL = require('../../assets/BackInBlack.mp3'); // substitua pela URL da sua música

const InicioScreen = ({ navigation }) => {
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState();

  const togglePlayback = async () => {
    if (playing) {
      await sound.pauseAsync();
      setPlaying(false);
    } else {
      try {
        const { sound } = await Audio.Sound.createAsync(musicURL, { shouldPlay: true });
        setSound(sound);
        setPlaying(true);
      } catch (error) {
        console.error(error);
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <ImageBackground source={imageURI} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={logoURI} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={logoURI} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.overlay}>
          <Text style={styles.userCount}>Users: 10</Text>
          <Image source={musicaURI} style={styles.Image} />
          <Image source={brancoURI} style={styles.Image2} />
          <TouchableOpacity style={styles.button} onPress={togglePlayback}>
            <Text style={styles.buttonText}>
              {playing ? 'Parar música' : 'Reproduzir música'}
            </Text>
          </TouchableOpacity>
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
  overlay: {
    marginTop: 70,
  },
  drawer: {
    headerShown: false,
    drawerStyle: {
      backgroundColor: '#00FF00',
    },
  },
  button: {
      backgroundColor: '#76BB39',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
      alignSelf: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
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
    alignItems: 'center',
    marginLeft: 50,
  },
  Image2: {
    width: 300,
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 30,
  },
  userCount: {
    color: '#0f0',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20

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


