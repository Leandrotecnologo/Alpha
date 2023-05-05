import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image from "../../assets/Fundao.jpg";

const imageURI = image;

const LogoScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Logout' }],
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
    <ImageBackground source={imageURI} style={styles.backgroundImage}>

    
      <Image source={require('../../assets/lolo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#1DB954" />
    
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 500,
    height: 500,
    marginBottom: 20,
    marginRight: 0,
  },
});

export default LogoScreen;

