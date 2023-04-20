import React, { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';





export default function HomeScreen() {

    const navigation = useNavigation();

    const [userCount, setUserCount] = useState(0);





    const handleUserConnect = () => {

        setUserCount(userCount + 1);

    };






    const handleUserDisconnect = () => {

        setUserCount(userCount - 1);

    };






    return (

        <View style={styles.container}>

            <Text style={styles.title}>Olá seja bem vindo,</Text>

            <Text style={styles.title}>para onde você quer ir</Text>

            <Text style={styles.title}>Usuários online: {userCount}</Text>

            <Button

                title="Ver informações do seu dispositivo"

                onPress={() => navigation.navigate('DeviceInfoScreen')}

            />

            <Button title="Formulario" onPress={() => navigation.navigate('FormScreen')} />
            <Button title="locutores" onPress={() => navigation.navigate('LocutoresScreen')} />
            <Button title="Contato" onPress={() => navigation.navigate('ContatoScreen')} />
            <Button title="Inicio" onPress={() => navigation.navigate('InicioScreen')} />

            <Button title="Conectar" onPress={handleUserConnect} />

            <Button title="Desconectar" onPress={handleUserDisconnect} />

        </View>

    );

}





const styles = StyleSheet.create({

    container: {

        flex: 1,

        alignItems: 'center',

        justifyContent: 'center',

    },

    title: {

        fontSize: 24,

        fontWeight: 'bold',

        marginBottom: 20,

    },
});