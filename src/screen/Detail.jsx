import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';
import { JADWAL, MASKAPAI, BANDARA } from '../utils/data'; 
import { NativeRouter, Route, Link } from "react-router-native";

const filtered_jadwal = (departure, arrival) => {
  const data = JADWAL.filter(function(item){
    return item.bandara_kode_keberangkatan == departure && item.bandara_kode_tujuan == arrival;
 }).map(function({id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id}){
     return {id, bandara_kode_keberangkatan, bandara_kode_tujuan, maskapai_id};
 });
  return data;
}


const Item = ({ departure, arrival, maskapai_id }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{BANDARA[departure].bandara_nama}</Text>
    <Text style={styles.title}>{BANDARA[arrival].bandara_nama}</Text>
    <Text style={styles.title}>{MASKAPAI[maskapai_id].maskapai_nama}</Text>
  </View>
);


const Detail = ({navigation, route}) => {
    const {departure, arrival} = route.params;
  const renderItem = ({ item }) => (
    <Item departure={item.bandara_kode_keberangkatan} arrival={item.bandara_kode_tujuan} maskapai_id={item.maskapai_id}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filtered_jadwal(departure, arrival)}
        renderItem={renderItem}
        keyExtractor={item => item.jadwal_id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#019875',
    marginBottom: 100,
    width: '100%',
    paddingVertical: 15,
    position: 'relative',
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    color: 'white',
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#019875',
    posiion: 'relative',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 32,
  },
});

export default Detail;

console.log(filtered_jadwal("SKH", "RDN"));
console.log(BANDARA[JADWAL[0].bandara_kode_keberangkatan].bandara_nama);
