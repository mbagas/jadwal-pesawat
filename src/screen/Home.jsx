import React, { useRef, useState } from 'react';
import { SafeAreaView, TextInput, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { JADWAL, MASKAPAI, BANDARA } from '../utils/data'; 

const Home = ({navigation}) => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');

    const departureRef = useRef('');
    const arrivalRef = useRef('');

    const onSubmit = () => {

        let newDeparture;
        for(const [key, value] of Object.entries(BANDARA)){
            if(value.bandara_nama === departure){
                newDeparture = (key);
                break;
            }
        }
        let newArrival;
        for(const [key, value] of Object.entries(BANDARA)){
            if(value.bandara_nama === arrival){
                newArrival = (key);
                break;
            }
        }
        
        console.log(newDeparture);
        navigation.navigate('Detail', {
            departure: newDeparture,
            arrival: newArrival,
            // date,
        });
    }

    return (
        <SafeAreaView style={{ flex:1}}>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <View style={styles.fieldContainer}>
                            <Input 
                                type="text"
                                ref={arrivalRef}
                                value={departure}
                                onChange={e => setDeparture(e.target.value)}
                                placeholder="Lokasi Keberangkatan"
                                label="Lokasi Keberangkatan"
                                autoCompleteType={undefined}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Input 
                                ref={arrivalRef} 
                                value={arrival}
                                onChange={e => setArrival(e.target.value)}
                                placeholder="Lokasi Tujuan"
                                label="Lokasi Tujuan"
                                autoCompleteType={undefined}
                            />
                        </View>
                        <View style={styles.container}>
                            <Button title="Cari" style={styles.button} onPress={onSubmit} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#88b454',

    },
    formContainer: {
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        borderRadius: 15,
    },
    fieldContainer: {
        marginHorizontal: 10,
        paddingTop: 2,
    },
    button: {

    }
})

export default Home;


// const data = BANDARA.filter(el => Object.values(el)[0].bandara_nama === 'Soekarno Hatta');
        

// console.log(Object.keys(BANDARA));
