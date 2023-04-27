import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import backgroundImage from '../../assets/back.png';
import zezoImage from '../../assets/zezo.jpg';
import mariaImage from '../../assets/maria.jpg';
import logoImage from '../../assets/Logo.png';

const LocutoresScreen = () => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
    >
      <TouchableOpacity
        style={styles.drawer}
        onPress={() => navigation.openDrawer()}
      >
        <Image source={logoImage} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>LOCUTORES:</Text>
        <View style={styles.locutorCard}>
          <Image source={zezoImage} style={styles.locutorImage} />
          <View style={styles.locutorInfo}>
            <Text style={styles.locutorName}>Zezo Machado</Text>
            <Text style={styles.locutorDescription}>@Zezomachado</Text>
          </View>
        </View>
        <View style={styles.locutorCard}>
          <Image source={mariaImage} style={styles.locutorImage} />
          <View style={styles.locutorInfo}>
            <Text style={styles.locutorName}>Maria Tamarez</Text>
            <Text style={styles.locutorDescription}>@MariMari25</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: 12,
    left: 12,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 13,
    marginTop: 20,
    marginTop: 60,
  },
  locutorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 9.0,
    shadowRadius: 0,
  },
  locutorImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginRight: 20,
    borderWidth: 7,
    borderColor: '#8EF830',
  },
  locutorInfo: {
    flex: 1,
  },
  locutorName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
    textAlign: 'left' // change this to a valid value
  },
  
    locutorDescription: {
        color: '#fff',
        fontSize: 18,
        marginTop: 0,
        marginBottom: 0,
    },
});

export default LocutoresScreen;
