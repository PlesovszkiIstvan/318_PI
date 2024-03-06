/*
* File: App.js
* Author: Plesovszki István
* Copyright: 2024, Plesovszki István
* Group: Szoft II/2/N
* Date: 2024-03-06
* Github: https://github.com/PlesovszkiIstvan/318_PI
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput, View,Pressable } from 'react-native';

export default function App() {

  const[circumference,setCircumference] = React.useState('');
  const[lenght,setLenght] = React.useState('');
  const[surface,setSurface] = React.useState('');

  function calc(){
    return (2 * Math.PI * (Math.pow(circumference,2))) + (2 * Math.PI * (Math.pow(lenght,2)))
  }

  function getSurface(){
    let res = calc()
    setSurface(res)
  }


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Kör alapú henger számítása
      </Text>
      <Text style={styles.mark}>
        készitette: Plesovszki István {"\n"}
        osztály: Szot II/2/N {"\n"}
        dátum: 2024.03.06
      </Text>

      <Text>Kérem a sugarát</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setCircumference(text)}
      />

      <Text>Kérem a hosszát</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setLenght(text)}
      />

      <Pressable style={styles.pressable} onPress={getSurface}>
        <Text>Művelet</Text>
      </Pressable>

      <TextInput
        style={styles.input}
        value={surface}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
  },
  input: {
    height: '5%',
    width: '70%',
    borderColor: '#000',
    borderWidth: 1,
    margin: 15,
  },
  pressable: {
    borderColor: '#000',
    borderWidth: 1,
    margin: 15,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 25,
  },
  mark: {
    fontSize: 15,
    textAlign: "center",
    marginBottom:15
  }
});
