import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import imagem from '../../assets/Fundao.jpg';
import logo from '../../assets/Logo.png';

const logoURI = logo;
const imageURI = imagem;

const ProgramScreen = ({ navigation }) => {
    const [expandedDays, setExpandedDays] = useState([]);

    const toggleDay = (day) => {
        if (expandedDays.includes(day)) {
            setExpandedDays(expandedDays.filter((d) => d !== day));
        } else {
            setExpandedDays([...expandedDays, day]);
        }
    };

    const isDayExpanded = (day) => expandedDays.includes(day);

    return (
        <ImageBackground
        source={{ uri: imageURI }}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
        ><Image source={logoURI} style={styles.logo} /></TouchableOpacity>
        <View style={styles.container}>
     
            <TouchableOpacity style={isDayExpanded('Segunda') ? styles.dayExpanded : styles.day} onPress={() => toggleDay('Segunda')}>
                <Text style={styles.dayText}>Segunda</Text>
                {isDayExpanded('Segunda') && (
                               <View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>6:00 - 8:00 </Text>
                                 <Text style={styles.programText}>Hora do Evangelho</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>8:00 - 10:00 </Text>
                                 <Text style={styles.programText}>Café com Música</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>10:00 - 12:00 </Text>
                                 <Text style={styles.programText}>Geração 90</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>12:00 - 14:00 </Text>
                                 <Text style={styles.programText}>A Voz da Liberdade</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>14:00 - 16:00 </Text>
                                 <Text style={styles.programText}>O Melhor do Indie</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>16:00 - 18:00 </Text>
                                 <Text style={styles.programText}>Sessão Samba</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>18:00 - 20:00 </Text>
                                 <Text style={styles.programText}>O show de comédia</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>20:00 - 22:00 </Text>
                                 <Text style={styles.programText}>Noites de Jazz</Text>
                               </View>
                 
                             </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={isDayExpanded('Terça') ? styles.dayExpanded : styles.day} onPress={() => toggleDay('Terça')}>
                <Text style={styles.dayText}>Terça</Text>
                {isDayExpanded('Terça') && (
                             <View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>6:00 - 8:00 </Text>
                               <Text style={styles.programText}>Hora do Evangelho</Text>
                             </View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>8:00 - 10:00 </Text>
                               <Text style={styles.programText}>Popmania</Text>
                             </View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>10:00 - 12:00 </Text>
                               <Text style={styles.programText}>Geração 80</Text>
                             </View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>12:00 - 14:00 </Text>
                               <Text style={styles.programText}>A Voz da Liberdade</Text>
                             </View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>14:00 - 16:00 </Text>
                               <Text style={styles.programText}>RockIn</Text>
                             </View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>16:00 - 18:00 </Text>
                               <Text style={styles.programText}> Reggae Island</Text>
                             </View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>18:00 - 20:00 </Text>
                               <Text style={styles.programText}>O show de comédia</Text>
                             </View>
                             <View style={styles.programContainer}>
                               <Text style={styles.timeText}>20:00 - 22:00 </Text>
                               <Text style={styles.programText}>ElectCity</Text>
                             </View>
               
                           </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={isDayExpanded('Quarta') ? styles.dayExpanded : styles.day} onPress={() => toggleDay('Quarta')}>
                <Text style={styles.dayText}>Quarta</Text>
                {isDayExpanded('Quarta') && (
                   <View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>6:00 - 8:00 </Text>
                     <Text style={styles.programText}>Hora do Evangelho</Text>
                   </View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>8:00 - 10:00 </Text>
                     <Text style={styles.programText}>Café com Música</Text>
                   </View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>10:00 - 12:00 </Text>
                     <Text style={styles.programText}>Geração 70</Text>
                   </View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>12:00 - 14:00 </Text>
                     <Text style={styles.programText}>A Voz da Liberdade</Text>
                   </View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>14:00 - 16:00 </Text>
                     <Text style={styles.programText}>O Melhor do Indie</Text>
                   </View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>16:00 - 18:00 </Text>
                     <Text style={styles.programText}>Sessão Samba</Text>
                   </View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>18:00 - 20:00 </Text>
                     <Text style={styles.programText}>O show de comédia</Text>
                   </View>
                   <View style={styles.programContainer}>
                     <Text style={styles.timeText}>20:00 - 22:00 </Text>
                     <Text style={styles.programText}>Noites de Jazz</Text>
                   </View>
     
                 </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={isDayExpanded('Quinta') ? styles.dayExpanded : styles.day} onPress={() => toggleDay('Quinta')}>
                <Text style={styles.dayText}>Quinta</Text>
                {isDayExpanded('Quinta') && (
                               <View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>6:00 - 8:00 </Text>
                                 <Text style={styles.programText}>Hora do Evangelho</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>8:00 - 10:00 </Text>
                                 <Text style={styles.programText}>Popmania</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>10:00 - 12:00 </Text>
                                 <Text style={styles.programText}>Geração 60</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>12:00 - 14:00 </Text>
                                 <Text style={styles.programText}>A Voz da Liberdade</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>14:00 - 16:00 </Text>
                                 <Text style={styles.programText}>RockIn</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>16:00 - 18:00 </Text>
                                 <Text style={styles.programText}> Reggae Island</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>18:00 - 20:00 </Text>
                                 <Text style={styles.programText}>O show de comédia</Text>
                               </View>
                               <View style={styles.programContainer}>
                                 <Text style={styles.timeText}>20:00 - 22:00 </Text>
                                 <Text style={styles.programText}>ElectCity</Text>
                               </View>
                 
                             </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={isDayExpanded('Sexta') ? styles.dayExpanded : styles.day} onPress={() => toggleDay('Sexta')}>
                <Text style={styles.dayText}>Sexta</Text>
                {isDayExpanded('Sexta') && (
                         <View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>6:00 - 8:00 </Text>
                           <Text style={styles.programText}>Hora do Evangelho</Text>
                         </View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>8:00 - 10:00 </Text>
                           <Text style={styles.programText}>Café com Música</Text>
                         </View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>10:00 - 12:00 </Text>
                           <Text style={styles.programText}>Geração 50</Text>
                         </View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>12:00 - 14:00 </Text>
                           <Text style={styles.programText}>A Voz da Liberdade</Text>
                         </View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>14:00 - 16:00 </Text>
                           <Text style={styles.programText}>O Melhor do Indie</Text>
                         </View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>16:00 - 18:00 </Text>
                           <Text style={styles.programText}>Sessão Samba</Text>
                         </View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>18:00 - 20:00 </Text>
                           <Text style={styles.programText}>O show de comédia</Text>
                         </View>
                         <View style={styles.programContainer}>
                           <Text style={styles.timeText}>20:00 - 22:00 </Text>
                           <Text style={styles.programText}>Noites de Jazz</Text>
                         </View>
           
                       </View>
                )}
            </TouchableOpacity>
            
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 50,
        position: 'absolute',
        top: 12,
        left: 12,
      },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      programContainer: {
        marginLeft: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      timeText: {
        marginLeft: 50,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 16,
      },
      programText: {
        marginLeft: 50,
        color: 'white',
        fontSize: 16,
      },
    day: {
        backgroundColor: '#76BB39',
        width: 300,
        height: 50,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayExpanded: {
        backgroundColor: '#76BB39',
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    dayText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    time: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 5,
    },
});

export default ProgramScreen;
