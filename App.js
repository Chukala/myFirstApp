import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{ backgroundColor:"#B3Cfdd", paddingVertical: '15px', paddingHorizontal: '0px'}}>
        <Text style={{fontWeight: "bold", fontSize: "2rem"}}>Hello World!</Text>
        <Text style={{fontSize: "1.5rem", fontWeight: "400"}}>First React Native App</Text>
        <Text style={{height:"100"}}>This is a paragraph explaining what this app is all about.As you can see there are already many components including text,images and buttons</Text>
      </View>
      <View style={{marginVertical: '20px'}}>
        <Text style={{fontWeight: "bold", fontSize:"1.25rem"}}>What would you like to get out of this course?</Text>
          <TextInput 
           placeholder="initial Text" 
           multiline={true}
            style={{
              height: 100,
              backgroundColor: "lightgray"
            }}
          />
      </View>
      <View style={{ marginTop: '10px'}}>
        <Text style={{fontWeight: "bold", fontSize:"1.25rem"}} >An emoji descrbing how you are feeling about the cousrs:</Text>
        <Image
            source={require('./assets/icon.png') 
            }
            style={{ width: 150, height: 150}}
          />
      </View>
      <View style={{marginVertical: '15px', marginHorizontal: 'auto', width: '15'}}>
        <Button title="Submit"
          style={{backgroundColor: "none"}}
        /> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    width: '50',
    alignItems: 'flexStart',
    justifyContent: 'flexStart'
  },
});
